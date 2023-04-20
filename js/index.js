
let salida = document.getElementById('salida');

let texto = document.getElementById('in-texto');

let btn1 = document.getElementById('btn-1');

let condicion = /^[a-z0-9]+$/;

function validar() {

    if(texto.value.trim() == ''){
        swal("ERROR!", "El texto no puede ser vacio", "error");
    }else if(!condicion.test(texto.value)){
        swal("ERROR!", "El texto no puede contener mayúsculas, carácteres especiales, ni acentos.", "warning");
    }
}

function encriptar() {
    
    validar();

    if(texto.value.trim() != '' && condicion.test(texto.value)) {
        salida.style.setProperty("text-align", "justify");
        salida.innerHTML = `<textarea class="tsalida" >${texto.value}</textarea>`
        salida.innerHTML += `<button class="btn-3" onclick="copiar()">Copiar</button>`
    }

    texto.value = "";
}

function desencriptar() {
    
    validar();

    if(texto.value.trim() != '' && condicion.test(texto.value)) {
        salida.style.setProperty("text-align", "justify");
        salida.innerHTML = `<textarea class="tsalida" >${texto.value}</textarea>`
        salida.innerHTML += `<button class="btn-3" onclick="copiar()">Copiar</button>`
    }

    texto.value = "";
}

function copiar() {
    swal("Hecho", "El texto ha sido copiado correctamente", "success");
}


// console.log(/^[a-z0-9]+$/.test(texto.value));