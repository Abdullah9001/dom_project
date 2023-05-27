let div = null;

window.onload = () => {
  main();
};

function main() {
  const bg = document.getElementById("root");
  const cngColor = document.getElementById("cng-color");
  const copyColor = document.getElementById("copy-color");
  const output = document.getElementById("output");

  cngColor.addEventListener("click", function () {
    const bgColor = hexaColorGenerate();
    bg.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
  copyColor.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    if (div !== null) {
      div.remove();
      div = null;
    }
    generateToastMesage(`${output.value} copied`);
  });
}

function hexaColorGenerate() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;

  const redHex = red.toString(16).padStart(2, "0");
  const greenHex = green.toString(16).padStart(2, "0");
  const blueHex = blue.toString(16).padStart(2, "0");

  return `#${redHex}${greenHex}${blueHex}`;
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
