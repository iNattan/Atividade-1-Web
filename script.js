let meuForm = document.getElementById("meuForm");
let cards = document.querySelectorAll('.card');
let popups = document.querySelectorAll('.popupFundo');
let linhaProgramacao = document.querySelectorAll('tr');
let camposFormulario = document.querySelectorAll('input, textarea, select');

meuForm.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Formulário foi enviado");
})

function alternaCampoOutro(){
    let outroCampo = document.getElementById("outroCampo");
    let outroOpcao = document.getElementById("outroOpcao");

    if (outroOpcao.checked) {
        outroCampo.style.display = "block";
    } else {
        outroCampo.style.display = "none";
    }
}

function rolarAte(idDestino){
    let destino = document.getElementById(idDestino).scrollIntoView({
        behavior: "smooth",
    });
}

cards.forEach(function(card, index){
    card.addEventListener('click', () => {
        popups[index].style.display = "block";
    });
});

document.addEventListener('click', event => {
    let nomeClasseElementoClicado = event.target.classList[0];
    if (nomeClasseElementoClicado === 'popupFundo'){
        popups.forEach(popup => {
            popup.style.display = "none";
        });
    }
})

linhaProgramacao.forEach(function(linha){
    linha.addEventListener('mouseenter', () => {
        console.log(linha.style.fontStyle);
        linha.style.fontWeight = 'bold';
        linha.style.backgroundColor = 'rgb(204, 55, 204)';        
    })    

    linha.addEventListener('mouseleave', () => {    
        linha.style.fontWeight = 'normal';
        linha.style.backgroundColor = 'white';        
    })    
});

camposFormulario.forEach(function(campo) {
    campo.addEventListener('focus', () => {
      campo.style.backgroundColor = 'rgb(245, 218, 245)';
      campo.style.border = '2px solid blue';
    });
  
    campo.addEventListener('blur', () => {
      campo.style.backgroundColor = ''; 
      campo.style.border = ''; 
    });
});