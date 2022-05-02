
//Variables html
const questions = document.querySelectorAll(".question");
//Funcion completa para el desplazamiento de respuesta
questions.forEach(function (question) {
  //Variable btn para desplzar respuesta
  const btn = question.querySelector(".question-btn");
  // console.log(btn);
//Evento del boton de desplzamiento de respuesta
  btn.addEventListener("click", function () {
    // console.log(question);
    //Ciclo questions
    questions.forEach(function (item) {
      if (item !== question) {
        //Classlist para quitar respuesta
        item.classList.remove("show-text");
      }
    });
    //Classlist para agrrgar respuesta
    question.classList.toggle("show-text");
  });
});

//Otra opcion
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });

/*
Temas vistos
forEach(): Ejecuta la función indicada una vez por cada elemento del array.
classList.remove(): Elimina las clases indicadas.
classList.toggle(): Cuando sólo hay un argumento presente: Alterna el valor de la clase; ej., si la clase existe
                     la elimina y devuelve false, si no, la añade y devuelve true.
                    Cuando el segundo argumento está presente: Si el segundo argumento se evalúa como true, se añade 
                    la clase indicada, y si se evalúa como false, la elimina.
*/