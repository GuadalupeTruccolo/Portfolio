let navbar = document.querySelector('nav');
let listItems = document.querySelectorAll('li');
let mostrarMenu = document.querySelector('.mostrarMenu');

if (matchMedia) {
    var mq = window.matchMedia("(max-width: 375px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

function WidthChange(mq) {
    if (mq.matches) {
        // Displaying Responisve design Hamburger Menu
        mostrarMenu.addEventListener("click", function () {
            navbar.style.display = "block";
        })

        // Hiding Responisve design Hamburger Menu when user clicks an element
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].addEventListener("click", function () {
                navbar.style.display = "none";
            })
        }
    } else {
        navbar.style.display = "block";
    }
}

// Start of Tawk.to Script
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6315006437898912e967270f/1gc50j2r0';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
