# 🐭 Catch the Rat

A fun and engaging mobile game where players chase and catch a moving rat! Perfect for curious cats and anyone who enjoys quick reflex games.

## 🎮 Game Features

- **Dynamic Rat Movement**: The rat moves with realistic physics, changing direction and speed unpredictably
- **Score Tracking**: Keep track of how many rats you've caught
- **Catch Effects**: Visual feedback when you successfully catch a rat
- **Responsive Design**: Works on iOS, Android, and web platforms
- **Dark/Light Theme Support**: Automatically adapts to your device's theme preference
- **Smooth Animations**: Fluid rat movement and catch animations for an engaging experience

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- For mobile development: Expo CLI and Expo Go app on your device

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kawyanethma/catch-the-rat.git
   cd catch-the-rat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Run the app:
   - **iOS Simulator**: Press `i` in the terminal
   - **Android Emulator**: Press `a` in the terminal
   - **Web**: Press `w` in the terminal
   - **Physical Device**: Scan the QR code with Expo Go app

## 🎯 How to Play

1. Tap the "Start Game" button to begin
2. Watch the rat move around the screen
3. Tap on the rat to catch it and score points
4. The rat will respawn in a new location after being caught
5. Try to catch as many rats as possible!

## 🛠️ Technology Stack

- **React Native**: Cross-platform mobile development framework
- **Expo**: Development platform for universal React applications
- **TypeScript**: Type-safe JavaScript development
- **Expo Router**: File-based routing for navigation
- **React Native Reanimated**: Smooth animations and transitions

## 📁 Project Structure

```
catch-the-rat/
├── app/                    # App screens and navigation
│   ├── (home)/            # Home screen group
│   │   ├── index.tsx      # Main game screen
│   │   └── _layout.tsx    # Home layout
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404 screen
├── components/            # Reusable UI components
│   ├── RatComponent.tsx   # The rat game element
│   ├── GameButton.tsx     # Start/Stop game button
│   ├── GameInstructions.tsx # Game instructions UI
│   ├── CatchEffect.tsx    # Catch animation effect
│   └── Themed*.tsx        # Theme-aware components
├── functions/             # Game logic functions
│   ├── catchFunction.ts   # Rat catching logic
│   └── toggleGame.ts      # Game state management
├── hooks/                 # Custom React hooks
├── constants/             # App constants and themes
├── assets/               # Images, fonts, and other assets
│   └── images/           # Game images (rat.png, logo.png, etc.)
└── scripts/              # Build and utility scripts
```

## 🎨 Assets

The game includes custom graphics:
- Animated rat sprite that rotates based on movement direction
- Logo and app icons
- Visual effects for successful catches

## 🧪 Development

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run lint` - Run ESLint for code quality
- `npm run reset-project` - Reset to blank Expo project

### Code Quality

This project uses:
- ESLint for code linting
- TypeScript for type safety
- Expo's recommended configurations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📱 Platform Support

- ✅ iOS (iPhone & iPad)
- ✅ Android
- ✅ Web browsers
- ✅ Expo Go app for development

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/Kawyanethma/catch-the-rat/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

---

Made with ❤️ using [Expo](https://expo.dev) and [React Native](https://reactnative.dev)
