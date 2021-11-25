const applica = require('./app.js')
let map = require('lodash/map')

//console.log(map([1,2,3], (n) => { return n*3; }))

let app = applica.App.start(8080)

app.on('root', (response) => {

    response.write('Je suis a la racine')
    
})



/*const EventEmitter = require('events')

let monEcouteur = new EventEmitter()

monEcouteur.on('saute',(a,b)=>{
    console.log('je saute avec',a ,b)
})


monEcouteur.emit('saute',3,4)*/