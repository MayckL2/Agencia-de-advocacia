let mostra= document.querySelector("#mostra")
function renderiza(){
    let scroll= window.pageYOffset
    let tela= window.innerWidth
    let prob = document.querySelector("#prob")
    let solu = document.querySelector("#solu")
    
    if(tela >= 750){

        if(scroll >= 200){
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
        if(scroll >= 900){
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
        if(scroll > 1600){
            advo[0].style.animation= "up 1s ease-in-out"
            advo[1].style.animation= "up 1s ease-in-out"
            advo[2].style.animation= "up 1s ease-in-out"
        }else{
            advo[0].style.animation= "none"
            advo[1].style.animation= "none"
            advo[2].style.animation= "none"
        }
    }
}