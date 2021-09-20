let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')
let sanrio = document.querySelector ('#sanrio')

sanrio.style.backgroundImage = "url('./assets/my-melody.jpeg')"




const settid =() =>{
    let tid = new Date()
   
    if (tid.getSeconds() < 30){
        sanrio.style.backgroundImage = "url('./assets/my-melody.jpeg')"
    }else{
        sanrio.style.backgroundImage = "url('./assets/kuromi.jpeg')"
    }

    sanrio.style.marginLeft = 1.6 * tid.getSeconds() + '%'

 


    let nul = ''
    if (tid.getHours() < 10) nul= '0'
    timer.innerHTML = nul + tid.getHours()

    nul = ''
    if (tid.getMinutes() < 10) nul= '0'
    min.innerHTML = nul + tid.getMinutes()

    nul = ''
    if (tid.getSeconds() < 10) nul= '0'
    sek.innerHTML = nul + tid.getSeconds()

}

setInterval(settid, 1000)