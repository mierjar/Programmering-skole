
let person = {
    id: '12345',
    name: 'simon',
    age: 46,
    hobbies: ['guitar', ' code', ' soccer'],
    favoriteColor: 'hotpink'
}

console.log (' this persons name is ' + person.name)
console.log (' this persons id is ' + person.id)
console.log (' this persons age is ' + person.age)
console.log (' this persons first hobby is ' + person.hobbies[0])

let people = [person, {
    id: '12245',
    name: 'sofus',
    age: 18,
    hobbies: ['dancing', ' code', ' shoes'],
    favoriteColor: 'green'
},{
    id: '12334',
    name: 'marius',
    age: 17,
    hobbies: ['cubing', ' code', ' soccer'],
    favoriteColor: 'blue'
},{
    id: '11111',
    name: 'bjarke',
    age: 18,
    hobbies: ['siri', ' code', ' sport'],
    favoriteColor: 'purple'
},{
    id: '11235',
    name: 'viktor',
    age: 18,
    hobbies: [' theis', ' code', ' soccer'],
    favoriteColor: 'darkblue'
},{
    id: '8410',
    name: 'theis',
    age: 12,
    hobbies: ['glasses', ' code', ' small'],
    favoriteColor: 'grey'
}

]

console.log(' person 2s name is ' +people[1].name)

people.map( person => {
    let nc = document.createElement('div')
    nc.classList.add('card')
    nc.style.backgroundColor = person.favoriteColor
    nc.innerHTML = '<h2>' + person.name + '</h2>'
    nc.innerHTML += '<li>age: ' + person.age + '</li>'
    nc.innerHTML += '<li>hobbies: ' + person.hobbies + '</li>'
    nc.innerHTML += '<li>id: '+ person.id + '</li>'
    document.querySelector('main').append(nc)
})