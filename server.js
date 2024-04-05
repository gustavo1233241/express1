const express = require('express')

const server = express();


server.get('/', (req,res) =>{

res.send('<h1>hello boys and girls, Ola ExpressJS</h1>');




})
server.get('sobre', (req,res) =>{

    res.send('<h2>Somos quem podemos ser</h2>');

    
    })
    
    server.get('json', (req,res) =>{

        res.send({'mome':'hemilly'});
    
        
        })
       
         server.use((req,res)=>{



//res.send('Erro meu')

res.status(404).send('Erro meu')

         });   
            


server.listen(3001);