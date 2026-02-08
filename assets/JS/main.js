
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

// Validación de formulario en JQuery

$(document).ready(function () {

  $("#formContacto").on("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    let nombre = $("#nombre").val().trim();
    let email = $("#email").val().trim();
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === "") {
      alert("Por favor, ingresa tu nombre");
      return;
    }

    if (!emailValido.test(email)) {
      alert("Por favor, ingresa un email válido");
      return;
    }

    alert("Formulario enviado correctamente");

    // Limpia el formulario
    this.reset();
  });

  // Validación en tiempo real
  $("#email").on("change", function () {
    let email = $(this).val();
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValido.test(email)) {
      $(this).css("border", "2px solid green");
    } else {
      $(this).css("border", "2px solid red");
    }
  });

});
$(document).ready(function () {

    const footerColors = [
        "#2f7d57", 
        "#1f5f43", 
        "#3a8f6b", 
        "#0f2a1d", 
        "#48ef9d"  
    ];

    let currentIndex = 0;

    $("#btnFooterColor").on("click", function () {
        currentIndex = (currentIndex + 1) % footerColors.length;

        document.documentElement.style.setProperty(
            "--bs-navbar-bg",
            footerColors[currentIndex]
        );
    });

});
