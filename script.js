const postres = document.querySelectorAll(".postre");
const cafes = document.querySelectorAll(".cafe");

const btnCafes = document.getElementById("btn-cafes");
btnCafes.addEventListener("click", () => {
  postres.forEach((postre) => {
    postre.style.display = "none";
  });

  cafes.forEach((cafe) => {
    cafe.style.display = "block";
  });
});

const btnPostres = document.getElementById("btn-postres");
btnPostres.addEventListener("click", () => {
  cafes.forEach((cafe) => {
    cafe.style.display = "none";
  });

  postres.forEach((postre) => {
    postre.style.display = "block";
  });
});

const btnTodo = document.getElementById("btn-ver-todo");
btnTodo.addEventListener("click", () => {
  cafes.forEach((cafe) => {
    cafe.style.display = "block";
  });

  postres.forEach((postre) => {
    postre.style.display = "block";
  });
});
