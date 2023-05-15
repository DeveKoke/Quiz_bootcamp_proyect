// * Contador de respuestas correctas.
var contador = 0;


      // * EVENTOS DE Q1
const Q1_A1V = document.getElementById('Q1_A1');
const Q1_A2X = document.getElementById('Q1_A2');
const Q1_A3X = document.getElementById('Q1_A3');
const Q1_A4X = document.getElementById('Q1_A4');
// * EVENTLISTENER PARA TODOS LOS BOTONES INCORRECTOS
function eventQ1() {
  Q1_A1V.style.backgroundColor = 'rgb(36, 235, 241)';
  Q1_A1V.style.color = 'rgb(108, 12, 181)';
  Q1_A2X.style.backgroundColor = 'grey';
  Q1_A3X.style.backgroundColor = 'grey';
  Q1_A4X.style.backgroundColor = 'grey';
  Q1_A2X.style.boxShadow = 'none';
  Q1_A3X.style.boxShadow = 'none';
  Q1_A4X.style.boxShadow = 'none';

    // *Insertar mensaje de fallo
  let XMessage = document.getElementById('answer_messageQ1');  //* <p>
  XMessage.style.visibility = 'visible';
  let XMessageText = document.createTextNode('Oh! Has fallado. Venus es el planeta más cálido, incluso estando más lejos del Sol que Mercurio, porque tiene una atmósfera tan densa que actúa como un abrigo de plumas gigante.') ;
  XMessage.appendChild(XMessageText);
};
Q1_A2X.addEventListener('click', eventQ1);
Q1_A3X.addEventListener('click', eventQ1);
Q1_A4X.addEventListener('click', eventQ1);
// * EVENTLISTENER PARA BOTON CORRECTO
Q1_A1V.addEventListener('click', function(){
  contador ++;
  Q1_A1V.style.backgroundColor = 'rgb(36, 235, 241)';
  Q1_A1V.style.color = 'rgb(108, 12, 181)';
  Q1_A2X.style.backgroundColor = 'grey';
  Q1_A3X.style.backgroundColor = 'grey';
  Q1_A4X.style.backgroundColor = 'grey';
  Q1_A2X.style.boxShadow = 'none';
  Q1_A3X.style.boxShadow = 'none';
  Q1_A4X.style.boxShadow = 'none';
      // *Insertar mensaje de acierto
  let XMessage = document.getElementById('answer_messageQ1');
  XMessage.style.visibility = 'visible';
  let XMessageText = document.createTextNode(`CORRECTO! llevas ${contador} pregunta correcta. Venus es el planeta más cálido, incluso estando más lejos del Sol que Mercurio, porque tiene una atmósfera tan densa que actúa como un abrigo de plumas gigante.`) ;
  XMessage.appendChild(XMessageText);
})



      // * EVENTOS DE Q2
