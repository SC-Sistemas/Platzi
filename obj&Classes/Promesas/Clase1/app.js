//Instancia de Promesa
const promise = new Promise((resolve, reject) => {
  //Simulamos una tarea asincrona
  //Llamamos un setTimeout para simular una tarea asincrona
  //En este caso, la tarea asincrona es una operacion que tarda 10 segundos
  setTimeout(
    () => {
      let operationSuccessful = true;
      if (operationSuccessful) {
        resolve("La operacion fue exitosa");
      } else {
        reject("La operacion fue fallida");
      }
    },
    10000
    //Aqui indicamos que se resuelva en 2 segundos
  );
});
promise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
