// script.js
const mostrarIframeButton = document.getElementById("mostrarIframe");
const meuIframe = document.getElementById("meuIframe");

mostrarIframeButton.addEventListener("click", function() {
    if (meuIframe.style.display === "none") {
        meuIframe.style.display = "block";
    } else {
        meuIframe.style.display = "none";
    }
});


var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}





