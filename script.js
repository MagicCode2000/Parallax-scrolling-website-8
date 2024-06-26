window.onscroll = () => {
    document.querySelector(".mountains").style.marginBottom = -scrollY + "px";

    document.querySelector(".stars").style.marginTop = scrollY + "px";

    document.querySelector(".stars").style.marginRight = scrollY * 1.3 + "px";

    document.querySelector(".stars").style.opacity = (500 - scrollY) / 500;

    document.querySelector(".light").style.opacity = scrollY / 150;

    document.querySelector(".Home h1").style.marginTop = scrollY + "px";

    document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;

};