const Q2_A1X = document.getElementById('Q2_A1');
const Q2_A2V = document.getElementById('Q2_A2');
const Q2_A3X = document.getElementById('Q2_A3');
const Q2_A4X = document.getElementById('Q2_A4');
// * EVENTLISTENER PARA TODOS LOS BOTONES INCORRECTOS
function eventQ2() {
  Q2_A2V.style.backgroundColor = 'rgb(36, 235, 241)';
  Q2_A2V.style.color = 'rgb(108, 12, 181)';
  Q2_A1X.style.backgroundColor = 'grey';
  Q2_A3X.style.backgroundColor = 'grey';
  Q2_A4X.style.backgroundColor = 'grey';
  Q2_A1X.style.boxShadow = 'none';
  Q2_A3X.style.boxShadow = 'none';
  Q2_A4X.style.boxShadow = 'none';

    // *Insertar mensaje de fallo
  let XMessage = document.getElementById('answer_messageQ2');  //* <p>
  XMessage.style.visibility = 'visible';
  let XMessageText = document.createTextNode('Oh! Has fallado. La respuesta correcta es La Tierra. La Tierra es el tercer planeta desde el Sol, justo después de Venus y antes de Marte.') ;
  XMessage.appendChild(XMessageText);
};
Q2_A1X.addEventListener('click', eventQ2);
Q2_A3X.addEventListener('click', eventQ2);
Q2_A4X.addEventListener('click', eventQ2);
// * EVENTLISTENER PARA BOTON CORRECTO
Q2_A2V.addEventListener('click', function(){
  contador ++;
  Q2_A2V.style.backgroundColor = 'rgb(36, 235, 241)';
  Q2_A2V.style.color = 'rgb(108, 12, 181)';
  Q2_A1X.style.backgroundColor = 'grey';
  Q2_A3X.style.backgroundColor = 'grey';
  Q2_A4X.style.backgroundColor = 'grey';
  Q2_A1X.style.boxShadow = 'none';
  Q2_A3X.style.boxShadow = 'none';
  Q2_A4X.style.boxShadow = 'none';
      // *Insertar mensaje de acierto
  let XMessage = document.getElementById('answer_messageQ2');
  XMessage.style.visibility = 'visible';
  let XMessageText = document.createTextNode(`CORRECTO! llevas ${contador} preguntas correctas. La Tierra es el tercer planeta desde el Sol, justo después de Venus y antes de Marte.`) ;
  XMessage.appendChild(XMessageText);
})



    // * EVENTOS DE Q3
const Q3_A1X = document.getElementById('Q3_A1');
const Q3_A2V = document.getElementById('Q3_A2');
const Q3_A3X = document.getElementById('Q3_A3');
const Q3_A4X = document.getElementById('Q3_A4');
// * EVENTLISTENER PARA TODOS LOS BOTONES INCORRECTOS
function eventQ3() {
  Q3_A2V.style.backgroundColor = 'rgb(36, 235, 241)';
  Q3_A2V.style.color = 'rgb(108, 12, 181)';
  Q3_A1X.style.backgroundColor = 'grey';
  Q3_A3X.style.backgroundColor = 'grey';
  Q3_A4X.style.backgroundColor = 'grey';
  Q3_A1X.style.boxShadow = 'none';
  Q3_A3X.style.boxShadow = 'none';
  Q3_A4X.style.boxShadow = 'none';

    // *Insertar mensaje de fallo
  let XMessage = document.getElementById('answer_messageQ3');  //* <p>
  XMessage.style.visibility = 'visible';
  let XMessageText = document.createTextNode('Oh! Has fallado. El cinturón de asteroides se encuentra entre Marte y Jupiter siendo como una frontera entre los planetas terrestres y los gigantes gaseosos.') ;
  XMessage.appendChild(XMessageText);
};
Q3_A1X.addEventListener('click', eventQ3);
Q3_A3X.addEventListener('click', eventQ3);
Q3_A4X.addEventListener('click', eventQ3);
// * EVENTLISTENER PARA BOTON CORRECTO
Q3_A2V.addEventListener('click', function(){
  contador ++;
  Q3_A2V.style.backgroundColor = 'rgb(36, 235, 241)';
  Q3_A2V.style.color = 'rgb(108, 12, 181)';
  Q3_A1X.style.backgroundColor = 'grey';
  Q3_A3X.style.backgroundColor = 'grey';
  Q3_A4X.style.backgroundColor = 'grey';
  Q3_A1X.style.boxShadow = 'none';
  Q3_A3X.style.boxShadow = 'none';
  Q3_A4X.style.boxShadow = 'none';
      // *Insertar mensaje de acierto
  let XMessage = document.getElementById('answer_messageQ3');
  XMessage.style.visibility = 'visible';
  let XMessageText = document.createTextNode(`CORRECTO! llevas ${contador} preguntas correctas. El cinturón de asteroides se encuentra entre Marte y Jupiter siendo como una frontera entre los planetas terrestres y los gigantes gaseosos.`) ;
  XMessage.appendChild(XMessageText);
})