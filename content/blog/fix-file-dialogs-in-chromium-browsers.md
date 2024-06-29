+++
title = 'A Quick Fix for File Dialogs in Chromium-based Browsers on Wayland'
author = 'Ethan Zhang'
description = 'It worked for me on Sway, and probably works on other WMs too'
date = '2023-10-24'
isPost = true
draft = false
+++

For the past couple of months, I haven't been able to open the file-picker dialog in Chromium-based browsers like Chrome and Brave.
I had first assumed that it was probably because I was missing some system package a la `xdg-desktop-portal`, but alas no, I already had both the `gtk` and `wlr` backends installed.
Plus, it seemed to work perfectly fine in other application, such as Firefox, so I eventually concluded that it was probably just a quirk of Chromium on Wayland.

Recently, however, I came across a [GitHub issue](https://github.com/NixOS/nixpkgs/issues/262286) describing the same problem and an albeit hacky solution.

## The Fix

1. Make sure that you have the `xdg-desktop-portal-gtk` package (or equivalent xdg portal backend) package installed.
2. `cd` to the root directory `/` and search for a file called `gtk.portal`.
   I used the command `fd gtk.portal` and found it at `/usr/share/xdg-desktop-portal/portals/gtk.portal`.
3. Open the file in your text-editor of choice, and add `sway` to the `UseIn` key.
   For example, I changed `UseIn=gnome` to `UseIn=gnome;sway`.

Now, logging out for good measure, you should be able to open file dialogs in Chrome!
