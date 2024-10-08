/** @format */

const { link } = require('../dist/main.cjs');

const { default: sharpy } = require('../dist/main.cjs');

console.log(sharpy('Hello, World!', 'invisible'));

// Use tx<Colorname> for text color.
console.log(sharpy('Hello, World!', 'txBlue'));

// Use bg<Colorname> for background color.
console.log(sharpy('Hello, World!', 'bgBlue'));

// It does not stop at colors...
console.log(sharpy('Hello, World!', 'strikethrough'));

console.log(sharpy('Hello, World!', 'underline'));

console.log(sharpy('Hello, World!', 'italic'));

console.log(sharpy('Hello, World!', 'dim'));

// combine multiple effects
console.log(sharpy('Hello, World!', 'txRed', 'bold', 'underline', 'inverse'));

// You like rainbows?
console.log(sharpy('Hello, World!', 'txRainbow', 'bold', 'underlines', 'italic'));

console.log(sharpy('Hello, World!', 'bgRainbow', 'bold', 'underlines', 'italic'));

console.log(link('dummi.me', 'https://dummi.me'));

module.exports = sharpy;
