const cube = document.getElementById("cube");
const block = document.getElementById("block");

function jump() {
if (cube.classList != "jump") {
    cube.classList.add("jump");

setTimeout(function () {
    cube.classList.remove("jump");
    }, 300);
}
}

let isAlive = setInterval(function () {
let cubeTop = parseInt(window.getComputedStyle(cube).getPropertyValue("top"));


let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
);

if (blockLeft < 40 && blockLeft > 0 && cubeTop >= 140) {

    alert('Game Over')
}
}, 10);

document.addEventListener("keydown", function (event) {
jump();
});