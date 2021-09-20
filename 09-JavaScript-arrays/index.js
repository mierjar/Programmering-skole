let main = document.querySelector('main')
let input = document.querySelector('#input')


const addCard = name =>{
let newCard = document.createElement('div')
newCard.classList.add('card')

let newH = document.createElement('h1')
newH.innerHTML = name
newCard.append(newH)
main.append(newCard)
}

addCard('daddy')

//vi vil gerne lave et array med tekst vaiabler
let names = ['mie', 'theis', 'andreas', 'bjørn', 'bjarke', 'sofus', 'marius', 'viktor', 'nagib', 'emil', 'simon', 'frederik']

names.push('mommy')


names.map( name => addCard(name) )

input.addEventListener('input', () => {
    let results= names.filter( name => name.toLowerCase().includes(input.value.toLowerCase()))
    main.innerHTML = ' '
    results.map(name => addCard(name))
})


//her er et loop
//for(let i = 0; i < names.length; i++){
//    console.log (names[i])
//}