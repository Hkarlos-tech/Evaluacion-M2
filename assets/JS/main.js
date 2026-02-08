
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
