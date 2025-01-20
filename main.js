
let element = document.getElementById('lampadina')
let btn = document.getElementById('btnLampadina')

btn.addEventListener('click', function(){
    console.log( element )
    element.src = "./imgs/yellow_lamp.png"
})