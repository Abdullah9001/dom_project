let div = null;

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const cngColor = document.getElementById("cng-color");
  const copyColor = document.getElementById("copy-color");
  const copyColor2 = document.getElementById("copy-color2");
  const output = document.getElementById("output");
  const output2 = document.getElementById("output2");

  cngColor.addEventListener("click", function () {
    const color = generateColorDecimal();
    const hex = hexaColorGenerate(color);
    const bg = generateRGBColor(color);
    root.style.backgroundColor = hex;
    output.value = hex.substring(1);
    output2.value = bg;
  });

  copyColor.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${output.value}`);
    if (div !== null) {
      div.remove();
      div = null;
    }
    if (isValidHex(output.value)) {
      generateToastMesage(`#${output.value} copied`);
    } else {
      alert("Your hexa color is not valid");
    }
  });

  copyColor2.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${output2.value}`);
    if (div !== null) {
      div.remove();
      div = null;
    }
    if (isValidHex(output.value)) {
      generateToastMesage(`${output2.value} copied`);
    } else {
      alert("Your hexa color is not valid");
    }
  });

  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color) {
      output.value = color.toUpperCase();
      if (color && isValidHex(color)) {
        root.style.backgroundColor = `#${color}`;
        output2.value = hexToRGB(color);
      }
    }
  });
}

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

function hexaColorGenerate({ red, green, blue }) {
  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(
    blue
  )}`.toUpperCase();
}

function generateRGBColor({ red, green, blue }) {
  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 *
 * @param {string} hex
 */

function hexToRGB(hex) {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);

  return `rgb(${red}, ${green}, ${blue})`;
}

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
/**
 * @returns {string}
 */
function isValidHex(color) {
  if (color.length !== 6) return false;

  return /^[\da-f]{6}$/i.test(color);
}
