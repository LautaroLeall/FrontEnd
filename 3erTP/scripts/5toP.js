const Jubilarse = () => {
    const edad = parseInt(document.querySelector('input[name="edad"]').value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    if (edad > 65 && sexo === "hombre") {
        alert("Puede Jubilarse Señor")
    }else if(edad > 60 && sexo === "mujer"){
        alert("Puede Jubilarse Señora")
    }else{
        alert("No puede Jubilarse todavia")
    }
}
