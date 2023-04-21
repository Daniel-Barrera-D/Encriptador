
let salida = document.getElementById('salida');

let texto = document.getElementById('in-texto');

let btn1 = document.getElementById('btn-1');



let condicion = /^[a-z0-9\s]+$/;

const codificacion = {
    a : "ai",
    e : "enter",
    i : "imes",
    o : "ober",
    u : "ufat"
}

const regexEncrip = new RegExp(`[${Object.keys(codificacion).join("")}]`, "g");

let texto2 = "";

function validar() {

    if(texto.value.trim() == ''){
        swal("ERROR!", "El texto no puede ser vacio.", "error");
    }else if(!condicion.test(texto.value)){
        swal("ERROR!", "El texto no puede contener mayúsculas, carácteres especiales, ni acentos.", "warning");
    }
}

function encriptar() {
    
    validar();

    if(texto.value.trim() != '' && condicion.test(texto.value)) {
        salida.style.setProperty("text-align", "justify");
        texto2 = texto.value.replace(regexEncrip, (match) => {
            return codificacion[match];
        });
        salida.innerHTML = `<textarea name="text" class="tsalida" id="out-salida" disabled>${texto2}</textarea>`
        salida.innerHTML += `<button class="btn-3" onclick="copiar()">Copiar</button>`
    }

    texto.value = "";
}

function desencriptar() {
    
    validar();

    if(texto.value.trim() != '' && condicion.test(texto.value)) {
        salida.style.setProperty("text-align", "justify");
        for(const pro in codificacion) {
            texto2 = texto2.replaceAll(codificacion[pro],pro);
        }
        salida.innerHTML = `<textarea name="text" class="tsalida" id="out-salida" disabled>${texto2}</textarea>`
        salida.innerHTML += `<button class="btn-3" onclick="copiar()">Copiar</button>`
    }

    texto.value = "";
}

function copiar() {
    swal("Hecho", "El texto ha sido copiado correctamente al portapapeles.", "success");
    navigator.clipboard.writeText(texto2);
    texto.value= texto2;
}