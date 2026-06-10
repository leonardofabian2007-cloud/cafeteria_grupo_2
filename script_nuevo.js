/*
    Archivo: script.js
    Propósito: Gestionar los filtros del menú digital de la Cafetería Premium.
    Equipo: Grupo 2
*/

// 1. Seleccionar el botón Ver Todo y almacenarlo en una constante
const btnVerTodo = document.querySelector("#btn-ver-todo");

// Botones existentes
const btnCafes = document.querySelector("#btn-cafes");
const btnPostres = document.querySelector("#btn-postres");

// 2. Seleccionar todos los productos y guardarlos en una constante
const productos = document.querySelectorAll(".producto");

// 3. Función para mostrar todos los productos
function mostrarTodos() {
    productos.forEach(producto => {
        producto.style.display = "block";
    });
}

// Funciones de filtro
const manejadorFiltros = {

    cafes() {
        productos.forEach(producto => {
            if (producto.classList.contains("cafe")) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        });
    },

    postres() {
        productos.forEach(producto => {
            if (producto.classList.contains("postre")) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        });
    }

};

// Función para activar botón seleccionado
function activarBoton(botonActivo) {
    document.querySelectorAll(".filtros-nav button").forEach(boton => {
        boton.classList.remove("activo");
    });

    botonActivo.classList.add("activo");
}

// 4. EventListener para Ver Todo
btnVerTodo.addEventListener("click", () => {
    mostrarTodos();
    activarBoton(btnVerTodo);
});

// EventListener para Cafés
btnCafes.addEventListener("click", () => {
    manejadorFiltros.cafes();
    activarBoton(btnCafes);
});

// EventListener para Postres
btnPostres.addEventListener("click", () => {
    manejadorFiltros.postres();
    activarBoton(btnPostres);
});