/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y su contraseña
2. El sistema debe ser capaz de validar si el usuario y 
contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe 
mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe 
mostrar un mensaje de error y no mostrar ningun timeline
*/

const usersDatabase = [
  {
    username: "jesus",
    password: "123",
  },
  {
    username: "gabriel",
    password: "1012",
  },
  {
    username: "janeth",
    password: "1601",
  },
];

const usersTimeline = [
  {
    username: "jesus",
    timeline: "Me gusta dibujar",
  },
  {
    username: "Kelly",
    timeline: "Me gusta las tisanas",
  },
  {
    username: "cande",
    timeline: "Ola",
  },
];

const username = prompt("Cual es tu usuario?");
const password = prompt("Cual es tu constraseña?");

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      //Ejemplo practico 2
      return true;

      //Ejemplo practico 1 inicio de sesion
      //return console.log("Bienvenido " + username + "!");
      //break;
      //Es necesario que este el break para que no siga iterando el ciclo for
      //O utilizar el return para salir de la funcion
    } else {
      //Ejemplo practico 1 inicio de sesion
      //return console.log("Es incorrecto");
    }
  }
  //Ejemplo practico 2
  //El return false tiene que salirse ya que si no se cumple la condicion
  //regresa false y este no ya no compara las demas iteraciones
  //asi que por eso se tiene que poner fuera del for
  //Si nunco es la correcta se tiene que salir y regresar false
  return false;
}

function singIt(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

singIt(username, password);
//usuarioExistente(username, password);
