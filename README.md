# Project Barn 🚜

**Members**: @KChadwick96 @aronbs @jiebinsu @javierarques Stephen Cleary (UX)

The current Driver App is written in React as a Progressive Web App. This was great in order for us to be able to distribute the app to drivers quickly and without having to go through the process of approval by the Google Play and Apple App store. The problem is, iOS support for PWAs isn't the best and the app doesn't feel native. Things like notifications don't actually look like they've come from the app and instead look like they've come from chrome

The plan with this project is to move the Driver App over to React Native using Booking.com styling. We'll have an initial focus on Android (since that’s what the majority of us have). We’ll attempt to get the login flow (ignoring reset password) and bookings list working as an initial goal.

## Current PWA 📱

Here's how the bookings list and menu currently look

| Bookings list                                                                                                                              | Menu                                                                                                                                       | Login page 1                                                                                                                               | Login page 2                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| ![screenshot 2019-02-15 at 14 16 01](https://user-images.githubusercontent.com/26087058/52862156-6b4c5f00-312c-11e9-93d2-21faba3438a7.png) | ![screenshot 2019-02-15 at 14 17 45](https://user-images.githubusercontent.com/26087058/52862186-87500080-312c-11e9-98af-1c847c672f73.png) | ![screenshot 2019-02-15 at 14 27 12](https://user-images.githubusercontent.com/26087058/52862713-cd599400-312d-11e9-8f67-521b0e54742f.png) | ![screenshot 2019-02-15 at 14 27 44](https://user-images.githubusercontent.com/26087058/52862813-101b6c00-312e-11e9-907d-9381d0fc1927.png) |

## Components 🍰

As a first step, we need to decide what components we need to build first. We should look at getting storybook setup so we have a way of viewing what we've built before we start working working on the full pages.

A rough list includes:

- Typography
- Button
  - Primary and transparent
- Input
- Menu
- Booking card
- Alerts
- Side menu

## Goals 🥅

1. [x] Base react native app
2. [x] Storybook setup with our first component
3. [ ] Login page done
4. [ ] Keycode page done

## Setup

You'll need to make sure you have watchman installed first (if on MacOS) `brew install watchman`

For iOS dependencies, you'll need cocoapods as well `sudo gem install cocoapods`

Run `yarn` to install dependencies

For iOS, you'll need to install cocoapods dependencies

```
cd ios
pods install
```

Run `yarn ios` to start up the app up on iOS
Run `yarn android` to start up the app on Android
