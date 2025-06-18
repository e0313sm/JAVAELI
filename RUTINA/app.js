const formularioUI = document.querySelector('#formulario'); 
const listaActividadesUI = document.getElementById('listaActividades'); 
let arrayActividades = [];

const CrearTarea = (actividad) => {
    const fechaActual = new Date(); // Objeto de fecha actual
    const item = {
        actividad: actividad,
        estado: false,
        fechaHora: fechaActual.toLocaleString() // Fecha y hora legible (local)
    };
    arrayActividades.push(item);
};


const GuardarTarea = () => { 
    localStorage.setItem('rutina', JSON.stringify(arrayActividades)); 
    PintarTarea(); 
};

const PintarTarea = () => { 
    listaActividadesUI.innerHTML = ''; 
    arrayActividades = JSON.parse(localStorage.getItem('rutina')); 
    if(arrayActividades === null){ 
        arrayActividades = []; 
    } else { 
        arrayActividades.forEach(element => { 
            if(element.estado){ 
                listaActividadesUI.innerHTML += ` 
                <div class="alert ${element.estado ? 'alert-success' : 'alert-danger'}" role="alert"> 
                    <i class="material-icons float-left mr-2">accessibility</i>
                    <b>${element.actividad}</b> - ${element.estado ? 'Completado' : 'Pendiente'}
                    <br><small class="text-muted">${element.fechaHora || 'Sin fecha'}</small>

                    <span class="float-right"> 
                        <i class="material-icons">done</i> 
                        <i class="material-icons">delete</i> 
                    </span> 
                </div>`;
 
            } else { 
                listaActividadesUI.innerHTML += ` 
                <div class="alert alert-danger" role="alert"> 
                    <i class="material-icons float-left mr-2">accessibility</i> 
                    <b>${element.actividad}</b> - ${element.estado ? 'Completado' : 'Pendiente'}
                    <br><small class="text-muted">${element.fechaHora || 'Sin fecha'}</small>
                    <span class="float-right"> 
                        <i class="material-icons">done</i> 
                        <i class="material-icons">delete</i> 
                    </span> 
                </div>`; 
            } 
        }); 
    } 
};

formularioUI.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    let actividadUI = document.querySelector("#actividad").value; 
    CrearTarea(actividadUI); 
    GuardarTarea(); 
    formularioUI.reset(); 
}); 

document.addEventListener("DOMContentLoaded", PintarTarea);

listaActividadesUI.addEventListener("click", (e) => { 
    e.preventDefault(); 
    if (e.target.innerHTML === "done" || e.target.innerHTML === "delete") { 
        // let texto = e.path[2].childNodes[1].innerHTML; 
        let texto = e.target.closest('.alert').querySelector('b').innerText;
        if (e.target.innerHTML === "delete") { 
            BorrarTarea(texto); 
        } 
        if (e.target.innerHTML === "done") { 
            CambiarEstadoTarea(texto); 
        } 
    } 
});

const BorrarTarea = (actividad) => { 
    let indexArray; 
    arrayActividades.forEach((elemento, index) => { 
        if (elemento.actividad === actividad) { 
            indexArray = index; 
        } 
    }); 
    arrayActividades.splice(indexArray, 1); 
    GuardarTarea(); 
};

const CambiarEstadoTarea = (actividad) => { 
    let indexArray = arrayActividades.findIndex( 
        (elemento) => elemento.actividad === actividad 
    ); 
    arrayActividades[indexArray].estado = true; 
    GuardarTarea(); 
};
