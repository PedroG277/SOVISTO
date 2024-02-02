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

}