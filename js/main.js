function toggleMenu() {
    const navigation = document.getElementById("navLinks");
    navigation.classList.toggle("open");
}

document.querySelectorAll("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("open");
    });
});
