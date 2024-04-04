const cube = document.getElementById('cube');
const hourTop = document.getElementById('hourTop');
const minuteLeft = document.getElementById('minuteLeft');
const secondFront = document.getElementById('secondFront');

function updateTime() {
  const now = new Date();
  let hh = now.getHours();
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  // Convertir a formato de 12 horas
  const ampm = hh >= 12 ? 'PM' : 'AM';
  hh = hh % 12 || 12; // Si es 0, se convierte a 12 en formato de 12 horas

  hourTop.textContent = hh;
  minuteLeft.textContent = mm;
  secondFront.textContent = ss;

  requestAnimationFrame(updateTime);
}

updateTime();

document.addEventListener('mousedown', (e) => {
  const startX = e.clientX;
  const startY = e.clientY;

  document.addEventListener('mousemove', moveCube);

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', moveCube);
  });

  function moveCube(e) {
    const diffX = startX - e.clientX;
    const diffY = startY - e.clientY;

    cube.style.transform = `rotateX(${diffY * 0.5}deg) rotateY(${diffX * 0.5}deg)`;
  }
});


