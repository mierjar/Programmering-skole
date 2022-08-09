
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then( Response => Response.json() )
    .then( json => {
     
    })




    const insertImage = (url) => {
        let img = document.createElement('img')
        img.src = url
        document.querySelector('body').append(img)
    }