# Quiz_bootcamp_proyect

## Quiz de Preguntas - README

Este es un Quiz de preguntas básico desarrollado utilizando HTML, CSS y JavaScript. El objetivo del quiz es presentar una serie de preguntas sobre el universo  o el sistema solar al usuario y evaluar sus respuestas.

### Funcionamiento del código

El código del Quiz consta de dos partes principales: el archivo HTML y el archivo JavaScript.

#### HTML

El archivo HTML (`index.html`) proporciona la estructura y el contenido de la página web. Utiliza diferentes elementos HTML para crear los componentes del quiz, como el título, las preguntas, las opciones de respuesta y el botón de envío.

Cada pregunta se presenta dentro de un elemento `<div>` con un identificador único, y las opciones de respuesta se representan mediante elementos `<input type="radio">`. Para cada pregunta, se ha asociado un atributo `name` común a todas las opciones de respuesta, lo que garantiza que solo se pueda seleccionar una opción por pregunta.

Además, se ha incluido un elemento `<button>` que actúa como el botón de envío del quiz. Al hacer clic en este botón, se invoca una función JavaScript para evaluar las respuestas del usuario.

#### JavaScript

El archivo JavaScript (`script.js`) contiene el código que controla la lógica del Quiz. Utiliza el DOM para acceder y manipular los elementos HTML de la página.

Cuando el usuario hace clic en el botón de envío, se ejecuta la función `submitQuiz()` en JavaScript. Esta función realiza las siguientes tareas:

1. Obtiene todas las preguntas del quiz utilizando el método `querySelectorAll()`, que selecciona todos los elementos con una clase específica (`'.question'`).
2. Itera sobre cada pregunta y obtiene la respuesta seleccionada por el usuario.
3. Compara la respuesta seleccionada por el usuario con la respuesta correcta almacenada en el atributo `data-answer` de la pregunta correspondiente.
4. Calcula la puntuación total del usuario según las respuestas correctas.
5. Muestra un mensaje en la página web con la puntuación obtenida por el usuario.

El código también utiliza propiedades para modificar el contenido de ciertos elementos HTML y mostrar el resultado del quiz al usuario.

#### CSS
El CSS está organizado de por etiquetas, clases e identificadores, desde más importante a menos. 
Todos los contenedores están juntos, así como las clases e identificadores de cada botón, input o icono.


### Personalización del Quiz

Si deseas personalizar el Quiz, puedes realizar las siguientes modificaciones:

- Agregar o eliminar preguntas: Para agregar más preguntas al Quiz, puedes duplicar el código HTML para una pregunta existente y ajustar los valores de las opciones de respuesta y la respuesta correcta. Así como incluir las respuestas en el objeto SOLUTIONS de JS. 
