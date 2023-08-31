let meuForm = document.getElementById("meuForm");
meuForm.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Formulário foi enviado");
})

function alternaCampoOutro(){
    var outroCampo = document.getElementById("outroCampo");
    var outroOpcao = document.getElementById("outroOpcao");

    if (outroOpcao.checked) {
        outroCampo.style.display = "block";
    } else {
        outroCampo.style.display = "none";
    }
}
