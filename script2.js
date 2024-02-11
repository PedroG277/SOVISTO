function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}

function navigateToPage(button_id) {
    if (button_id == 'submeterButton'){
        window.location.href = "submetido.html";
    }
    else if (button_id == 'voltarButton'){
        window.location.href = 'index.html'
    }
    else if (button_id == 'acederFormularioButton'){
        window.location.href = 'fazer-um-pedido.html'
    }
    else if (button_id == 'suporteButton'){
        window.location.href = ''
    }
    else if (button_id == 'entrarPainelCButton'){
        window.location.href = ''
    }

}


window.onresize = function(event) {
    textResize()
}

function textResize(){
    let a1 = document.getElementsByClassName('contactoCardText')
    let b1 = 0
    for (let i = 0; i < a1.length; i++){
        if (a1[i].offsetHeight > b1){
            b1  = a1[i].offsetHeight
        }
    }
    
    for (let j = 0; j < a1.length; j++){
        a1[j].style.height = b1.toString().concat('px')
    }



    let a2 = document.getElementsByClassName('contactoCardTitle')
    let b2 = 0
    for (let i = 0; i < a2.length; i++){
        a2[i].style.height = 'fit-content'
        if (a2[i].offsetHeight > b2){
            b2  = a2[i].offsetHeight
        }
    }
    
    for (let j = 0; j < a2.length; j++){
        a2[j].style.height = b2.toString().concat('px')
    }
}

textResize()

