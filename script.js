const lista = document.getElementById("lista");

alert(lista);

var personas = ['Nombre 1','Nombre2','Nombre3', 'Nombre4','Nombre5'];

const agregarPersona = () =>{
    var nombre = document.getElementById("nombre").value;
    lista.innerHTML = '';
    personas.push(nombre);
    mostrarvalores();
    nombre.value = "";

    


}

const mostrarvalores =() => {
    personas.map(persona => {
        var li = document.createElement('li');
        li.innerHTML = persona;
        lista.appendChild(li)
    })
}

const borrarValores = () => {
    lista.innerHTML = '';
    personas = [];
}

mostrarvalores();