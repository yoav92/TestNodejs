let app = require('express')()

app.get('/', (req,res) => {

    res.send('Salut je suis a la racine')

})

app.get('/demo',(req,res)=>{

    res.send('salut tu es sur la demo')
})

app.listen(8080)