//model
let model = ''
//view
let htmlWords
//other html elements
let saveButton

console.log('scriptet loaded', db)
function setup(){
    htmlWords = select('#words')
    //opret refferencer til andre html elementer
    saveButton = select('#save-button')
    noCanvas()
    //controller
    db.collection('my-diary').doc('diary')
            .onSnapshot( doc =>{
                console.log('modtog data: ', doc.id)
                console.log('og data er: ', doc.data())
                //opdater model
                model = doc.data()
                //opdater view
                htmlWords.html(model.words)
                htmlWords.input(() => {
                    model.words = htmlWords.html()
                })
            })
    //update database with model
    saveButton.mouseClicked(() => {
        db.collection('my-diary').doc('diary').update(model)
      })
}

