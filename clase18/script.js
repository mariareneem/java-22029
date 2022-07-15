const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', function() {
    const inputTitulo = get('titulo')

    const lbl = get('lblNombre')
    debugger
    console.log(lbl)
})
const valor = inputTitulo.value;

const ul = get('listado');

const li = document.createElement('li')
li.innerHTML = valor;

ul.appendChild(li);
