
// CAmbio de modo: Claro/Oscuro


const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", () => {
  // Agrega o quita la clase modo-oscuro al body
  document.body.classList.toggle("modo-oscuro");

  // Cambia el texto del botón
  if (document.body.classList.contains("modo-oscuro")) {
    btnTema.textContent = "Modo claro";
    btnTema.classList.remove("btn-dark");
    btnTema.classList.add("btn-light");
  } else {
    btnTema.textContent = "Modo oscuro";
    btnTema.classList.remove("btn-light");
    btnTema.classList.add("btn-dark");
  }
});
