const a = 1;
const b = 2;
// * crea un EventListener para todos los botones incorrectos.
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', function() {
    console.log('¡Haz hecho clic en un botón!');
  });
});
