const numerosPrimos = [];
for (let i = 2; i <= 100; i++) {
    // Lo hago desde el 2 ya que el 1 no es considerado un número primo
    let esPrimo = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        // Se realiza hasta la raíz cuadrada del numero (osea hasta la raiz cuadrada de i)
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        numerosPrimos.push(i);
    }
}
document.write(numerosPrimos);