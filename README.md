# Electron Calculator App

## Description
A simple calculator app made using Electron. This app supports Windows, macOS, and Linux platforms, with builds available for both x64 and ARM architectures. Check out the [Releases](https://github.com/Rishi-Sudhakar/Electron_SimpleCalculator/releases) section for installation files.

## Features
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Clean and user-friendly interface
- Cross-platform support (Windows, macOS, Linux)
- Available for x64 and ARM architectures

## Installation

### Windows
1. Go to the [Releases](https://github.com/Rishi-Sudhakar/Electron_SimpleCalculator/releases) page.
2. Download the latest `Electron-Calculator-App-Setup-0.0.1.exe` file.
3. Run the installer and follow the on-screen instructions.

### macOS
1. Go to the [Releases](https://github.com/Rishi-Sudhakar/Electron_SimpleCalculator/releases) page.
2. Download the latest `Electron-Calculator-App-0.0.1.dmg` file.
3. Open the `.dmg` file and drag the app to the Applications folder.

### Linux
1. Go to the [Releases](https://github.com/Rishi-Sudhakar/Electron_SimpleCalculator/releases) page.
2. Download the latest `Electron-Calculator-App-0.0.1.AppImage` file.
3. Make the file executable:
   ```bash
   chmod +x Electron-Calculator-App-0.0.1.AppImage
   ```
4. Run the AppImage:
   ```bash
   ./Electron-Calculator-App-0.0.1.AppImage
   ```
   (I haven't tried the release in linux; so contributions, feedback, comments are welcome, feel free to open an issue)

## Usage
1. Open the Electron Calculator App.
2. Use the buttons to perform basic arithmetic operations.

## Development

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Rishi-Sudhakar/Electron_SimpleCalculator.git
   cd Electron_SimpleCalculator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm start
   ```

### Building
To build the app for different platforms, use the following commands:

#### Windows
```bash
npm run package-win
```

#### macOS
```bash
npm run package-mac
```

#### Linux
```bash
npm run package-linux
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, please open an issue on GitHub.
