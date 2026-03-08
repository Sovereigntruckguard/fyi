# Where do I test what I just built?

When you finish implementing a change, you have a few options for seeing it in action depending on how your Expo project is configured.

## Use a development build

A development build is the fastest way to test native code and custom Expo modules. It gives you the same developer experience as Expo Go while letting you include your own native code.

1. Follow the [Create a development build using EAS](https://docs.expo.dev/develop/development-builds/create-a-build/) guide to produce a development build for iOS or Android.
2. Install the build on a simulator, emulator, or a physical device.
3. Run `npx expo start --dev-client` from your project directory.
4. Open the development build and use the QR code (or device list) from the terminal or Expo CLI UI to launch the app.

See `start.md` in this repository for additional links on getting started with development builds.

## Use Expo Go (JavaScript-only projects)

If your project does not rely on custom native code, Expo Go is usually the quickest option:

1. Run `npx expo start`.
2. Install the Expo Go app on your iOS or Android device.
3. Scan the QR code or select your device from the Expo CLI UI.
4. Expo Go will reload automatically whenever you save JavaScript or asset changes.

Expo Go cannot load code that depends on custom native modules. Switch to a development build if you need to test those features.

## Use EAS Build for release testing

When you need to validate a production-like binary, create a release build with EAS Build:

1. Configure your credentials in `eas.json` and run `eas build --profile production`.
2. Download the resulting `.ipa` or `.aab` from the EAS dashboard.
3. Install the binary on test devices through TestFlight (iOS) or internal testing tracks on Google Play (Android).

Release builds take longer to produce, but they mirror what your users will receive once you submit the app to the stores.

## Troubleshooting

- If the app fails to open, check the Metro bundler or development server logs.
- For native crashes, attach the debugger in Xcode/Android Studio or review device logs with `adb logcat` or Xcode's Console.
- If you suspect a configuration issue, rebuild the development client or release binary to make sure your native changes are included.

Whichever workflow you choose, keep detailed notes about how you reproduced the change. That will make it easier to confirm the fix and to share verification steps with teammates.
