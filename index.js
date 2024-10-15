var btnClique = document.getElementById("btnClique");
var conteudoBtn = document.getElementById("conteudoBtn");

function mostrarDiv() {
    var div = document.getElementById("conteudoBtn");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}    