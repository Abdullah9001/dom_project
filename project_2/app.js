window.onload = () => {
  main();
};

function main() {
  const bg = document.getElementById("root");
  const button = document.getElementById("cng-color");
  const output = document.getElementById("output");

  button.addEventListener("click", function () {
    const bgColor = rgbColorGenerate();
    bg.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
}

function rgbColorGenerate() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;

  const redHex = red.toString(16).padStart(2, "0");
  const greenHex = green.toString(16).padStart(2, "0");
  const blueHex = blue.toString(16).padStart(2, "0");

  return `#${redHex}${greenHex}${blueHex}`;
}
