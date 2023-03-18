/* La ese asigna a un evento, con la funcion => (arrow) como disparador y no es un evento con funciones internas */
const signUp = e => {

    /* Llamo los elementos que voy autilizar en el registro de usuario */
    let fname = document.getElementById('fname').value;
    /* let lname = document.getElementById('lname').value; */
    let phone = document.getElementById("phone").value;
    let email = document.getElementById('email').value;
    let pwd1 = document.getElementById('pwd1').value;
    let pwd2 = document.getElementById("pwd2").value;

    /* Creo los regex */
    let nameRegex = /^[a-zA-Z ]{2,30}$/;
    let emailRegex = /\S+@\S+\.\S+/;
    let phoneRegex = /^\d{10}$/;

    /* Valido los regex y respectivas alertas */
    if (!nameRegex.test(fname)) {
        alert("Por favor ingresa tu nombre completo.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Por favor ingresa bien tu correo.");
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert("Por favor ingresa tu número de telefono.");
        return false;
    }
    if (pwd1 != pwd2) {
        alert("Las constraseñas no coinciden.");
        return false;
    }

    /* Formula para que almacene en el localStorage y que almacene dentro de un arreglo || lo trnsforma en arreglo */
    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    /* Validación y comparacion entre arreglo(formData) y función (signUp) ".some" (booleano) para comprobar si el dato existe  */
    let exist = formData.length
        && JSON.parse(localStorage.getItem('formData')).some(data => /* Esta función data (ya preestablecida en JS) tambien puede servir para comparar dos contraseñas para verificar que esten igual */
            data.fname.toLowerCase() == fname.toLowerCase()/* 
        && data.lname.toLowerCase() == lname.toLowerCase() */);

    if (!exist) {
        formData.push({ fname, email, pwd1 }); /* .push para enviar */
        localStorage.setItem('formData', JSON.stringify(formData)); /* .stItem para asignar .stringify para conevertir de nuevo a elemento string*/
        document.querySelector('form').reset(); /* .reset parque el formulario quede en blanco luego de llenar el formulario */
        document.getElementById('fname').focus(); /* .querySelector para llamar a todos los elementos. .getElement para un item en especifico */

        alert("Registro esitoso");
    } else {
        alert("Los datos ya se habían registrado");
    }

    e.preventDefault(); /* Llamar a preventDefault en cualquier momento durante la ejecución, cancela el evento, lo que significa que cualquier acción por defecto que deba producirse como resultado de este evento, no ocurrirá */
    
    sendEmail();
    limpiarFormulario();
    return false;
}

function signIn(e) {

    let email = document.getElementById('email').value;
    let pwd1 = document.getElementById('pwd1').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => data.email == email && data.pwd1 == pwd1);

    if (!exist) {
        alert("Datos de usuario incorrecto")
    } else {
        alert("Bienvenido!!!")
        location.href = "/html/index.html"
    }

    e.preventDefault(); /* para prevenir que se envien los datos antes de llenar los datos */

}