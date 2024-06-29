+++
title = 'QT First Impressions'
author = 'Ethan Zhang'
description = 'My first impressions of QT'
date = '2023-07-23'
isPost = true
draft = false
+++

Qt is a cross-platform, C++ library that provides many features, including a GUI toolkit, networking, XML/JSON serialization/deserialization, and more.

I recently gave it a try by writing two small application with it:

- [A real-time chat client using websockets](https://github.com/edzdez/websocket-chat-test) and
- [a client for freebee.fun, a clone of the NYT's Spelling Bee game](https://github.com/edzdez/spelling-bee-qt).

## What I liked

- __Signals and slots:__ \
  Creating and connecting signals/slots is very ergonomic.
  In my opinion,
  ```cpp
  QObject::connect(sender, signal, receiver, slot); // Qt
  ```
  is a lot more intuitive than
  ```cpp
  m_button.signal_clicked().connect(sigc::mem_fun(target, handler)); // gtkmm
  ```
- __`QtDesigner` (and the wealth of tooling in the Qt ecosystem):__ \
  I like how you can quickly throw together a UI in QtDesigner and have `moc` automatically translate it into usable code.
  It also helps creates a nice separation between the program logic and the user interface.
  I know that GTK's `Glade` is similar, but I never seem to be able to get it to work correctly.
- __Lots of features:__ \
  There are a ton of modules that cover pretty much everything you need, including networking and database access.
- __The docs are really good.__
- __It's actually cross-platform (compiles on Windows without shenanigans)__

## Things I'm not so sure about

- __`QString`, `QList`, and all the other Qt-specific data structures:__ \
  While they provide more features and are in some ways better than the STL implementations (e.g. with implicit sharing / COW making and parenting to make handling memory easier),
  it is rather annoying to have to constantly convert back and forth between them when using non-QT libraries.
  This dynamic leads to it being more convenient to just use QT everything instead of dealing with conflicts between the QT way and the STL way.
- __The `QObject` parent/child relationship:__ \
  It appears that the convention in Qt is to construct `QObject`s on the free store using `new` and with a raw pointer to a parent object, which would then handle deallocation for you.
  While this dynamic is rather convenient, I'm not quite so sure if I like this approach to memory management over, say, RAII.

## Final thoughts

Overall, I enjoyed working with QT; it was, if anything, quite ergonomic.
Even with no prior experience, I was able to get up and running pretty quickly and only spent a few hours on each app.
So, if I ever find myself in a position where I need to write a GUI app in C++, I'd definitely consider working with QT again.