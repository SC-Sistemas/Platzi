//Busca unn elemento que tenga la clase post
const listElement = document.querySelector(".posts");
//Busca un elemento por id
const postTemplate = document.getElementById("single-post");
//Busca el formualrio que esta dentro del elemento new-post
const form = document.querySelector("#new-post form");
//selecciona el boton del contendor con id
const fetchButton = document.querySelector("#available-posts button");
//Selecciona el contenedor con id
const postList = document.querySelector("#posts-container");

//Funcion a reutilizar
function sendHTTPRequest(method, url, data) {
  //Method es el metodo (GET, POST, DELETE, PUT OR PATCH)
  //URL de donde se obtendra la informacion
  //contenedor de informacion
  return fetch(url, {
    method: method,
    //Se indica el metodo de cuando se utiliza la funcion
    body: JSON.stringify(data),
    //El cuarpo de la funcion que sera convertido en JSON para guardarlo en data
    headers: {
      "Content-Type": "application/json",
      //Se le indica al server como se estan enviando los datos
    },
    //Se usa then para obtener la respuestas y convertirla a json
  }).then((response) => {
    return response.json();
  });
}

//Treara los post que nos da la url
//Usa async para
async function fetchPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData);
  //Creamos esta variable para no modificar la respuetas
  const listOfPosts = responseData;

  for (const post of listOfPosts) {
    //Crear un articulo
    const postContainer = document.createElement("article");
    //Le asigna un id al articulo que el trae el post de la API
    postContainer.id = post.id;
    //Le agrega el estilo
    postContainer.classList.add("post-item");

    //Crea un titulo y asigna del post de la api
    const title = document.createElement("h2");
    title.textContent = post.title;

    //Crea un body y asigna del post de la api
    const body = document.createElement("p");
    body.textContent = post.body;

    //Crea el boton delete
    const button = document.createElement("button");
    button.textContent = "DELETE Content";

    //Agrega todo al articulo
    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    //Agrega el articulo ala pagina
    listElement.append(postContainer);
  }
}
fetchButton.addEventListener("click", fetchPosts);

//Darle utilidad al boton DELETE Content
//Tenemos que usar Delegation Father
//Agregremos el evento al padre de las tarjetas, esto nos ayudara a saber aquien le estamos dando click
//y a quien se tiene que ir
//Entender cual es el id que tenemos que borrar, este nos lo proporciona las repuestas de la API

// postList.addEventListener("click", (event) => {
//   console.log(event);
//   if (event.target.tagName === "BUTTON") {
//     const postID = event.target.closest("article").id;
//     console.log(postID);
//     sendHTTPRequest(
//       "DELETE",
//       `https://jsonplaceholder.typicode.com/posts/${postID}`
//     );
//   }
// });

//Creamos un evento al contenedor de tarjetas, el cual es el click
postList.addEventListener("click", (event) => {
  //Usamos el console.log para poder visualizar los elementos que tenemos
  console.log(event);
  //creamos una condicion para solo se seleccione el boton
  if (event.target.tagName === "BUTTON") {
    //creamos una constante donde guardara el id de cada tarjeta que se seleccione
    const postID = event.target.closest("article").id;
    console.log(postID);
    sendHTTPRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postID}`
    );
  }
});
