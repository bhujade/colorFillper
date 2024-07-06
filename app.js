let button = document.querySelector("button");
let box = document.querySelector(".box");
let h3s = document.querySelectorAll("h3");

button.addEventListener("click", color);

function color() {
  let num1 = Math.floor(Math.random() * 255);
  let num2 = Math.floor(Math.random() * 255);
  let num3 = Math.floor(Math.random() * 255);

  let changeColor = `rgb(${num1},${num2},${num3})`;

  // let name = console.log(changeColor)

  document.querySelector(".bg").style.backgroundColor = changeColor;

  console.log("color change");

  
  let writeColorCode = document.querySelector('span');


  writeColorCode.innerText = changeColor;

}

for (h3 of h3s) {
  h3.addEventListener("click", function () {
    location.reload();
    document.querySelector(".bg").style.backgroundColor = "white";
  });
}
