/**
 * Archivo: script.js
 * Propósito: Gestionar los filtros del menú digital de la Cafetería Premium.
 * Equipo: Grupo 2
 */

// Seleccionamos el contenedor padre (el nav) y todos los productos
const navFiltros = document.querySelector(".filtros-nav");
const productos = document.querySelectorAll(".producto");

/**
 * @description Función genérica que muestra u oculta los productos en el DOM según la categoría.
 * @param {string} categoria - La categoría a filtrar ("todos", "cafe", "postre").
 */
function filtrarProductos(categoria) {
  productos.forEach((producto) => {
    // Si la categoría es "todos" o el producto tiene la clase de la categoría, se muestra
    if (categoria === "todos" || producto.classList.contains(categoria)) {
      // Usamos un string vacío para respetar el 'display: flex' de tu CSS original
      producto.style.display = "";
    } else {
      producto.style.display = "none";
    }
  });
}

/**
 * @description Manejador global para los clics en la barra de navegación usando Event Delegation.
 * Aplica el preventDefault, gestiona la clase .activo y llama a la función de filtrado.
 * @param {Event} e - El evento de clic capturado en el contenedor padre.
 */
function manejadorFiltrosGlobal(e) {
  // 4. Prevenir comportamientos por defecto del navegador
  e.preventDefault();

  // 2. Event delegation: buscar el botón más cercano al elemento clickeado
  const botonClickeado = e.target.closest("button");

  // Si no se hizo clic en un botón (por ejemplo, en un espacio vacío del nav), detenemos la ejecución
  if (!botonClickeado) return;

  // 3. Remover la clase .activo de todos los botones
  const todosLosBotones = navFiltros.querySelectorAll("button");
  todosLosBotones.forEach((boton) => boton.classList.remove("activo"));

  // 3. Asignar la clase .activo únicamente al botón clickeado
  botonClickeado.classList.add("activo");

  // 1. Determinar qué categoría pasar al manejador genérico basándonos en el ID del botón
  let categoria = "todos";
  if (botonClickeado.id === "btn-cafes") categoria = "cafe";
  if (botonClickeado.id === "btn-postres") categoria = "postre";

  // Llamamos a la función genérica con el parámetro correspondiente
  filtrarProductos(categoria);
}

// 2. Un solo Event Listener en el nav que detecta cualquier clic interno
navFiltros.addEventListener("click", manejadorFiltrosGlobal);
