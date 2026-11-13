const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Switch to light mode";
        themeButton.setAttribute("aria-pressed", "true");
    } else {
        themeButton.textContent = "Switch to dark mode";
        themeButton.setAttribute("aria-pressed", "false");
    }
});
