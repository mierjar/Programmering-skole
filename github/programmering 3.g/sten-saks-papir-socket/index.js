//opret server med express
const express = require('express')
const app = express()
const port = 4444
app.use('/', express.static('public'))
const server = app.listen(port, ()=>{
    console.log('server lytter til adressen: http://localhost:' + port)
})



//opret en socket
const io = require('socket.io')
const serverSocket = io(server)


let players = []

    let numPlayers = 0
    let numNames = 0
    let numChoice = 0

//alt snak med klienterne sker på connection
serverSocket.on('connection', socket =>{
    console.log('ny player, id: ' + socket.id)
    numplayers++
    //er der plads til flere spillere?
    if(numPlayers <= 2){
        //hvis ja, så lægger vi spilleren til i arrayet
        players[socket.id] = {}
        //og sender en besked om at de er inde og med
        socket.emit('welcome', true)
    }else{
        //ellers sender vi en afvisning
        socket.emit('welcome', false)
        //og disconnecter denne socket.
        socket.disconnect()
    }
}
    //okay der kommer en ny spiller
    console.log('der er en ny spiller som prøver at komme ind, men der er allerde 2')
    //vi putter spillerens id ind i players arrayet
    players.push( {'id': socket.id} )
    console.log(players.length)
    //såehhhh er der plads til flere spillere???
    if(players.length > 2){
        socket.emit('join', false)
        socket.disconnect()
    }else{
        socket.emit('join', true)
    }
})