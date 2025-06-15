window.onload = function() {
  function crearDestello(contenedor) {
    const destello = document.createElement('div');
    destello.classList.add('particle');

    const contWidth = contenedor.clientWidth;
    const contHeight = contenedor.clientHeight;

    // Ángulo aleatorio para destello (en grados)
    const angle = Math.random() * 360;

    // Distancia que recorrerá el destello hacia afuera (en px)
    const distance = 30 + Math.random() * 20;

    // Calculamos desplazamiento en X e Y para la animación usando CSS variables
    const tx = (distance * Math.cos(angle * Math.PI / 180)).toFixed(2) + 'px';
    const ty = (distance * Math.sin(angle * Math.PI / 180)).toFixed(2) + 'px';

    // Posicionamos el destello en el centro del contenedor
    destello.style.left = contWidth / 2 + 'px';
    destello.style.top = contHeight / 2 + 'px';

    // Pasamos las variables CSS para usar en la animación
    destello.style.setProperty('--tx', tx);
    destello.style.setProperty('--ty', ty);

    contenedor.appendChild(destello);

    // Borrar el destello tras acabar la animación
    setTimeout(() => {
      destello.remove();
    }, 1000);
  }

  let intervalId = null;

  function startDestellos(contenedor) {
    if (intervalId) return;
    intervalId = setInterval(() => crearDestello(contenedor), 150);
  }

  function stopDestellos() {
    clearInterval(intervalId);
    intervalId = null;
  }

  const mailLink = document.querySelector('a.mail');
  const phoneLink = document.querySelector('a.phone');

  mailLink.addEventListener('mouseenter', () => {
    const cont = mailLink.querySelector('.particle-container');
    startDestellos(cont);
  });
  mailLink.addEventListener('mouseleave', stopDestellos);

  phoneLink.addEventListener('mouseenter', () => {
    const cont = phoneLink.querySelector('.particle-container');
    startDestellos(cont);
  });
  phoneLink.addEventListener('mouseleave', stopDestellos);
};
