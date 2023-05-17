const form = document.getElementById("formulario");

const solutionsObj = {
    'question1': 'VENUS',
    'question2': 'TIERRA',
    'question4': 'ANDROMEDA',
    'question5': 'CUATRO'
}
const solutions = Object.values(solutionsObj);



// *CHANGE COLOR THE LABEL SELECTED
const labels = document.querySelectorAll('label');
labels.forEach(label => {
  label.addEventListener('click', function() {
    labels.forEach(label => label.classList.remove('buttonCorrect'));
    this.classList.add('buttonCorrect');
  });
});

// *VALIDATION
form.addEventListener('submit', function (event){ 
    event.preventDefault();

    let counter = 0;
    const checkedInputs = form.querySelectorAll('input[type="radio"]:checked'); // AGRUPO LOS INPUTS CLICADOS.
    const inputsSelectedValues = Array.from(checkedInputs).map(option => option.value); // INTRODUZCO EL VALOR DE LOS CLICADOS DENTRO DE VARIABLE
    let validado = false;
 
    for (let i = 0; i < inputsSelectedValues.length; i++) {
        if(inputsSelectedValues[i] === solutions [i]){
            counter ++;
            validado = true;
        } 
    }
    const textQ3 = document.getElementById('question3');
    const question3Value = textQ3.value;
    if(question3Value ===  'marte' || question3Value === 'MARTE'){
        counter ++;
        validado = true;
    }
    if (validado){
        if(counter === 1){
            let XMessage = document.getElementById('resultMessage');
            // XMessage.style.visibility = 'visible';
            let XMessageText = document.createTextNode(`Oooh! Lo lamento, solo has acertado ${counter} pregunta`) ;
            XMessage.appendChild(XMessageText);
        }else if(counter === 5){
            let XMessage = document.getElementById('resultMessage');
            // XMessage.style.visibility = 'visible';
            let XMessageText = document.createTextNode(`Enhorabuena!! Has acertado TODAS preguntas!!`) ;
            XMessage.appendChild(XMessageText);
        }else{

            let XMessage = document.getElementById('resultMessage');
            // XMessage.style.visibility = 'visible';
            let XMessageText = document.createTextNode(`Enhorabuena!! Has acertado ${counter} preguntas`) ;
            XMessage.appendChild(XMessageText);
        }
    }
        if(counter === 0){
        let XMessage = document.getElementById('resultMessage');
        // XMessage.style.visibility = 'visible';
        let XMessageText = document.createTextNode(`Vaya... No has acertado ninguna pregunta. Vuelve a intentarlo!!`) ;
        XMessage.appendChild(XMessageText);
        document.getElementById('reset').style.visibility = 'visible';
        }

        let resetButton = document.getElementById('reset');
        resetButton.addEventListener('click', function () {
          let XMessage = document.getElementById('resultMessage');
          XMessage.textContent = ''; // Limpiar el contenido del mensaje
          document.getElementById('reset').style.visibility = 'hidden';
        })

})


