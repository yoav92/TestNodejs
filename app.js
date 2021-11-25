const EventEmitter = require('events')

const http = require('http')

exports.App = {
    start:(port)=>{
        let emitter = new EventEmitter()

        let server = http.createServer((request, response)=>{
            
            response.writeHead(200)

            if(request.url === '/') {
                

                emitter.emit('root',response)
            }

            response.end()

        }).listen(port)

        return emitter;
    }
}

