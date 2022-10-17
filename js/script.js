const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  reset: true,
});

sr.reveal(".home-text", { delay: 200, origin: "left" });
sr.reveal(".home-img", { delay: 200, origin: "right" });

sr.reveal(".container, .about, .menu, .contact", {
  delay: 200,
  origin: "bottom",
});

/* SECCION PARA PRODUCTOS*/
let preveiwContainer = document.querySelector(".products-preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .producto").forEach(producto => {
  producto.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = producto.getAttribute("data-name");
    previewBox.forEach(preview => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});
