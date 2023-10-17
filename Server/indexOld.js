//MVC

//MODEL (ESTRUCTURA DE DATOS).... BASE DE DATOS


//VIEWER (REACT) como mostrar data... FRONT


//CONTROLLER (LOGIC) como procesar data.... BACK
const http = require('http');
const data = require('./utils/data');
const getCharById = require('./controllers/getCharById');

const server = http.createServer((req, res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');

        if (req.url.includes('/rickandmorty/character')) {
            const id = parseInt(req.url.split('/').pop()) //"25" => 25
            getCharById(id, res);
        }

    }
);


server.listen(3001, ()=> console.log('Listening on port 3001'));
