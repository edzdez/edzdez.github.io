+++
title = 'Thoughts on Sway'
author = 'Ethan Zhang'
description = 'Some thoughts on the Sway window manager.'
date = '2023-07-09'
isPost = true
draft = false
+++

![swaywm](/thoughts-on-sway-blogpost.png)

I got my first taste of tiling window managers back in the summer of 2021, when I installed `sway` on my laptop.

A month or so in, though, I concluded that wayland wasn't quite yet ready for my use, leading to me switching to `i3`,
since I _really_ didn't want to be having any issues with screen-sharing, audio, or Electron / Chromium in the middle of the pandemic.
Additionally, the lack of support for Nvidia GPUs was kinda a deal-breaker, since it meant that I couldn't use it on my desktop.

Over the next two years, I hopped back and forth between different a couple of different window managers:
first `dwm`, which I left due to compatibility issues (e.g. fullscreen windows appearing only in the bottom left corner of my screen and some other things I can't quite recall);
then `XMonad`, which, although is fun to configure (in Haskell!), con sometimes be a bit tough to work with (_especially_ `xmobar`, which I could never quite figure out);
`qtile`, which eased all my configurations woes with the _minor_ caveat of _draining_ my laptop's battery;
and `bspwm`, which I still love using!

After a few mishaps with `xrandr` when presenting at school, however, I've decided to give wayland another shot!

## The Good

- Outputs work _flawlessly_ (monitors with different resolutions or refresh rates, hot-plugging, etc.)
- A lot fewer instances of random screen tearing
- Configuring the mouse and keyboard was super easy and integrated directly in `sway`s config file---I don't need to search for `/etc/X11/xorg.conf.d/40-libinput.conf` (or whichever file it was) again!
- Screen-sharing now works in most apps.
- Nvidia also now mostly works.
- `swaymsg` (and, by extension, `sway-ipc`) is wonderful (though not as nice as `bspc`).
- `sway` has a lot more "batteries included" than most other window managers (wallpapers, idle configuration, etc.)

## The Bad

- I still have issues with Electron/Chromium-based apps.
- XWayland is kinda jank, but you have to deal with it lest you stop using a decent chunk of software.
- `wine` is also still jank.
- No global keybinds (goodbye push-to-talk).
- `sway` lacks many of the cool compositing effects tiling window manager people like to use.

## Final Thoughts

If I had to pick my top-three window managers, I'd say `sway` easily makes the list (along with `bspwm` and `XMonad`).
I'd recommend it to anyone who's looking to get started with tiling window managers, as it strikes a good balance between being extensible and easily customizable.
