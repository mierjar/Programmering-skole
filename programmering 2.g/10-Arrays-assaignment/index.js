let main = document.querySelector('main')
let input = document.querySelector('#input')


const addCard = episode =>{
let newCard = document.createElement('div')
newCard.classList.add('card')

let newH = document.createElement('h1')
newH.innerHTML = episode
newCard.append(newH)
main.append(newCard)
}

addCard('episode')

 let episode = ['episode 1 pilotepisode', 'episode 2 lawnmower dog', 'episode 3 anatomy park','episode 4 M. Night shaym-aliens!', 'episode 5 meeseeks and destroy', 'episode 6 rick potion #9', 'episode 7 raising gazorpazorp', 'episode 8 rixty minutes', 'episode 9 something ricked this way comes', 'episode 10 close rick-counters of the rick kind', 'episode 11 ricksy business' ]

 episode.push('rick and morty')
episode.map (episode=> addCard(episode))

input.addEventListener('input', ()=>{
    let results = episode.filter( episode => episode.toLowerCase().includes(input.value.toLowerCase()))
    main.innerHTML = ''
    results.map(episode => addCard(episode))
})
for(let i = 0; i< episode.length;i++){
    console.log (episode[i])
}