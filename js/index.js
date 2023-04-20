
let salida = document.getElementById('salida');

let texto = document.getElementById('in-texto');

function encriptar(){
    if(texto.value.trim() != ''){
        salida.style.setProperty("text-align", "justify");
        salida.innerHTML = `<h2>${texto.value}</h2>`
        salida.innerHTML += `<button class="btn-3" onclick="copiar()">Copiar</button>`
    }else{
        swal("ERROR!", "El texto no puede ser vacio", "error");
    }
    texto.value = "";
}

function desencriptar(){
    if(texto.value.trim() != ''){
        salida.innerHTML = `<h2>Aquí se mostrará el texto desencriptado</h2>`
        salida.innerHTML += `<button class="btn-3" onclick="copiar()">Copiar</button>`
    }else{
        swal("ERROR!", "El texto no puede ser vacio", "error");
    }
    texto.value = "";
}

function copiar(){
    swal("Hecho", "El texto ha sido copiado correctamente", "success");
}