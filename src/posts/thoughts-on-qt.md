---
title: Thoughts on Qt
author: Ethan Zhang
description: Some thoughts on Qt
date: 07/27/2023
id: 4
---

Qt is a cross-platform, C++ library that provides many features, including a GUI toolkit, networking, XML/JSON serialization/deserialization, and more.

I recently decided to give it a try by writing two small applications with it:

- [A real-time chat client using websockets](https://github.com/edzdez/websocket-chat-test) and
- [a client for freebee.fun, a clone of the NYT's Spelling Bee game](https://github.com/edzdez/spelling-bee-qt).

## What I liked

- __Signals and slots:__ \
  Creating and connecting signals/slots is very ergonomic.
  At least to me,
  ```cpp
  QObject::connect(sender, signal, receiver, slot); // Qt
  ```
  is a lot more intuitive
  ```cpp
  m_button.signal_clicked().connect(sigc::mem_fun(target, handler)); // gtkmm
  ```
- __`QtDesigner` (and all the other tooling around Qt):__ \
  I like how you can quickly throw together a UI in QtDesigner and have `moc` automatically translate it into code you can work with.
  It also creates a nice separation between the program logic and the user interface.
  I know that GTK's `Glade` is similar, but I never seem to be able to get it to work correctly.
- __Lots of features:__ \
  There are a ton of modules that cover pretty much everything you need, including networking and database access.
- __The docs are really good.__
- __It's actually cross-platform (compiles on Windows without shenanigans)__

## Things I'm not so sure about

- __`QString`, `QList`, and all the other Qt-specific data structures:__ \
  While they provide more features and are objectively better in some ways than the STL implementations,
  I find it quite annoying to have to constantly convert back and forth between them (e.g. when using other non-Qt libraries).
  This fact also means that you're kinda locked into using Qt for everything.
- __The `QObject` parent/child relationship:__ \
  It seems like the convention in Qt is to construct `QObject`s on the free store using `new` and pass in a raw pointer to a parent object, which would then handle deallocation for you.
  While this dynamic is rather convenient, it goes against everything I've learned about C++ memory management.

## Final thoughts

If I had to pick one word to describe Qt, it would be "convenient."
Even with no prior experience, I was able to get up and running pretty quickly and wrote both apps in around a couple of hours each.
As such, I look forward to working with Qt in the future.
