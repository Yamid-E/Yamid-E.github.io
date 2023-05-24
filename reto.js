//Definición de arreglos para el encriptado y desencriptado del mensaje
let encriptado = {
    a : 'ai',
    e : 'enter',
    i : 'imes',
    o : 'ober',
    u : 'ufat',
};

let desEncriptado = {
    ai    : 'a',
    enter : 'e',
    imes  : 'i',  
    ober  : 'o',
    ufat  : 'u',
};

//Obtener elementos del DOM
let btnEncriptar = document.querySelector(".btn-encriptar");
let btnDesencriptar = document.querySelector(".btn-desencriptar");
let btnCopiar = document.querySelector(".btn-copiar");
let mensaje = document.querySelector(".mensaje");
let textArea = document.querySelector(".text-area");

//Función para encriptar el mensaje
const encriptarMensaje = ( mensaje ) => {

    let mensajeEncriptado = "";
    
    for (let letra of mensaje){
        if(encriptado[letra]){
            mensajeEncriptado += encriptado[letra];
        }else{
            mensajeEncriptado += letra;
        }
    }
    return mensajeEncriptado;
}

//Función para desencriptar el mensaje
const desencriptarMensaje = (mensajeEncriptado) => {
    let mensajeDesencriptado = mensajeEncriptado;
  
    for (let palabraEncriptada in desEncriptado) {
      let expresionRegular = new RegExp(palabraEncriptada, 'gi');
      mensajeDesencriptado = mensajeDesencriptado.replace(expresionRegular, desEncriptado[palabraEncriptada]);
    }
  
    return mensajeDesencriptado;
  };
  
  

//Función para copiar mensaje
const copiarMensaje = () => {
    let mensaje = document.querySelector(".mensaje");
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            console.log("Texto copiado al portapapeles");
        })
        .catch((error) => {
            console.error("Error al copiar el texto: ", error);
        });
}


btnEncriptar.addEventListener("click", () => {
    let mensajeEncriptado = encriptarMensaje( textArea.value );
    mensaje.value = mensajeEncriptado;
    mensaje.style.backgroundImage = "none";
}
);

btnDesencriptar.addEventListener("click", () => {
    let mensajeDesencriptado = desencriptarMensaje( textArea.value);
    mensaje.value = mensajeDesencriptado;
});

btnCopiar.addEventListener("click", () => {
    copiarMensaje();
});

