var left = 10;

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        if (left > 10) {
            left = left - 30;
            document.querySelector(".box").style.left = left + "px";
        }
    }
    if (event.key === "ArrowRight") {
        if (left < 800 - 10 - 300) {
            left = left + 30;
            document.querySelector(".box").style.left = left + "px";
        }
    }
});