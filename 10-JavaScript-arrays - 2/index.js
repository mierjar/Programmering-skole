
let bingeliste = [
'./assets/film/film/1.png',
'./assets/film/film/2.png',
'./assets/film/film/3.png',
'./assets/film/film/4.png',
'./assets/film/film/5.png',
'./assets/film/film/6.png',
'./assets/film/film/7.png',
'./assets/film/film/8.png'
]

bingeliste.map((movie, index)=>{
    let newImage = document.createElement('img')
    newImage.src = movie
    document.querySelector('#bingeliste').append(newImage)
})