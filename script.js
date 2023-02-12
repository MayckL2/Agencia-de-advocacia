let tela= window.innerWidth
let mostra= document.querySelector("#mostra")

// let tamTela = document.title= window.innerHeight

function abremodal(){
    modal= document.querySelector(".mod")
    body= document.querySelector("body")

    modal.style.display= "flex"
    body.style.overflowY= "hidden"
}

function fechamodal(){
    modal.style.display= "none"
    body.style.overflowY= "auto"

    if(tela >= 750){
        let nomes = document.querySelector("#nomes")
        let estatua = document.querySelector("#estatua")
        
        nomes.style.animation= "right 1s ease-in-out"
        estatua.style.animation= "left 1s ease-in-out"
        
        addEventListener("scroll", renderiza)
    }
}

let modalAdvo= document.querySelector(".advogado")
function modalAdvogado(perfilFoto, nomeAdvo, sinopseAdvo){
    let nome = document.querySelector("#nome")
    let sinopse = document.querySelector("#sinopse")
    let perfil= document.querySelector("#perfil")

    modalAdvo.style.display= "flex"
    nome.innerHTML = nomeAdvo
    sinopse.innerHTML = sinopseAdvo
    perfil.setAttribute("src", perfilFoto)
}
function fechaAdvogado(){
  modalAdvo.style.display= "none"
}

function renderiza(){
    let scroll= window.pageYOffset
    let prob = document.querySelector("#prob")
    let solu = document.querySelector("#solu")
    
    
    if(tela >= 750){


        if(scroll >= tamTela/2){
            prob.style.animation= "up 1s ease-in-out"
            prob.style.opacity= 1
            solu.style.animation= "up2 2s ease-in-out"
            solu.style.opacity= 1
        }else{
            prob.style.animation= "none"
            prob.style.opacity= 0
            solu.style.animation= "none"
            solu.style.opacity= 0
        }
    
        let casos= document.querySelectorAll(".casos")
        if(scroll >= (tamTela*3)/2){
          casos[0].style.animation= "popup 0.5s"
          casos[1].style.animation= "popup 0.7s"
          casos[2].style.animation= "popup 0.9s"
          casos[3].style.animation= "popup 1.1s"
        }else{
            casos[0].style.animation= "none"
            casos[1].style.animation= "none"
            casos[2].style.animation= "none"
            casos[3].style.animation= "none"
        }
    
        let advo= document.querySelectorAll(".advo")
        if(scroll > (tamTela*5)/2){
            advo[0].style.animation= "upAdvogado 1s ease-in-out"
            advo[1].style.animation= "upAdvogado 1s ease-in-out"
            advo[2].style.animation= "upAdvogado 1s ease-in-out"
        }else{
            advo[0].style.animation= "none"
            advo[1].style.animation= "none"
            advo[2].style.animation= "none"
        }
    }
}
