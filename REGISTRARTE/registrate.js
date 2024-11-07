document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    
    // Aquí puedes añadir la lógica para manejar los datos del registro
    console.log('Registrando usuario...');
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Contraseña:', contraseña);
});
