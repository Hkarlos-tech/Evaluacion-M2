
// Cambio de modo: Claro/Oscuro

const html = document.documentElement;

btnTema.addEventListener("click", () => {
  if (html.getAttribute("data-bs-theme") === "light") {
    html.setAttribute("data-bs-theme", "dark");
    btnTema.textContent = "Modo claro";
  } else {
    html.setAttribute("data-bs-theme", "light");
    btnTema.textContent = "Modo oscuro";
  }
});

// Animacion al hacer scroll JQuery 


$(document).ready(function () {

  // Ocultamos las secciones al inicio
  $("section").css({
    opacity: 0,
    transform: "translateY(30px)"
  });

  // Detecta el scroll
  $(window).on("scroll", function () {
    $("section").each(function () {
      const posicionElemento = $(this).offset().top;
      const posicionScroll = $(window).scrollTop() + $(window).height() - 100;

      if (posicionScroll > posicionElemento) {
        $(this).animate(
          { opacity: 1 },
          800
        ).css("transform", "translateY(0)");
      }
    });
  });

});

