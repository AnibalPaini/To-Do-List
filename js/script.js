const input = document.querySelector('.input-texto');
const boton = document.querySelector('.btn');
const ul = document.querySelector("ul");
const vacio = document.querySelector(".vacio");
const btnVaciarLista = document.querySelector('.btn-vaciar');

btnVaciarLista.style.display = 'none';
boton.addEventListener('click', (e) => { //cada vez que hacemos clic en el boton agregar
    e.preventDefault(); //prevenimos el evento default
    if (input.value !== ''){ //si el input esta vacio creamos los elemnetos de la lista
        const text= input.value;
        const li= document.createElement('li');
        const p= document.createElement('p');
        p.textContent=text;
        li.appendChild(p)
        li.appendChild(botonEliminar())
        ul.appendChild(li) 

        input.value=''; //reseteamos el input, sacamos el texto "sin tareas"
        vacio.style.display=('none')
        toggleBtnVaciarLista();
    }
    

});

function botonEliminar(){
    const eliminarBtn=document.createElement('button');//creamos el boton eliminar
    eliminarBtn.textContent='X';
    eliminarBtn.className='btn-eliminar';

    eliminarBtn.addEventListener('click', (e)=>{
        const item =e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');
        if (items.length === 0){
            vacio.style.display=('block');
            btnVaciarLista.style.display = 'none';
        } else {
            toggleBtnVaciarLista(); // Verificar si mostrar u ocultar el botón "Vaciar Lista"
        }
    });
    return eliminarBtn;
}

btnVaciarLista.addEventListener('click', () => {
    ul.innerHTML = ''; // Eliminar todos los elementos hijos de <ul>
    vacio.style.display = 'block'; // Mostrar el mensaje de "Sin tareas pendientes..."
    btnVaciarLista.style.display = 'none';
});

function toggleBtnVaciarLista() {
    if (ul.children.length > 0) {
        btnVaciarLista.style.display = 'block';
    } else {
        btnVaciarLista.style.display = 'none';
    }
}



