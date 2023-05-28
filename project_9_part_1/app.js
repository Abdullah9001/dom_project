// Globals
let div = null;

// Onload handler
window.onload = () => {
  main();
};

// main or root function

function main() {
  const generateRandomColorBtn = document.getElementById(
    "generate-random-color"
  );
  // const root = document.getElementById("root");
  // const cngColor = document.getElementById("cng-color");
  // const copyColor = document.getElementById("copy-color");
  // const copyColor2 = document.getElementById("copy-color2");
  // const output = document.getElementById("output");
  // const output2 = document.getElementById("output2");

  generateRandomColorBtn.addEventListener(
    "click",
    handleGenerateRandomColorBtn
  );

  // copyColor.addEventListener("click", function () {
  //   navigator.clipboard.writeText(`#${output.value}`);
  //   if (div !== null) {
  //     div.remove();
  //     div = null;
  //   }
  //   if (isValidHex(output.value)) {
  //     generateToastMesage(`#${output.value} copied`);
  //   } else {
  //     alert("Your hexa color is not valid");
  //   }
  // });

  // copyColor2.addEventListener("click", function () {
  //   navigator.clipboard.writeText(`#${output2.value}`);
  //   if (div !== null) {
  //     div.remove();
  //     div = null;
  //   }
  //   if (isValidHex(output.value)) {
  //     generateToastMesage(`${output2.value} copied`);
  //   } else {
  //     alert("Your hexa color is not valid");
  //   }
  // });

  // output.addEventListener("keyup", function (e) {
  //   const color = e.target.value;
  //   if (color) {
  //     output.value = color.toUpperCase();
  //     if (color && isValidHex(color)) {
  //       root.style.backgroundColor = `#${color}`;
  //       output2.value = hexToRGB(color);
  //     }
  //   }
  // });
}

// even handler
function handleGenerateRandomColorBtn() {
  const color = generateColorDecimal();
  updateColorCodeToDom(color);
}

// DOM functions
function generateToastMesage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}

function updateColorCodeToDom(color) {
  const hexColor = generateHexColor(color);
  const rgbColor = generateRGBColor(color);

  document.getElementById("color-display").style.backgroundColor = hexColor;
  document.getElementById("color-mode-hex").value = hexColor;
  document.getElementById("color-mode-rgb").value = rgbColor;
  document.getElementById("color-slider-red").value = color.red;
  document.getElementById("color-slider-red-label").innerText = color.red;
  document.getElementById("color-slider-green").value = color.green;
  document.getElementById("color-slider-green-label").innerText = color.green;
  document.getElementById("color-slider-blue").value = color.blue;
  document.getElementById("color-slider-blue-label").innerText = color.blue;
}

// Utils functions

/**
 * generate and return an object of three color decimal value
 * @returns {object}
 */

function generateColorDecimal() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;

  return {
    red,
    green,
    blue,
  };
}

/**
 * take a color object of three decimal values and return a hexadecimal color code
 * @param {object} color
 * @returns {string}
 */

function generateHexColor({ red, green, blue }) {
  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(
    blue
  )}`.toUpperCase();
}

/**
 * take a color object of three decimal values and return a rgb color code
 * @param {object} color
 * @returns {string}
 */

function generateRGBColor({ red, green, blue }) {
  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 *
 * @param {string} hex
 * @returns {object}
 */

function hexToRGB(hex) {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);

  return {
    red,
    green,
    blue,
  };
}

/**
 * validate hex color code
 * @param {string} color;
 * @returns {boolean}
 */
function isValidHex(color) {
  if (color.length !== 6) return false;

  return /^[\da-f]{6}$/i.test(color);
}
