window.onload = () => {
  main();
};

function main() {
  const bg = document.getElementById("root");
  const button = document.getElementById("cng-color");

  button.addEventListener("click", function () {
    const bgColor = rgbColorGenerate();
    bg.style.backgroundColor = bgColor;
  });
}

function rgbColorGenerate() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  return `rgb(${red}, ${green}, ${blue})`;
}
