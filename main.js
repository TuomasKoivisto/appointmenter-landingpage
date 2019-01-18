var navbar

function htmlReady() {
    navbar = document.getElementById("navbar")
}

function checkWindowWidth() {
    if (document.documentElement.clientWidth > 950) {
        navbar.style.display = "flex"
    }
}

function toggleNavbar() {
    if (navbar.style.display === "flex") {
        navbar.style.display = "none"
    } else {
        navbar.style.display = "flex"
    }
}