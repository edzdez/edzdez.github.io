---
title: Fixing File Dialogs on Chromium Browsers in Wayland
author: Ethan Zhang
description: Specifically for sway, but it might work for other WM/DEs too
date: 10/24/2023
id: 5
---

For a couple months now, I've noticed that I haven't been able to open the file-picker dialog in chromium based browsers (e.g. chromium, brave, etc.).

Just today, however, I found a [github issue](https://github.com/NixOS/nixpkgs/issues/262286) documenting the same behavior on NixOS and a sort-of hacky solution for it.
After giving it a try on my Fedora machine, it seems to have done the trick.

## The Method

1. Make sure that you have the `xdg-desktop-portal-gtk` package (or equivalent for your distro) package installed.
2. `cd` to the root directory `/` and search for a file called `gtk.portal`.
   To do this, I used the command `fd gtk.portal`, which found the file at `/usr/share/xdg-desktop-portal/portals/gtk.portal`.
3. Open this file in your text-editor of choice:
    1. Search for where it says `UseIn=gnome`
    2. Change it to `UseIn=gnome;sway`

