const personajesContainer = document.querySelector(".personajes");
// console.log(personajesContainer);
const apiURL = "https://bp-marvel-api.herokuapp.com/";
const paramsRequest = {
  idAuthor: 1,
};

// ?parameter=value
//bpmarvel-api.herokuapp

axios
  .get(apiURL + "marvel-characters", {
    params: {
      ...paramsRequest,
    },
  })
  .then((response) =>
    response.data.forEach((elem) => {
      // console.log(elem);
      // const buttonDel = document.getElementById(`#delete-${elem._id}`);
      // console.log(buttonDel);
      personajesContainer.innerHTML += `
      
      <div class="row personaje my-2 id=${elem._id}">
          <img src ="${elem.image}" class="rounded img-personaje my-2 col-4 px-2" onerror="this.src='https://www.pillar.com.mx/img/categorias/no-disponible.jpg'"></img>
          <div class="col-6 px-0">
            <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${elem.title}</h5>
                  <p class="card-text">${elem.body}</p>
                </div>
              </div>
          </div>
          <div class="action-buttons col-2 px-3">
              <button type="button" class="btn btn-outline-danger my-lg-3 px-lg-5 px-md-4 px-sm-2" id=delete-${elem._id} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
              </svg></button>
              <button type="button" class="btn btn-outline-danger my-3 px-lg-5 px-md-4 px-sm-2" id=button-edit-${elem._id}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg></button>
          </div>
      </div>
  </div>
      `;
      const buttonDel = document.getElementById(`delete-${elem._id}`);
      console.log(buttonDel);
      buttonDel.addEventListener("click", () => {
        axios
          .delete(
            `https://bp-marvel-api.herokuapp.com/marvel-characters/${elem._id}?idAuthor=1`
          )
          .then(() => {
            console.log("Personaje eliminado");
            location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
  );

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const buttonNew = document.querySelector("#button-new");
const newForm = document.querySelector("#new-form");
const buttonCancel = document.querySelector("#button-cancel");
// console.log(newForm);
buttonNew.addEventListener("click", function (e) {
  //   console.log(e);
  e.preventDefault();
  newForm.style.display = "block";
});

buttonCancel.addEventListener("click", function (e) {
  console.log(e);
  e.preventDefault();
  newForm.style.display = "none";
});

const newNombre = document.querySelector(".new-nombre");
const newDescripcion = document.querySelector(".new-descripcion");
const newUrl = document.querySelector(".new-url");

let formNew = document.querySelector("#new-personaje");
// console.log(newNombre.value);
const data = {
  title: newNombre.value,
  body: newDescripcion.value,
  image: newUrl.value,
};

// console.log(data);
formNew.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(newDescripcion.value, newNombre.value, newUrl.value);

  axios
    .post("https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1", {
      title: newNombre.value, //"Hulk",
      body: newDescripcion.value, //"cccWith amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.",
      image: newUrl.value, //"https://depor.com/resizer/hsx5eJXrsQzKfoINs0bXYlLPBZs=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VNAFQ5R335FSFELJF5YLNUCVBE.jpg",
      category: "main",
      // idAuthor: "11111",
      // createdAt: "2022-03-03T01:37:01.828Z",
      // updatedAt: "2022-03-03T01:37:01.828Z",
    })
    .then((response) => {
      console.log(response);
      location.reload();
    })
    .catch((error) => {
      console.log(error.response);
    });
});

function deletePersonaje(id) {
  console.log(id);
  // axios
  //   .delete(
  //     `https://bp-marvel-api.herokuapp.com/marvel-characters/${id}?idAuthor=1`
  //   )
  //   .then(() => {
  //     console.log("Personaje eliminado");
  //     // location.reload();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}
//consumir y mostrar

// con clases de bootstrap

// nuevo aparece el formulario
// para que los trs campos ingresen

// borrar
