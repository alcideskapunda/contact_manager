const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
}
// Load light or dark mode
const loadTheme = () => {
    const darkMode = localStorage.getItem("dark");

    if (darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

// add event the change
changeThemeBtn.addEventListener("change", () => {
    toggleDarkMode();

    // save or remove dark mode / salvar preferencia do ususario
    localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
});