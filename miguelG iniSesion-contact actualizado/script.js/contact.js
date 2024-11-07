document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const Nombre = document.getElementById('Nombre').value;
    const Email = document.getElementById('Email').value;
    const Mensaje = document.getElementById('Mensaje').value;
    
    // Aquí puedes añadir la lógica para manejar los datos del registro
    console.log('Enviar Mensaje');
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
});