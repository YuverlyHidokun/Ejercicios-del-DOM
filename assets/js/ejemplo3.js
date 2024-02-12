var colores = ['color-1', 'color-2', 'color-3', 'color-4'];
    var colorIndex = 0;

    function agregarElemento() {
        var newItemText = document.getElementById('newItem').value;

        if (newItemText.trim() !== "") {
            var lista = document.getElementById('miLista');
            var nuevoElemento = document.createElement('li');
            nuevoElemento.innerText = newItemText;

            nuevoElemento.classList.add(colores[colorIndex]);

            colorIndex = (colorIndex + 1) % colores.length;
            
            var btnEliminar = document.createElement('button');
            btnEliminar.className = 'btn btn-danger';
            btnEliminar.innerText = 'Eliminar';
            btnEliminar.onclick = function() {
                eliminarElemento(this);
            };
            
            nuevoElemento.appendChild(btnEliminar);

            // Crear un elemento de imagen
            var imagen = document.createElement('img');
            imagen.src = 'assets/imagenes/1.jpg'; 
            imagen.alt = 'icon'; 
            imagen.style.width = '50px'; 

            nuevoElemento.appendChild(imagen);
            
            lista.appendChild(nuevoElemento);
            
            document.getElementById('newItem').value = "";
        } else {
            alert("Por favor, ingresa un elemento válido.");
        }
    }

    function eliminarElemento(elemento) {
        var lista = document.getElementById('miLista');
        lista.removeChild(elemento.parentNode);
    }