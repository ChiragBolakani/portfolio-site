// themeToggle.js

document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkbox");

    // Check for saved theme in localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        checkbox.checked = true; // Ensure the checkbox reflects the saved theme
    }

    // Toggle dark/light mode
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});
