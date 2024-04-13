  const boton = document.querySelector('#boton');
    const menu = document.querySelector('#menu');

    boton.addEventListener('click', () => {
      console.log('click')
      menu.classList.toggle('hidden')
    })
 

  window.addEventListener('scroll', function() {
  var navbar = document.querySelector('nav');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) { // Cambia 100 por la posición en la que deseas que ocurra el cambio de color
    navbar.classList.remove('bg-primary');
    navbar.classList.add('bg-primaryWhite');
  } else {
    navbar.classList.remove('bg-primaryWhite');
    navbar.classList.add('bg-primary');
  }
});