function cambiarContenido() {
    var inputTextValue = document.getElementById('inputText').value;
    document.getElementById('resultado').innerText = 'Nuevo Contenido: ' + inputTextValue;
}