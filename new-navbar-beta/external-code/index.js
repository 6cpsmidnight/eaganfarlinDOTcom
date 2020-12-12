// Dropdown Menus - Close When Out Of Focus
const nav = document.querySelectorAll("nav");

const navDropdownMenu = document.querySelectorAll(".nav-dropdown-menu");

navDropdownMenu.forEach((navDropdownMenu) => {

    document.addEventListener("click", (e) => {

        if (!nav.contains(e.target)) {

                navDropdownMenu.removeAttribute("open");

        }

    });

});

// Dropdown Menus - Open Only 1 Menu At A Time
const navDropdownMenu = document.querySelectorAll("nav-dropdown-menu");

navDropdownMenu.forEach((targetNavDropDownMenu) => {

    targetNavDropdownMenu.addEventListener("click", () => {

        navDropdownMenu.forEach((navDropdownMenu) => {

            if (navDropdownMenu !== targetNavDropDownMenu) {

                navDropdownMenu.removeAttribute("open");

            }

        });

    });

});

// Title - Loading
document.title = "New NavBar (Beta)";