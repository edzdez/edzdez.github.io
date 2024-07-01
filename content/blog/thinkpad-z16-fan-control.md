+++
title = 'Thinkpad Z16 Fan Control with Thinkfan'
author = 'Ethan Zhang'
description = 'Setting up fan control for my Thinkpad Z16.'
date = '2023-07-13'
isPost = true
draft = false
+++

> **_NOTE:_** This is how I configured `thinkfan` for my Thinkpad Z16 Gen 1 on Fedora 38.
> I don't guarantee that this'll work for any other machine.

## Setup

1. Enable fan control.
   As root:
   ```shell
   $ echo "options thinkpad_acpi fan_control=1" > /etc/modprobe.d/thinkfan.conf
   $ modprobe thinkpad_acpi
   ```
   And reboot.
2. Build [`thinkfan`](https://github.com/vmatare/thinkfan) from source by following the instructions in [the README](https://github.com/vmatare/thinkfan/blob/master/README.md).
   At the time of writing:
    1. Install dependencies:
       ```shell
       $ sudo dnf install -y cmake g++ pkgconfig yaml-cpp-devel lm_sensors-devel
       ```
    2. Create a build folder:
       ```shell
       $ mkdir build && cd build
       ```
    3. Configure the build directory (make sure `USE_LM_SENSORS` and `USE_YAML` are set to `ON`):
       ```shell
       $ ccmake ..
       ```
    4. Compile
       ```shell
       $ make
       ```
    5. And Install
       ```shell
       $ sudo make install
       ```
3. Create the config:
    1. Run `sensors-detect` and `sensors` to find the correct name for the sensors.
       In my case, running `sensors` produced an output of:
       ```yaml
       thinkpad-isa-0000
       Adapter: ISA adapter
       fan1:        2364 RPM
       fan2:        2219 RPM
       CPU:          +44.0°C
       GPU:              N/A
       temp3:        +44.0°C
       temp4:        +44.0°C
       ...
       ```
    2. Note the names of all sensors shown, as well as the ids.
       In this case, that would be `thinkpad-isa-0000` and `[ CPU, temp3, temp4, etc. ]`.
    3. Create `/etc/thinkfan.conf` and enter that info under `sensors:`
       (I'll show my full configuration further down).
    5. Add a section `fans:` and add `tpacpi: /proc/acpi/ibm/fan`.
    6. Add a section `levels:` and put in fan levels in the format `[ <fan_level>, <lower_limit_temp>, <upper_limit_temp> ]`.
       For example, if I wanted to set fan `level 4` from 55°C to 64°C, you would write `[ 4, 55, 64 ]`.

    My full config looks like this:
    ```yaml
    sensors:
      - chip: thinkpad-isa-0000
        ids: [ CPU, temp3, temp5, temp6, temp7 ]
      - chip: amdgpu-pci-6400
        ids: [ edge ]
      - chip: nvme-pci-0300
        ids: [ Composite ]

    fans:
      - tpacpi: /proc/acpi/ibm/fan

    # levels from https://wiki.gentoo.org/wiki/Fan_speed_control/thinkfan
    levels:
      - [ 0, 0,  41 ]
      - [ 1, 38, 51 ]
      - [ 2, 45, 56 ]
      - [ 3, 51, 61 ]
      - [ 4, 55, 64 ]
      - [ 5, 60, 66 ]
      - [ 6, 63, 68 ]
      - [ 7, 65, 74 ]
      - [ "level full-speed", 70, 32767 ]
    ```
4. Run `thinkfan` to test your configuration.
5. Enable the `systemd` service:
   ```shell
   $ sudo systemctl enable thinkfan
   ```

## Why Did I Build From Source?

The version of `thinkfan` in the fedora repos seems to be built without `lm_sensors` support.
So, if you installed it from `dnf` and tried running my configuration, you'd get a rather cryptic error message:

```
ERROR: /etc/thinkfan.yaml:2:
  - chip: thinkpad-isa-0000
    ^
Invalid sensor entry.
```

(See [this issue](https://github.com/vmatare/thinkfan/issues/229), which is still applicable despite being about the AUR package).

## Fan Speeds

[Thinkpads' have eight fan speed levels](https://www.thinkwiki.org/wiki/How_to_control_fan_speed):

- `level 0`: fans off
- `level 1`
- `level 2`: low speed
- `level 3`
- `level 4`: medium speed
- `level 5`
- `level 6`
- `level 7`: high speed

[And three special levels](https://wiki.gentoo.org/wiki/Fan_speed_control/thinkfan):

- `level auto`: the default level where fan RPM is controlled by the BIOS
- `level full-speed`: the maximum monitored speed
- `level disengaged`: the true maximum speed where the embedded controller stops monitoring the fan speed

## Manual Fan Speed Control

To control fan speed manually, just `echo` the intended level to `/proc/acpi/ibm/fan`.
For example, to change the fan speed to `level 4`, run:
```shell
echo "level 4" > /proc/acpi/ibm/fan
```
