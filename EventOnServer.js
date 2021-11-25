let http= require('http')
var fs = require('fs');
let server = http.createServer()
var url = require('url')

//quand j'envoie une requete sur le serveur, il affiche le console.log
//le call back est sous la forme de (err,data)
//request va permettre de jouer avec l'url
server.on('request',(request, response)=>{
    
    let q = url.parse(request.url,true);
    let query = q.query;
    let name = query.nom===undefined ? 'anonyme' : query.nom
    /*if(data.nom === undefined){
        response.write('Bonjour l\'anonyme')
    }
    else {
    response.write('Bonjour ' + data.nom)}

    response.end();*/
    fs.readFile('summer.html','utf8',(err,data)=>{
        if(err) {
            response.writeHead(404);
            response.end("Ce fichier n'existe pas");
        }else{

        response.writeHead(200,{'Content-type':'text/html; charset:utf-8'});

        response.write(data.replace('{{ name }}', name));

        response.end();

        }
})

})

server.listen(8080);