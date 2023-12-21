function olaola(){
    document.getElementById('ola').style.background = '#FFFFFF'
}

window.addEventListener("scroll", logg, setScrollVar)

function setScrollVar(){
    const htmlElement = document.documentElement
    const percScrolled = htmlElement.scrollTop/htmlElement.scrollHeight*100
}

if (document.documentElement.scrollTop == .5){
    document.getElementById('ola').style.background = '#FFFFFF'
}

function changes(){
    
}

function logg(){

    const percScrolled = document.documentElement.scrollTop/document.documentElement.scrollHeight
    console.log(percScrolled)

    document.getElementById('hihi').style.opacity = 1-percScrolled*5

    if (percScrolled >= 0.15){
        document.getElementById('DGSec').classList.remove('OUTsec1')
        document.getElementById('DGSec').classList.add('INsec1')

        // document.getElementById('GD-text').classList.add('fixGD')
    }
    else{
        document.getElementById('DGSec').classList.remove('INsec1')
        document.getElementById('DGSec').classList.add('OUTsec1')
    }

    // if (percScrolled >= 0.33){
    //     // document.getElementById('DGSec').style.backgroundColor = '#FFFFFF'
    //     // console.log('gello')

    //     document.getElementById("DGSec").animate(
    //         [
    //           // keyframes
    //           { opacity: 1 },
    //           { opacity: 0 },
    //         ],
    //         {
    //           // timing options
    //           duration: 1000,
    //           iterations: 5
              
    //         },
    //       );
    // }
}
