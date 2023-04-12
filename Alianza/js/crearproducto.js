7
const formulario = document.getElementById('crear-servicio-form');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const datosServicio = {
    nombre: formulario.nombre.value,
    descripcion: formulario.descripcion.value,
    precio: parseFloat(formulario.precio.value),
    tiempoEntrega: parseInt(formulario.tiempoEntrega.value),
  };

  fetch('/servicios/crear', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosServicio)
  })
  .then((respuesta) => {
    if (respuesta.ok) {
      // mostrar mensaje de éxito
      console.log('Servicio creado correctamente');
    } else {
      // mostrar mensaje de error
      console.error('Error al crear el servicio');
    }
  })
  .catch((error) => {
    // mostrar mensaje de error
    console.error('Error al crear el servicio', error);
  });
});
