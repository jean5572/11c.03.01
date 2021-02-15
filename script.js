"use strict";

window.addEventListener("DOMContentLoaded", getValue);

function getValue() {
  colorpicker.addEventListener("input", colorTheBox);
}

function colorTheBox(event) {
  let hexValue = (document.querySelector(".colorbox").style.backgroundColor = event.target.value);
  console.log(hexValue);
  showHex(hexValue);
  convertHexToRgb(hexValue);
}

function showHex(hexValue) {
  document.getElementById("hex").innerHTML = "HEX: " + hexValue;
}

function convertHexToRgb(hexValue) {
  const r = hexValue.substring(1, 3);
  const g = hexValue.substring(3, 5);
  const b = hexValue.substring(5, 7);

  const convertedR = parseInt(r, 16);
  const convertedG = parseInt(g, 16);
  const convertedB = parseInt(b, 16);
  showRgb(convertedR, convertedG, convertedB);
  getHslValue(convertedR, convertedG, convertedB);
}

function showRgb(convertedR, convertedG, convertedB) {
  document.getElementById("rgb").innerHTML = `RGB: ${convertedR}, ${convertedG}, ${convertedB}`;
}

function getHslValue(r, g, b) {
  let h;
  let l;
  let s;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  s *= 100;
  l *= 100;

  showHsl(h, s, l);
}

function showHsl(h, s, l) {
  document.getElementById("hsl").innerHTML = `HSL: ${h.toFixed(0)}, ${s.toFixed(0)}, ${l.toFixed(0)}`;
}
