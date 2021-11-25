var EventEmitter = require('events');
var monEvent = new EventEmitter();

//create an event handler
//La forme la plus classique ci dessous
/*var myEventHandler=()=>{
    console.log('I hear a scream!');
}*/

//Assign the event handler to an event
monEvent.on('scream',()=>{
    console.log('I hear a scream!');
});

//Fire the 'scream' event
monEvent.emit('scream');