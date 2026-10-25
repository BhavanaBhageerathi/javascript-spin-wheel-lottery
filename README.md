# Spin Wheel Lottery

A simple web-based Spin Wheel Lottery application developed using HTML, JavaScript, and Bootstrap 5. The application displays a spinning animation and generates a random five-digit number as the lottery result.

## Features

- Interactive Spin button
- Animated spinning wheel
- Random five-digit number generation
- Delayed result display to simulate a lottery draw
- Spin Again functionality
- Responsive layout using Bootstrap

## Technologies Used

- HTML5
- JavaScript
- Bootstrap 5
- Animated GIF

## Project Structure

```text
javascript-spin-wheel-lottery/
├── spinwheel.html
├── spinwheel.js
├── README.md
├── .gitignore
├── images/
│   └── spin.gif
└── screenshots/
    ├── README.md
    ├── before_spin.png
    ├── after_spin.png
    └── result.png
```

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `spinwheel.html` in a web browser.
4. Click **Spin!** to start the lottery animation.
5. Wait approximately 10 seconds for the result.
6. Click **Spin Again!** to generate another number.

No backend or installation is required. An internet connection is needed to load Bootstrap from its CDN.

## How It Works

1. The user clicks the Spin button.
2. JavaScript displays the spinning animation.
3. A JavaScript Promise and `setTimeout()` introduce a 10-second delay.
4. A random five-digit number is generated.
5. The result is displayed on the page.
6. The user can spin again to generate another result.

## Future Improvements

- Add participant names instead of generating random numbers.
- Create a visual wheel divided into segments.
- Add sound effects during the spinning animation.
- Improve the interface and animation.
- Prevent multiple simultaneous lottery draws.

## Author

Developed as a beginner-friendly web development project to practise HTML, JavaScript, Promises, asynchronous operations, and Bootstrap.
