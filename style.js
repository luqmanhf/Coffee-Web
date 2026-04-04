document.getElementById("coba").addEventListener("click", function() {
    const element = this;
    element.style.opacity = "0";
    setTimeout(function() {
        element.style.display = "none";
    }, 500);
});