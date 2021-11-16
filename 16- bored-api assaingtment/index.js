let activity

const getActivity = () => {
    fetch('https://www.boredapi.com/api/activity?type='+ document.querySelector('#pet-select').value + '&participants='+ document.querySelector('#pet-select2').value)
        .then( Response => Response.json() )
        .then (json => createCard(json) )
    
}

const createCard = a => {
    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#participants').innerHTML = a.participants
    document.querySelector('#acc').innerHTML = a.accessibility
    document.querySelector('#price').innerHTML = a.price
    document.querySelector('#cat').innerHTML = a.type
}

getActivity()

document.querySelector('#fetch').addEventListener('click', getActivity)