// function fetchData() {
//   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     // Fetch data from the API
//     //usamos el método .then() para manejar la respuesta de la promesa
//     //El then nos da la respuesta de la promesa, que es un objeto Response
//     //El método .json() convierte la respuesta en un objeto JSON
//     .then((response) => response.json())
//     //El data usas eso datos y los imprime
//     .then((data) => console.log(data))
//     .catch((error) => console.log("Error: ", error));
// }

//Async convierte la función en una función asincrona, lo que significa que puede usar la palabra clave await dentro de ella
async function fetchData() {
  //Nos permite manerjar los errores de una manera mas sencilla
  try {
    //Utiliza await para esperar que se resuelva esa linea, si no se resuelve, no sigue a la siguiente línea.
    //Hasta que no obtenga la respuesta del servidor, no sigue a la siguiente línea.
    // response es un objeto de tipo Response (igual que antes con .then()).
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    //Al igual que antes, el método .json() convierte la respuesta en un objeto JSON.
    //El await espera a que se resuelva la promesa y devuelve el resultado.
    let data = await response.json();
    //El data usas eso datos y los imprime
    console.log(data);
  } catch (error) {}
}

const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData() {
  try {
    //Por cada url que existe en urls, haz lo siguiente:
    for await (let url of urls) {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log("Error: ", error);
  }
}
