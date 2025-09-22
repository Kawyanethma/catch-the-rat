# Catch the Rat 🐭⚡

A simple, fast-paced mobile game built with React Native and Expo. Chase and tap the sneaky rat before it disappears! This project uses Expo Router for file-based navigation and modern React Native tooling.

📝 Note: The current package/app name is set to `demo-game` in `package.json` and `app.json`. You can keep it or update it to `catch-the-rat` (see “Rename the app” below).

## 🧰 Tech stack

- Expo SDK 54 (managed workflow)
- React 19.1.0 and React Native 0.81.4
- Expo Router 6
- React Navigation 7
- Reanimated 4
- TypeScript 5
- ESLint (Expo config)

## 🚀 Quick start

1) Install dependencies
```bash
npm install
```

2) Start the development server
```bash
npm run start
```

Then choose one:
- Android emulator 🤖
- iOS simulator 🍎
- Expo Go 📱
- Web 🌐

Convenience scripts:
```bash
npm run android   # Open on Android
npm run ios       # Open on iOS
npm run web       # Open in the browser
npm run lint      # Lint the codebase
```

## 🎮 Gameplay (at a glance)

- Tap the rat as soon as it appears to score points.
- Misses or slow reactions reduce your streak.
- Difficulty can increase as the game progresses.

Tailor this section to match the exact rules of your implementation.

## 📁 Project structure

```
.
├─ app/                # App screens and routes (Expo Router)
├─ assets/             # Images, icons, splash, etc.
├─ components/         # Reusable UI components
├─ constants/          # Static values and configuration
├─ functions/          # Utility functions/helpers
├─ hooks/              # Reusable React hooks
├─ scripts/            # Project maintenance scripts
├─ app.json            # Expo app configuration
├─ package.json        # Dependencies and scripts
├─ tsconfig.json       # TypeScript configuration
├─ eslint.config.js    # ESLint configuration
└─ LICENSE             # MIT License
```

This project uses file-based routing. Add screens under `app/` (e.g., `app/index.tsx`, `app/game.tsx`). Learn more: [Expo Router docs](https://docs.expo.dev/router/introduction).

## 🛠️ Configuration

- App config: `app.json`
  - name/slug: currently `"demo-game"`
  - scheme: `demogame`
  - web output: static export enabled
  - splash/icon assets: under `assets/images/`

- Package: `package.json`
  - name: `"demo-game"`
  - entry: `expo-router/entry`

### ✏️ Rename the app (optional)

If you want the app to be named “catch-the-rat” everywhere:

1) Update `package.json`:
```json
{
  "name": "catch-the-rat"
}
```

2) Update `app.json`:
```json
{
  "expo": {
    "name": "catch-the-rat",
    "slug": "catch-the-rat",
    "scheme": "catchtherat"
  }
}
```

3) Restart the dev server.

## 📦 Building and deployment

- Development builds: [Expo Dev Builds](https://docs.expo.dev/develop/development-builds/introduction/)
- Android/iOS (local prebuild – optional):
  ```bash
  npx expo run:android
  npx expo run:ios
  ```
- Web (static export):
  ```bash
  npx expo export --platform web
  ```
  Output is configured via `app.json` web settings.

For production builds and stores, see [EAS Build](https://docs.expo.dev/build/introduction/).

## ✅ Linting

```bash
npm run lint
```

## 📸 Screenshots
<table align="center">
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/8f5a96fd-dbe8-4d70-80b6-c8f403f58f08" alt="IMG_0750" width="320" />
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/c9e7f12f-6eba-4249-82a3-d3ce8233e5df" alt="IMG_0749" width="320" />
    </td>
  </tr>
</table>




## 🗺️ Roadmap

- High score persistence 💾
- Multiple levels / speeds 📈
- Sound effects and haptics 🔊📳
- Theming and accessibility improvements 🎨♿
- Leaderboards and social sharing 🏆

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests with improvements, bug fixes, or new features.

1) Fork the repo
2) Create a feature branch
3) Commit your changes
4) Open a PR with a clear description

## 📄 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

## 🙏 Acknowledgements

- [Expo](https://expo.dev) and [Expo Router](https://expo.github.io/router/docs)
- [React Navigation](https://reactnavigation.org/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
