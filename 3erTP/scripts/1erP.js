function validarEdad() {
    const edad = prompt("Dime tu edad");
    if (isNaN(edad)) {
        alert("Ingresa un numero valido");
        validarEdad();
    } else if (edad >= 18) {
        alert("Puedes conducir");
    } else if (edad < 18) {
        alert("No puedes conducir, debes tener 18 años o mas");
    }
}