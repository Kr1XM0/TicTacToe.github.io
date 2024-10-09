let botones = document.querySelectorAll('.cajas')
let valor = 'X'
let juegoTerminado = false
function AsignarValor(index){
    if(botones[index].innerHTML == '' && !juegoTerminado ){
        botones[index].innerHTML = valor
        victoria()
        empate()
        cambiarTurno()
    } else {
    } 
}
function victoria(){
    const Ejemplos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    for(let i = 0; i<Ejemplos.length;i++){
        let v0 = botones[Ejemplos[i][0]].innerHTML
        let v1 = botones[Ejemplos[i][1]].innerHTML
        let v2 = botones[Ejemplos[i][2]].innerHTML
    if(v0 != '' && v0 === v1 && v0 === v2){
        juegoTerminado = true
        document.querySelector('#ganador').innerHTML = 'The winner is ' + valor
        document.querySelector('.nuevoJuego').style.opacity = "1" 
        document.querySelector('.nuevoJuego').style.display = 'block'
        for(j=0;j<3;j++){
            botones[Ejemplos[i][j]].style.background = "#CBE857" 
            botones[Ejemplos[i][j]].style.color = "#000"
        }
        cambiarTurno()
        }
    }    
}
function cambiarTurno(){
    if(valor == 'X'){
        valor = 'O'
        document.querySelector(".bg").style.transform = 'translateX(105px)'
    } else {
        valor = 'X'
        document.querySelector(".bg").style.transform = 'translateX(0)'
    }
}
function empate(){
    if(!juegoTerminado){
        let empate = true
        botones.forEach(x =>{
            if(x.innerHTML === "") empate = false
        })
        if(empate){
            juegoTerminado = true
            document.querySelector('#ganador').innerHTML = 'Draw'
            document.querySelector('.nuevoJuego').style.display = 'block'
        }
    }
}
function nuevoJuego(){
    botones.forEach(x => {
        x.innerHTML = ''
        x.style.removeProperty("background")
        x.style.color = 'white'
    }) 
    valor = 'X'
    juegoTerminado = false
    document.querySelector(".bg").style.transform = 'translateX(0)'
    document.querySelector('#ganador').innerHTML = ''
    document.querySelector('.nuevoJuego').style.display = 'none'
}