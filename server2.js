

const express = require('express')

const server2 = express();


server2.listen(3002)



server2.get('/', (req, res)=>{


res.sendFile('/html/principal.html', {root:__dirname});



})



server2.get('/servicos', (req, res)=>{


    res.sendFile('/html/servicos.html', {root:__dirname});
    
    
    
    })

    

server2.get('/contato', (req, res)=>{


    res.sendFile('/html/contato.html', {root:__dirname});
    
    
    
    })

    
server2.get('/acerca_de', (req, res)=>{


    res.redirect('/contato');
    
    
    
    })


server2.use((req, res)=>{


    res.status(404).sendFile('/html/404.html', {root:__dirname});
    
    
    
    
    })