function toggleBurgerIcon(element) {
    element.classList.toggle("change");
    const navigationLinks = document.getElementById("navigationLinks")
    navigationLinks.classList.toggle("hideMenu");
}
