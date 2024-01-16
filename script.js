window.addEventListener("scroll", logg, setScrollVar);

var header = document.getElementById('header');
var headerinfo = header.getBoundingClientRect();
var headerheight = headerinfo.height;

var finalstring = (headerheight.toString()).concat('px')

//console.log(headerheight)
//console.log(finalstring)
const sections = document.querySelectorAll("section");
sections.forEach(element => element.style.top = finalstring);


//var screenwidth = window.innerWidth
//var blabla = (screenwidth.toString()).concat('px')
//document.getElementById('footer').style.width = blabla


function setScrollVar(){
    const htmlElement = document.documentElement
    //const percScrolled = htmlElement.scrollTop/htmlElement.scrollHeight*100
    const percScrolled = 14
}

function logg(){

    //const percScrolled = document.documentElement.scrollTop/document.documentElement.scrollHeight
    const percScrolled = document.documentElement.scrollTop/1000
    console.log(percScrolled)

    document.getElementById('sec0').style.opacity = 1-percScrolled*3



    if (percScrolled > .3){
        //console.log('Hi')
        let val = (percScrolled - .3)*(0-1)/(.6-.3)+1
        document.getElementById('sec1text').style.opacity = 0.5-val
        
        if (percScrolled > .9){
            document.getElementById('imgIcon').style.opacity = 1
        }
        else{
            document.getElementById('imgIcon').style.opacity = 0

        }

        if (percScrolled > 1.2){
            document.getElementById('pentoolIcon').style.opacity = 1
        }
        else{
            document.getElementById('pentoolIcon').style.opacity = 0

        }

        if (percScrolled > 1.5){
            document.getElementById('layersIcon').style.opacity = 1
        }
        else{
            document.getElementById('layersIcon').style.opacity = 0

        }
    }
    else{
        document.getElementById('sec1text').style.opacity = 0
    }

    if (percScrolled > 1.8){
        //console.log('Bruh')
        let val = (percScrolled - 1.8)*(0-1)/(2.1-1.8)+1
        document.getElementById('sec1').style.opacity = val

        document.getElementById('sec2').style.opacity = 0.5-val
        //console.log(1-val)

        if (percScrolled > 2.6){
            document.getElementById('browserIcon').style.opacity = 1
        }
        else{
            document.getElementById('browserIcon').style.opacity = 0
        }

        if (percScrolled > 2.9){
            document.getElementById('code2Icon').style.opacity = 1
        }
        else{
            document.getElementById('code2Icon').style.opacity = 0
        }

        if (percScrolled > 3.2){
            document.getElementById('code1Icon').style.opacity = 1
        }
        else{
            document.getElementById('code1Icon').style.opacity = 0
        }
    }

    if (percScrolled > 3.5){
        let val = (percScrolled - 3.5)*(0-1)/(3.8-3.5)+1
        document.getElementById('sec2').style.opacity = val

        document.getElementById('sec3').style.opacity = (0.5-val)

        if (percScrolled > 4.2){
            document.getElementById('lightbulbIcon').style.opacity = 1
        }
        else{
            document.getElementById('lightbulbIcon').style.opacity = 0
        }

        if (percScrolled > 4.5){
            document.getElementById('stonksIcon').style.opacity = 1
        }
        else{
            document.getElementById('stonksIcon').style.opacity = 0
        }

        if (percScrolled > 4.8){
            document.getElementById('megaphoneIcon').style.opacity = 1
        }
        else{
            document.getElementById('megaphoneIcon').style.opacity = 0
        }
    }

    if (percScrolled > 5.4){
        let val = (percScrolled - 5.4)*(0-1)/(5.7-5.4)+1
        document.getElementById('sec3').style.opacity = val
    }
}



function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}