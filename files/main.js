var header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>250) {
        header.style.backgroundColor = '#170312'
    }
})