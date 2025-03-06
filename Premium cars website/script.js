const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute("class", "ri-menu-3-line")
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollRevealOpt = {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
    };

    ScrollReveal().reveal(".header-img", {
        ...scrollRevealOpt,
        origin: "right",
    });

    ScrollReveal().reveal(".header-content h1", {
        ...scrollRevealOpt,
        delay: 500,
    });

    ScrollReveal().reveal(".header-content .section-Description", {
        ...scrollRevealOpt,
        delay: 1000,
    });

    ScrollReveal().reveal(".about-img", {
        ...scrollRevealOpt,
        origin: "left",
    });

    ScrollReveal().reveal(".about-content .section-subheader", {
        ...scrollRevealOpt,
        delay: 500,
    });

    ScrollReveal().reveal(".about-content .section-header", {
        ...scrollRevealOpt,
        delay: 1000,
    });
    ScrollReveal().reveal(".about-content .section-Description", {
        ...scrollRevealOpt,
        delay: 1500,
        Interval: 500,
    });
    ScrollReveal().reveal(".about-btn", {
        ...scrollRevealOpt,
        delay: 500,
    });



    const fleet1 = document.querySelector(".fleet-wrapper-1 .fleet-images");
    const fleet2 = document.querySelector(".fleet-wrapper-2 .fleet-images");

    const fleet1Content = Array.from(fleet1.children);
    const fleet2Content = Array.from(fleet2.children);

    fleet1Content.forEach((item) => {
        const duplicateNode = item.cloneNode(true);
        duplicateNode.setAttribute("aria-hidden", true);
        fleet1.appendChild(duplicateNode);
    });
    fleet2Content.forEach((item) => {
        const duplicateNode = item.cloneNode(true);
        duplicateNode.setAttribute("aria-hidden", true);
        fleet2.appendChild(duplicateNode);
    });

    ScrollReveal().reveal(".feature-card", {
        ...scrollRevealOpt,
        Interval: 500,
    });
    ScrollReveal().reveal(".banner-container .section-header", {
        ...scrollRevealOpt,
    });
    ScrollReveal().reveal(".banner-container .section-Description", {
        ...scrollRevealOpt,
        delay: 500,
    });
    ScrollReveal().reveal(".banner-btn", {
        ...scrollRevealOpt,
        delay: 1000,
    });
});