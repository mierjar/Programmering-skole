//model - lokal kopi af databasen
let model = {}
//view - den visning vi har valgt at lave af data  / vores app
let htmlWords
//other html elements 
let saveButton

function setup(){
    //opret reference til html view
    htmlWords = select('#words')

    //opret reference til andre html elementer 
    saveButton = select('#saveButton')
    //vi vil ikke have noget p5 canvasCanvas()
    //controller
    db.collection('collection name').doc('doc-name')
        .onSnapshot( doc => {
            console.log('Modtog data: ', doc.id)
            console.log('Og data er: ', doc.data())
            //opdater model
            model = doc.data()
            //opdater view
            htmlWords.html(model.words)
            htmlWords.elt.scrollTop = htmlWords.elt.scrollHeight
            //når der kommer input fra slutbrugeren, opdateres MODELLEN+0   
            htmlWords.input(()=>{
                //console.log(htmlWords.html())
                model.words = htmlWords.html()
            })
        })
    //update database with model
    saveButton.mousePressed(()=>{
        console.log('updating with model: ', model)
        db.collection('my-diary').doc('diary').update(model)
    })
    
}

function draw(){
    //console.log(htmlWords.elt.scrollTop, htmlWords.elt.scrollHeight)
}