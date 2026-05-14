const links = document.querySelectorAll(".nav-links li");
const pill = document.querySelector(".hover-pill");
const navbar = document.querySelector(".nav-links");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        const linkElement = link.querySelector("a");

        const offsetLeft = link.offsetLeft;
        const offsetWidth = linkElement.offsetWidth;

        pill.style.left = offsetLeft + "px";
        pill.style.width = offsetWidth + "px";

        /*APARECE CRESCENDO*/
        pill.style.opacity = "1";
        pill.style.transform = "translateY(-50%) scale(1)";
    });

});

/*SAINDO DA NAVBAR*/
navbar.addEventListener("mouseleave", () => {

    /*DIMINUI*/
    pill.style.transform = "translateY(-50%) scale(0.3)";

    /*DEPOIS SOME*/
    setTimeout(() => {
        pill.style.opacity = "0";
    }, 180);

});