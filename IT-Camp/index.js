let main = document.querySelector('main')
let input = document.querySelector('#input')


const addCard = words =>{
let newCard = document.createElement('div')
newCard.classList.add('card')

let newH = document.createElement('h2')
newH.innerHTML = words
newCard.append(newH)
main.append(newCard)
}

addCard('måske')

let words = ['hej', 'idk', 'ja', 'nej', 'okay']

words.push('tja')


words.map( words => addCard(words) )

input.addEventListener('input', () => {
    let results= words.filter( words => words.toLowerCase().includes(input.value.toLowerCase()))
    main.innerHTML = ' '
    results.map(words => addCard(words))
})

for(let i =0; i<20; i++){
    let card = document.createElement('div')
    card.classList.add('card')
    card.style.animation = 'anim'
    card.style.animationDelay = i/40 + 's'
    card.style.animationDuration = '.3s'
    document.querySelector('main').append(card)

}


//her er et loop
for(let i = 0; i < words.length; i++){
    console.log (words[i])
}