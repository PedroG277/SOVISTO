window.addEventListener("scroll", logg, setScrollVar);

var header = document.getElementById('header');
var headerinfo = header.getBoundingClientRect();
var headerheight = headerinfo.height;

var finalstring = (headerheight.toString()).concat('px')

//console.log(headerheight)
//console.log(finalstring)


const sections = document.querySelectorAll("section");
sections.forEach(element => element.style.top = finalstring);


function setScrollVar(){
    const htmlElement = document.documentElement
    const percScrolled = htmlElement.scrollTop/htmlElement.scrollHeight*100
}

function logg(){

    const percScrolled = document.documentElement.scrollTop/document.documentElement.scrollHeight
    //console.log(percScrolled)

    document.getElementById('sec0').style.opacity = 1-percScrolled*4.5



    if (percScrolled > 0.23){
        document.getElementById('sec1text').style.opacity = 1

        if (percScrolled > 0.31){
            document.getElementById('imgIcon').style.opacity = 1
        }
        else{
            document.getElementById('imgIcon').style.opacity = 0

        }

        if (percScrolled > 0.36){
            document.getElementById('pentoolIcon').style.opacity = 1
        }
        else{
            document.getElementById('pentoolIcon').style.opacity = 0

        }

        if (percScrolled > 0.42){
            document.getElementById('layersIcon').style.opacity = 1
        }
        else{
            document.getElementById('layersIcon').style.opacity = 0

        }
    }
    else{
        document.getElementById('sec1text').style.opacity = 0
        }

    if (percScrolled > 0.41){
        let val = (percScrolled - 0.43)*(0-1)/(0.50-0.43)+1
        document.getElementById('sec1').style.opacity = val

        document.getElementById('sec2').style.opacity = (0.5-val)
        console.log(1-val)
    }
}