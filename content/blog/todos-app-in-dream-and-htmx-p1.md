+++
title = 'Writing a Todo List App in Dream and HTMX'
author = 'Ethan Zhang'
description = 'Part 1/2 of a series of blog posts about writing a full-stack CRUD app in OCaml and HTMX.'
date = '2024-07-05'
isPost = true
draft = true
+++

In this series of blog posts, I'll walk through how I created a classic, full-stack to-do list app,
with the backend using the [Dream](https://aantron.github.io/dream/) library for [OCaml](https://ocaml.org/) and the frontend using the [HTMX](https://htmx.org/) library for interactivity.

This first blog post will focus on getting started with Dream and implementing CRUD (Create, Read, Update, and Delete)
operations for `Todo_item`s with a REST-style API, initially using a mutable list as an in-memory store and later replacing it with a [sqlite3](https://www.sqlite.org/) database.

The next post will then describe how to use HTMX to create a frontend where all the application logic is handled on the backend,
allowing us to deliver an interactive experience *without writing any javascript ourselves*.
We'll also then modify the API from this blog post to respond with HTML instead of JSON so that we more closely align with HTMX conventions.

For those interested, the source code for this project can be found on [GitHub](https://github.com/edzdez/todos-dream-htmx),
with the [following commit](https://github.com/edzdez/todos-dream-htmx/tree/eb358c6a283d9f6144bbf765761b9691f94d69f6) pinned as the "end-state" of this article.

> Note: I'm personally not the most proficient with OCaml, nor do I have much experience with HTMX beyond playing with it for a few hours yesterday.
> As a result, the code written here may deviate from best practices or idiomatic OCaml.
> This post is more about documenting my experience trying out these technologies, but if you notice any issues, feel free to leave an issue or PR on GitHub!

## Problem Definition

First off, let's define the following schemas:

```typescript
// our domain object
interface Todo_item {
    id: int;
    title: string;
    description: string;
}

// the expected request body when creating a new Todo_item
interface create_request {
    title: string;
    description: string;
}

// the expected request body when updating a Todo_item:
interface update_request {
    title?: string;
    description?: string;
}
```

By the end of this article, we want our API to support the following endpoints and behaviors:

- `GET /api/todos`: returns a `200 OK` and a JSON list of all the `Todo_item`s.
- `GET /api/todos/:id`: returns one of:
    - a `400 Bad Request` if `:id` is not an integer,
    - a `404 Not Found` if there is no `Todo_item` with `id = :id`, or
    - a `200 OK` and a JSON object representing the `Todo_item` with `id = :id`.
- `POST /api/todos`: returns either:
    - a `400 Bad Request` if:
        - `Content-Type` header is not `application/json` or
        - the request body does not encode a valid `create_request`, or
    - a `201 Created` with the newly created `Todo_item` as the body and `Location` header set.
- `PATCH /api/todos/:id`: returns one of:
    - a `400 Bad Request` if:
        - `:id` is not an integer,
        - `Content-Type` header is not `application/json`, or
        - the request body does not encode a valid `update_request`,
    - a `404 Not Found` if there is no `Todo_item` with `id = :id`, or
    - a `200 OK` with the updated `Todo_item` as the body and `Content-Location` header set.
- `DELETE /api/todos/:id`: returns one of:
    - a `400 Bad Request` if `:id` is not an integer,
    - a `404 Not Found` if there is no `Todo_item` with `id = :id`, or
    - a `204 No Content` after deleting the `Todo_item` with `id = :id`.

## Setup

After making sure that OCaml, its package manager `opam`, and its build system `dune` are installed,
open up the terminal and create a new project using `dune`:

```shell
$ dune init project todos_dream_htmx
$ cd todos_dream_htmx
```

and install some dependencies via `opam`:

```shell
$ opam install dream tyxml yojson ppx_deriving_yojson
```

Let's quickly walk through what each of these packages are for:

- [Dream](https://aantron.github.io/dream/), as mentioned before, is the web framework that we'll be using.
- [Tyxml](https://ocsigen.org/tyxml/latest/manual/intro) is a library for building type-safe HTML documents.
    Although Dream comes with its own templating system, I prefer using Tyxml since it allows us to statically check our markup for errors.
- [Yojson](https://ocaml-community.github.io/yojson/yojson/index.html) is a JSON parsing library and [ppx_deriving_yojson](https://github.com/ocaml-ppx/ppx_deriving_yojson)
    is a syntax extension that allows for automatic generation of conversion functions between OCaml types and `Yojson.Safe`.

## Hello, World!

So, now that we've got everything installed, we can get started with setting up a Dream server.
In `./bin/dune`, add `dream` and `tyxml` to the list of `libraries` and run `dune build`.
Then, add the following code to `main.ml`:

```ocaml
let string_of_elt elt = Format.asprintf "%a" (Tyxml.Html.pp_elt ()) elt

let root _request =
  Dream.html
  @@ string_of_elt
  @@
  let open Tyxml.Html in
  html (head (title (txt "Hello, world!")) []) (body [ h1 [ txt "Hello, world!" ] ])
;;

let () = Dream.run @@ Dream.logger @@ Dream.router [ Dream.get "/" root ]
```

To build and run the server, open up a terminal and run:
```shell
$ dune exec todos_dream_htmx
```

Navigating to `http://localhost:8080` in a browser should now yield a webpage with the text `Hello, world!`.

### But What Does the Code Do?

Let's step through each function in the code from earlier:

```ocaml
let string_of_elt elt = Format.asprintf "%a" (Tyxml.Html.pp_elt ()) elt
```

This line defines a function `string_of_elt` which allows us to convert a Tyxml element to a string which Dream can then serve.
It's just some extra boilerplate that's necessary since we're using Tyxml to generate our markup, and can even be found at the bottom of the [Tyxml homepage](https://ocsigen.org/tyxml/latest/manual/intro).

```ocaml
let root _request =
  Dream.html
  @@ string_of_elt
  @@
  let open Tyxml.Html in
  html (head (title (txt "Hello, world!")) []) (body [ h1 [ txt "Hello, world!" ] ])
;;
```

This function is an example of how we can create a request handler in Dream.
The first line defines a function `root` that takes a single argument `_request`, which is prefixed by an `_` to indicate that it's unused.

Note that in OCaml, the `@@` operator represents function application, but has lower precedence than normal function application (e.g. `f a`).
While this operator may seem useless at first, its lower precedence allows us to use it in place of nesting parentheses, producing more visually appealing code.
For those of you familiar with Haskell, it's essentially just the `$` operator.

With that said, starting from the bottom up, we take the following markup (written in Tyxml's type-safe, pure OCaml function notation):

```html
<html>
  <head>
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

Pass it through the aforementioned function `string_of_elt` to convert it into a string,
and feed that string to `Dream.html`, which creates a new response with the stringified markup as its body and wraps it in a promise.

```ocaml
let () = Dream.run @@ Dream.logger @@ Dream.router [ Dream.get "/" root ]
```

Finally, looking at the last line tells us how everything is wired together.
After the call to `Dream.run` is the request pipeline: the request is first fed through the `Dream.logger` middleware followed by the `Dream.router`,
which supports one route `GET /` with the previously defined function `root` as its handler.

## CRUD Operations (In-memory)

So, now that the Dream server is up-and-running, let's shift our focus to implementing the desired behavior.
To start, let's take the models we defined earlier and write them as OCaml types.
For organization purposes, I'll encapsulate them within a new `module Todo_item`:

```ocaml
module Todo_item = struct
  (* corresponds to our Todo_item domain object *)
  type t =
    { id : int
    ; title : string
    ; description : string
    }
  [@@deriving yojson]

  (* for serialization purposes, represents a list of 'Todo_item.t`s *)
  type ts = t list [@@deriving yojson]

  (* corresponds to our create_request schema *)
  type create_request =
    { title : string
    ; description : string
    }
  [@@deriving yojson]

  (* corresponds to our update_request schema *)
  type update_request =
    { title : (string[@default ""])
    ; description : (string[@default ""])
    }
  [@@deriving yojson]
end
```

This code is pretty straightforward, but do note the annotations.
`[@@deriving yojson]` is how we tell `ppx_deriving_yojson` to generate the `x_of_yojson` and `x_to_yojson` conversion functions for a given type `t`, and
`[@default ""]` lets us specify a default value for a given field, effectively creating optional fields in `update_request`s.
In order to support these annotations, we need to make the following changes to `./bin/dune`:

```diff
(executable
 (public_name todos_dream_htmx)
 (name main)
-(libraries todos_dream_htmx dream tyxml))
+(libraries todos_dream_htmx dream tyxml yojson ppx_deriving_yojson.runtime)
+(preprocess (pps ppx_deriving_yojson)))
```

Next, let's create an in-memory store with some mock data and a corresponding mutex to ensure synchronization.
Inside the `Todo_item` module, add the following lines of code:

```ocaml
let store : ts ref =
  ref
    [ { id = 0; title = "Hello"; description = "World" }
    ; { id = 1; title = "Test"; description = "Todo" }
    ]
;;

let store_lock = Mutex.create ()
```

For those who haven't worked with mutable data in OCaml before, [the docs](https://ocaml.org/docs/mutability-imperative-control-flow) are a good reference.
In short, the type `'a ref` can be thought of as a pointer in the sense that it "boxes" a value with interior mutability;
in fact, `'a ref` is actually syntactic sugar for the record type `{ mutable contents: 'a }`!

As such, the first part of this code block creates a list of two `Todo_item.t`s, "boxes" it up into a record with a mutable field, and then assigns that record to the variable `store`.
When we later start "mutating" the store, we'll actually only be reassigning `store.contents` to a new list.

The rest of the code is self-explanatory.

### Create

In this section, we will implement the endpoint `POST /api/todos`, which we previously defined as returning either:
- a `400 Bad Request` if:
    - `Content-Type` header is not `application/json` or
    - the request body does not encode a valid `create_request`, or
- a `201 Created` with the newly created `Todo_item` as the body and `Location` header set.

To do so, let's first implement the data-access logic.
In the `Todo_item` module, create the following function

```ocaml
let create (request : create_request) =
  Mutex.protect store_lock (fun _ ->
    let id = List.length !store in
    let todo = { id; title = request.title; description = request.description } in
    store := todo :: !store;
    todo)
;;
```

To avoid race conditions, I acquire a lock on `store_lock` every time I access the store with `Mutex.protect`.
In the critical region, we have the following flow:

1. Save the length of the store (`!store` is sugar for `store.contents`) so we can use it as the `id` of the new `Todo_item.t`.
    > Note: In hindsight, this code has a bug!
    > Suppose that we decide to remove the `Todo_item.t` with `id = 0`.
    > Then, `List.length !store = 1`, so if were to create a new `Todo_item.t`, we would end up with two items with the same `id`!
    > To correctly implement auto-incrementing `id`s, I should've created another `ref` up above with `let id : int ref = ref 2` and incremented on each call to `Todo_item.create`.
    > Oh well.
2. Create a new `Todo_item.t` with the `id` from step 1 and the contents from the `create_request` argument that was passed in.
3. Add the new `Todo_item.t` to the store (`store := foo` is the re-assignment operator and sugar for `store.contents <- foo`).
4. Return the new `Todo_item.t`.

Next, let's implement the handler:

```ocaml
let create_todo request =
  match Dream.header request "Content-Type" with
  | Some "application/json" ->
    let%lwt body = Dream.body request in
    (match Todo_item.create_request_of_yojson @@ Yojson.Safe.from_string body with
     | Error e ->
       Dream.error (fun log ->
         log ~request "Failed to parse Todo_item.create_request with error: %s" e);
       Dream.empty `Bad_Request
     | Ok request ->
       let todo = Todo_item.create request in
       Dream.json
         ~status:`Created
         ~headers:[ "Location", Printf.sprintf "/api/todos/%d" todo.id ]
       @@ Yojson.Safe.to_string
       @@ Todo_item.to_yojson todo)
  | _ -> Dream.empty `Bad_Request
;;
```

> Note: I feel like there's probably a cleaner way to do this (my hunch is on monads),
> but whatever, that's future me's problem!

Although rather ugly, this code is relatively easy to read top-to-bottom and corresponds very well to our spec.

First, we verify that the `Content-Type` is the expected value `application/json`.
If it is, we continue, and if it is not, we return a `400 Bad Request`.

Next, we extract the body from the request with `let%lwt`, which can be thought of as `await`ing a promise
(to enable this syntax extension, add `lwt_ppx` to the `preprocess`/`pps` part of `./bin/dune`), and parse it into a `Todo_item.create_request` record.
If the parsing fails, we log an error message and return a `400 Bad Request`.

If it succeeds, we then call our service method `Todo_items.create` and return the result in JSON following the standard convention for a `201 Created` response.

The last step is to hook up the handler with the `Dream.router`:

```ocaml
let () = Dream.run
  @@ Dream.logger
  @@ Dream.router
    [ Dream.get "/" root
    ; Dream.scope "/api" [] [ Dream.post "/todos" create_todos ]
    ]
```

### Read

In this section, we will be implementing two new endpoints: `GET /api/todos` to get a list of all the `Todo_item`s and `GET /api/todos/:id` to get a single `Todo_item` by its `id`.

#### Get All

As previously defined, this endpoint should return a `200 OK` and a JSON list of all the `Todo_item`s.

In this case, the date access logic is extremely simple since we really only need to return the contents of the store.
So, add the following function to the `Todo_item` module:

```ocaml
let get_all () = Mutex.protect store_lock (fun _ -> !store)
```

Create the handler:

```ocaml
let get_all_todos _request =
  Dream.json @@ Yojson.Safe.to_string @@ Todo_item.ts_to_yojson @@ Todo_item.get_all ()
;;
```

And hook it all up to the `Dream.router`:

```ocaml
let () = Dream.run
  @@ Dream.logger
  @@ Dream.router
    [ Dream.get "/" root
    ; Dream.scope "/api" []
        [ Dream.post "/todos" create_todos
        ; Dream.get "/todos" get_all_todos
        ]
    ]
```

#### Get by Id

This next endpoint is similar but has a bit more logic involved.
Once again, as defined, it should return one of:

- a `400 Bad Request` if `:id` is not an integer,
- a `404 Not Found` if there is no `Todo_item` with `id = :id`, or
- a `200 OK` and a JSON object representing the `Todo_item` with `id = :id`.

You know the drill by now.
Let's first implement the data access logic with a new function in the `Todo_item` module:

```ocaml
let get id =
  Mutex.protect store_lock (fun _ -> List.find_opt (fun todo -> todo.id = id) !store)
;;
```

After obtaining a lock on the mutex, this function uses the built in algorithm `List.find_opt` to search for the `Todo_item.t` with the given `id`.
I use `find_opt` instead of `find` so that, in the case where we search for an `id` that doesn't exist, we get a `None` option instead of an exception.

Now, create the handler:

```ocaml
let get_todo request =
  let id = Dream.param request "id" in
  match int_of_string_opt id with
  | None -> Dream.empty `Bad_Request
  | Some id ->
    (match Todo_item.get id with
     | None -> Dream.empty `Not_Found
     | Some todo -> Dream.json @@ Yojson.Safe.to_string @@ Todo_item.to_yojson todo)
;;
```

Similar to the `create` handler, this function pretty clearly follows the spec when read top-to-bottom:

First, we extract the `id` path parameter from the request and try to parse it into an integer.
If it fails, we return a `400 Bad Request`.

If it succeeds, we move on and call our service function `Todo_item.get`, matching on the result.
In the case of a `None`, we know that there is no `Todo_item` with the given `id`, so we return a `400 Not Found`.

Otherwise, we have `Some todo` that we can serialize and return as a response.

Finally, hooking it up to the `Dream.router`:

```diff
  @@ Dream.router
    [ Dream.get "/" root
    ; Dream.scope "/api" []
        [ Dream.post "/todos" create_todos
        ; Dream.get "/todos" get_all_todos
+       ; Dream.get "/todos/:id" get_todo
        ]
    ]
```

### Update

### Delete

## Persistence

## Final Thoughts
