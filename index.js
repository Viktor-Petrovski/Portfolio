document.addEventListener("DOMContentLoaded", function() {
    let mode = document.getElementById("mode");
    mode.onclick = function() {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            mode.src = "images/dark.png";
        } else {
            mode.src = "images/light.png";
        }
    }
});