# 1JOYFreedom

1JOYFreedom is a browser extension that enhances your YouTube viewing experience by automatically skipping ads. Powered by the 'One Joy, Enjoy!' podcast, this extension lets you enjoy uninterrupted videos with just a click of a button.

## Features

- **Ad Skipping**: Automatically skips over ads on YouTube using `document.querySelector('video').currentTime`.
- **Easy to Use**: Simply click 'start' and the extension takes care of the rest.
- **Uninterrupted Viewing**: Enjoy your favorite content without ad interruptions.

## Installation

1. Download the 1JOYFreedom extension package.
2. Open your browser and navigate to the extensions page (usually `chrome://extensions/` in Chrome).
3. Enable 'Developer mode' at the top right.
4. Click 'Load unpacked' and select the downloaded extension directory.
5. Ensure that the 1JOYFreedom icon appears in your browser toolbar.

## Usage

1. Click on the 1JOYFreedom icon in your browser toolbar.
2. A popup will appear with a 'Start' button. Click it to activate the ad skipping feature.
3. Enjoy ad-free viewing! The extension will automatically skip ads as they appear.

## How It Works

1JOYFreedom listens for video ads and uses the `document.querySelector('video').currentTime` method to fast-forward through the ad, minimizing disruption to your viewing experience.

## Disclaimer

This extension is not affiliated with YouTube or any other video platform. It is designed for educational purposes to demonstrate how browser automation can be achieved using JavaScript.
