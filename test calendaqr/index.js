
let api_key = 'PQfbUsBdhN1myEfLa6CWzwL9Z1s9Tc3g'

fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + api_key + '&limit=26&rating=pg-13')
    .then( Response => Response.json() )
    .then( json => {
        json.data.map(image => insertImage(image.images.fixed_width.url))
    })
    
    
    
    
    const insertImage = (url) => {
        let img = document.createElement('img')
        img.src = url
        document.querySelector('.container').append(img)
    }