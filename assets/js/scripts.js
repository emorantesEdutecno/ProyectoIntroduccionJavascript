
function saludar(){
    let elParrafo = document.getElementById('demo');
    elParrafo.innerHTML = ' !!!HOLA MUNDO !!!! ';
    elParrafo.style.color = 'red';
    elParrafo.style.fontSize = '25px';
    elParrafo.style.backgroundColor = 'yellow';
}


function generar(){

    // utilizando backticks (no es la comilla simple) guardamos en la variable todo el codigo HTML diseñado
    let contenido = ` 
    
        
    <div class="container">
    <div class="row">
        <div class="col-md-12 bg-success m-4">
            <p>Bienvenida</p>
        </div>
    </div>

    <div class="row">
        <div class="col-md-1"></div>

        <div class="col-md-5 bg-primary m-4">
            <p>Hora</p>
        </div>
        <div class="col-md-5 bg-danger m-4">
            <p>fecha</p>
        </div>

        <div class="col-md-1"></div>
    </div>

    <div class="row">
        <div class="col-md-12 bg-warning m-4">
            <p>Vuelo próximo</p>
        </div>
    </div>
</div>
    
    
    
    `;


    let elDivContenido = document.getElementById('divContenido');
    elDivContenido.innerHTML = contenido;

}


function generarCompleto(){

    let nuevoParrafo = document.createElement('p');
    nuevoParrafo.innerHTML = 'soy parrafo creado enteramente con js';

    let elDivCompleto = document.getElementById('divCompleto');
    elDivCompleto.appendChild(nuevoParrafo);

    let unNuevoDiv = document.createElement('div');
    unNuevoDiv.setAttribute('class', 'container');

    let nuevaFila = document.createElement('div');
    nuevaFila.setAttribute('class','row');
    
    let columnaIzquierda = document.createElement('div');
    columnaIzquierda.setAttribute('class', 'col-md-6 bg-success');
    let parrafoIzquierdo = document.createElement('p');
    parrafoIzquierdo.innerHTML= 'soy parrafo izquierdo';
    columnaIzquierda.appendChild(parrafoIzquierdo);

/* 
    let columnaDerecha = document.createElement('div');
    columnaDerecha.setAttribute('class', 'col-md-6 bg-warning');
    let parrafoDerecho = document.createElement('p');
    parrafoDerecho.innerHTML = 'soy un parrafo derecho';
    columnaDerecha.appendChild(parrafoDerecho);
*/

    let columnaDerecha = document.createElement('div');
    columnaDerecha.classList.add('col-md-6');
    columnaDerecha.classList.add('bg-warning');
    let parrafoDerecho = document.createElement('p');
    parrafoDerecho.innerHTML = 'soy un parrafo derecho';
    columnaDerecha.appendChild(parrafoDerecho);


    nuevaFila.appendChild(columnaIzquierda);
    nuevaFila.appendChild(columnaDerecha);
    unNuevoDiv.appendChild(nuevaFila);

    elDivCompleto.appendChild(unNuevoDiv);


}
