const nota = prompt("Dime tu nota");
if (nota >= 0 && nota <= 3) {
    alert(`${nota} = Muy deficiente`);
} else if (nota >= 3 && nota <= 5) {
    alert(`${nota} = Insuficiente`);
} else if (nota >= 5 && nota <= 6) {
    alert(`${nota} = Suficiente`);
} else if (nota >= 6 && nota <= 7) {
    alert(`${nota} = Bien`);
} else if (nota >= 7 && nota <= 9) {
    alert(`${nota} = Notable`);
} else if (nota >= 9 && nota <= 10) {
    alert(`${nota} = Sobresaliente`);
} else{
    alert("Error en la nota introducida");
}