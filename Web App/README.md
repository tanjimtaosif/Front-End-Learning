# ⏳ Screen Timer App

A beautiful, interactive screen timer built with React and Vite. Designed to make time management soothing and visually engaging.

[**🚀 Live Demo**](https://timer-tanjim.netlify.app/)

## ✨ Features

- **Customizable Timer**: precise Time Slider input.
- **Visual Themes**: Switch between `Forest`, `Ocean`, `Sunset`, and `Minimal` themes.
- **Clock Styles**: Choose from `Digital`, `Analog-ish` (Gauge), or `Minimal` displays.
- **Animated Companions**: Keep focus with a Blob, Robot, or Ghost avatar.
- **Alarm Tones**: Select from `Chime`, `Bell`, or `Digital` alarm sounds.
- **Interactive UI**:
  - **Spotlight Effect**: Mouse-following background glow.
  - **Hover Animations**: Responsive buttons and controls.
  - **Gauge Clock**: High-precision animated analog view.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: SCSS with BEM methodology
- **Audio**: Web Audio API (No external dependencies)
- **Icons/Assets**: CSS-based avatars and SVGs

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd screen-timer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`.

## 🎨 Customization

- **Themes**: Edit `src/styles/_variables.scss` to add or modify color palettes.
- **Avatars**: Add new components in `src/components/Avatar/`.
- **Audio**: Modify `src/utils/audio.js` to change frequencies or add new tones.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
