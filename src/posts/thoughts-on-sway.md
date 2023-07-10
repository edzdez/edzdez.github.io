---
title: Thoughts on Sway
author: Ethan Zhang
description: Some thoughts on the Sway window manager
date: 07/09/2023
id: 2
---

![swaywm](/thoughts-on-sway-blogpost.png)

I got my first introduction to tiling window managers with `sway` in the summer of 2021.
After around a month, however, I decided that `Wayland` wasn't quite ready for my use, and I ultimately switched to `i3`
on `X11`.
Although I like the auto-tiling windows and keyboard-driven workflow, I _really_ didn't want to be having any
issues with screen-sharing, audio, or Electron/Chromium-based apps right at the height of the pandemic.
Plus, it would only start on my laptop, as my desktop's Nvidia card wasn't supported (Nvidia had their own way of
implementing `Wayland` support which was different from how literally every other vendor did it).

Over the next two years, I hopped back and forth between different a couple of different window
managers: first `dwm`, which I left due to issues from it not being `ewmh` compliant (e.g. fullscreen
windows and some other things I can't quite recall); then `xmonad`, which, although I still like, can sometimes be a
bit tough to configure (_especially_ `xmobar`, which I could never quite figure out); `qtile`, which eased up all my
configurations woes with the caveat of draining my laptop's battery; and `bspwm`, which I honestly don't have many
complaints about (every tiling window manager should have something like `bspc`).

But after quite a few mishaps with output configuration at school, I decided about a week and a half ago (June 30th) to
give `sway` and `Wayland` another try.

## The Good

- Outputs work flawlessly (monitors with different resolutions or refresh rates, fractional scaling, hot-plugging,
  etc.)--no need to fiddle with `xrandr` anymore!
- No screen-tearing!
- Configuring my mouse and keyboard was super easy--I don't need to search for `/etc/X11/xorg.conf.d/40-libinput.conf`
  or whichever file it was again!
- Screen-sharing now works in most apps.
- Nvidia also now mostly works.
- `swaymsg` (and, by extension, `sway-ipc`) is wonderful.
- `sway` is a lot more "all-in-one" than most other window managers (wallpapers, idle configuration, etc.)
- `Wayland` is "more secure" than `X11`--although this is true, I don't know how important it actually is for my use
  case.

## The Bad

- I still have issues with Electron/Chromium-based apps.
- `XWayland` is kinda jank, but too many pieces of software don't yet run natively on `Wayland`.
- `Wine` is also still jank.
- No global keybinds (goodbye push-to-talk).
- `sway` doesn't have too many cool compositing effects--there's transparency, but that's it.

## Final Thoughts

If I had to pick my "top-three window managers," `sway` would definitely be up there (along with `xmonad` and `bspwm`).
I'd recommend it to anyone new to tiling window managers, as it strikes a good balance between being
extensible and easily customizable.
Additionally, although there are some hiccups, `Wayland`'s been making a lot of progress recently, and I'm confident
they'll all be ironed out soon enough.
