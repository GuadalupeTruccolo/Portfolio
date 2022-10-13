let input = document.querySelector(".input");
let container = document.querySelector(".container");
let botonAgregar = document.querySelector(".boton-agregar");

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }
  crearDiv(nuevaTarea) {
    let inputItem = document.createElement("input");
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = nuevaTarea;
    let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("item");

    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>";
    botonEditar.classList.add("boton-editar");

    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
    botonRemover.classList.add("boton-remover");

    nuevoDiv.appendChild(inputItem)
    nuevoDiv.appendChild(botonRemover)
    nuevoDiv.appendChild(botonEditar)

    container.appendChild(nuevoDiv)

    botonEditar.addEventListener("click", function () {
      inputItem.disabled = !inputItem.disabled;
      if (inputItem.disabled == false) {
        botonEditar.innerHTML = "<i class='fa-solid fa-lock-open'></i>";
      } else {
        botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>";
      };
    });

    botonRemover.addEventListener("click", function () {
      nuevoDiv.remove();
    });
  }
}

function chequearInput() {
  if (input.value != "") {
    new Item(input.value)
  }
  input.value = null;
}

botonAgregar.addEventListener("click", chequearInput);