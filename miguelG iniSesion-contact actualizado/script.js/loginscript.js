document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const ingresar = document.getElementById('ingresar').value;
    
    // Aquí puedes añadir la lógica para manejar los datos del registro
    console.log('ingresar');
    console.log('Usuario:', usuario);
    console.log('Contraseña:', contraseña);
    console.log('Ingresar:', ingresar);
});