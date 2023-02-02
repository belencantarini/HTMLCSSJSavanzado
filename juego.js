let imagen1 = document.getElementById('img1');
let imagen2 = document.getElementById('img2');
let imagen3 = document.getElementById('img3');
let dropzone1 = document.getElementById('drop1');
let dropzone2 = document.getElementById('drop2');
let dropzone3 = document.getElementById('drop3');
let reiniciar = document.getElementById('reiniciar');


imagen1.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData('Text','./src/imagenes/rompe2.png');
})

imagen2.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData('Text','./src/imagenes/Rompe1.png');
})

imagen3.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData('Text','./src/imagenes/Rompe3.png');
})



dropzone1.addEventListener('dragover',prevenirDefault);
dropzone2.addEventListener('dragover',prevenirDefault);
dropzone3.addEventListener('dragover',prevenirDefault);

function prevenirDefault(evento) {
    evento.preventDefault();
}


dropzone1.addEventListener('drop',(evento)=>{
    let infoImagen1 = evento.dataTransfer.getData('Text');
    dropzone1.innerHTML= `<img draggable="false" class="imagenRemove" src=${infoImagen1}>`;
    infoImagen1 === './src/imagenes/rompe2.png' && imagen1.classList.add('nodisplay');
    infoImagen1 === './src/imagenes/Rompe1.png' && imagen2.classList.add('nodisplay');
    infoImagen1 === './src/imagenes/Rompe3.png' && imagen3.classList.add('nodisplay');
})

dropzone2.addEventListener('drop',(evento)=>{
    let infoImagen2 = evento.dataTransfer.getData('Text');
    dropzone2.innerHTML= `<img draggable="false" class="imagenRemove" src=${infoImagen2}>`;
    infoImagen2 === './src/imagenes/rompe2.png' && imagen1.classList.add('nodisplay');
    infoImagen2 === './src/imagenes/Rompe1.png' && imagen2.classList.add('nodisplay');
    infoImagen2 === './src/imagenes/Rompe3.png' && imagen3.classList.add('nodisplay');
})

dropzone3.addEventListener('drop',(evento)=>{
    let infoImagen3 = evento.dataTransfer.getData('Text');
    dropzone3.innerHTML= `<img draggable="false" class="imagenRemove" src=${infoImagen3}>`;
    infoImagen3 === './src/imagenes/rompe2.png' && imagen1.classList.add('nodisplay');
    infoImagen3 === './src/imagenes/Rompe1.png' && imagen2.classList.add('nodisplay');
    infoImagen3 === './src/imagenes/Rompe3.png' && imagen3.classList.add('nodisplay');
})

reiniciar.addEventListener('click',reiniciarJuego);

function reiniciarJuego(){
    imagen1.classList.remove('nodisplay');
    imagen2.classList.remove('nodisplay');
    imagen3.classList.remove('nodisplay');
    dropzone1.innerHTML= `<p>Arrastre y suelte la imágen aquí</p>`;
    dropzone2.innerHTML= `<p>Arrastre y suelte la imágen aquí</p>`;
    dropzone3.innerHTML= `<p>Arrastre y suelte la imágen aquí</p>`;
};
