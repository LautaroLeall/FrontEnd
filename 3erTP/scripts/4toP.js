function cambiarColor(index) {
    switch (index) {
        case 1:
            document.body.style.backgroundColor = "red";
            break;
        case 2:
            document.body.style.backgroundColor = "black";
            break;
        case 3:
            document.body.style.backgroundColor = "blue";
            break;
        case 4:
            document.body.style.backgroundColor = "green";
            break;
        case 5:
            document.body.style.backgroundColor = "yellow";
            break;
    }
}
function restaurarColor() {
document.body.style.backgroundColor = "white";
}