
let person = {
    name: 'Rick Sanchez',
    status: '<span class= "alive">alive</span>',
    age: 70,
    from: 'c-137',
    species: 'human(cyborg)',
    firstSeen: 'pilot episode',
    favoriteColor: 'lightpink',
    "image":"https://rickandmortyapi.com/api/character/avatar/253.jpeg"
}

console.log (' this persons name is ' + person.name)
console.log (' this person is ' + person.status)
console.log (' this persons age is ' + person.age)
console.log (' this person is from ' + person.from)
console.log (' this person is a ' + person.species)
console.log (' this person is first seen ' + person.firstSeen)

let people = [person, {
    name: 'Bird Person',
    status: 'unknown (persumed dead)',
    age: '40 aprox',
    from: 'planet squanch',
    species: 'bird person',
    firstSeen: 'ricksy business',
    favoriteColor: 'lightpink'
},{
    name: 'morty smith',
    status: '<span class= "alive">alive</span>',
    age: 15,
    from: 'c-137',
    species: 'human',
    firstSeen: 'pilot episode',
    favoriteColor: 'lightpink'
},{
    name: 'Mr. Poopybutthole',
    status: '<span class= "alive">alive</span>',
    age: 'unknown',
    from: 'unknown',
    species: 'Mr. poopybutthole species',
    firstSeen: 'total rickcall',
    favoriteColor: 'lightpink'
},{
    name: 'beth smith',
    status: '<span class= "alive">alive</span>',
    age: 34,
    from: 'c-137',
    species: 'human (possible clone)',
    firstSeen: 'rick potion no 9',
    favoriteColor: 'lightpink'
},{
    name: 'jerry smith',
    status: '<span class= "alive">alive</span>',
    age: 35,
    from: 'c-137',
    species: 'human',
    firstSeen: 'rick potion no 9',
    favoriteColor: 'lightpink'
},{
    name: 'summer smith',
    status: '<span class= "alive">alive</span>',
    age: 18,
    from: 'c-137',
    species: 'human',
    firstSeen: 'rick potion no 9',
    favoriteColor: 'lightpink'
},{
    name: 'tammy guterman',
    status: '<span class= "dead">dead</span>',
    age: 17,
    from: 'c-137',
    species: 'human',
    firstSeen: 'meeseeks and destroy',
    favoriteColor: 'lightpink'
},{
    name: 'frank palicky',
    status: '<span class= "dead">dead</span>',
    age: 16,
    from: 'c-137',
    species: 'human',
    firstSeen: 'pilot episode',
    favoriteColor: 'lightpink'
},{
    name: 'planetina',
    status: '<span class= "alive">alive</span>',
    age: 'ageless',
    from: '4 rings',
    species: 'superhero',
    firstSeen: 'a rickconvenient mort',
    favoriteColor: 'lightpink'
}

]

console.log(' person 2s name is ' +people[1].name)

people.map( person => {
    let nc = document.createElement('div')
    nc.classList.add('card')
    nc.style.backgroundColor = person.favoriteColor
    nc.innerHTML = '<h2>' + person.name + '</h2>'
    nc.innerHTML += '<li>status: ' + person.status + '</li>'
    nc.innerHTML += '<li>age: ' + person.age + '</li>'
    nc.innerHTML += '<li>from: ' + person.from + '</li>'
    nc.innerHTML += '<li>species: '+ person.species + '</li>'
    nc.innerHTML += '<li>firstSeen: ' + person.firstSeen + '</li>'
    document.querySelector('main').append(nc)
})
