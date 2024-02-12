function agregarElemento() {
            var lista = document.getElementById('miLista');
            var nuevoElemento = document.createElement('li');
            nuevoElemento.className = 'list-group-item';
            nuevoElemento.innerText = 'Nuevo Elemento';
            lista.appendChild(nuevoElemento);
        }

        function quitarElemento() {
            var lista = document.getElementById('miLista');
            if (lista.children.length > 0) {
                lista.removeChild(lista.lastElementChild);
            }
        }