function olaola(){
    document.getElementById('ola').style.background = '#FFFFFF'

}

window.addEventListener("scroll", log, setScrollVar)

function setScrollVar(){
    const htmlElement = document.documentElement
    const percScrolled = htmlElement.scrollTop/htmlElement.scrollHeight * 100


}

if (document.documentElement.scrollTop == .5){
    document.getElementById('ola').style.background = '#FFFFFF'
}

function logg(){
    console.log(1 - document.documentElement.scrollTop/document.documentElement.scrollHeight)
    document.getElementById('hihi').style.opacity = 1 - document.documentElement.scrollTop/document.documentElement.scrollHeight*7
}
