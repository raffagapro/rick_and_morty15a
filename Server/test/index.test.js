const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS',  ()=>{

    describe('GET /rickandmorty/character/:id',  ()=>{
        it('Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const { body } = await agent.get('/rickandmorty/character/1');
            expect(body).toHaveProperty('id'&&'name'&&'gender'&&'status'&&'origin'&&'image');
        });

        it('Si hay un error responde con status: 500', async ()=>{
            await agent.get('/rickandmorty/character/2536').expect(500);
        });
    });

    describe('GET /rickandmorty/login', ()=>{
        it('Con el login correcto debe retornar access:true', async()=>{
            const { body } = await agent.get('/rickandmorty/login?email=batman@gmail.com&password=robin1234');
            expect(body.access).toBeTruthy();
        })
    })

    describe('POST /rickandmorty/fav', ()=>{
        it('Debe retornar el body como arreglo', async()=>{
            let body = {
                id:25,
                name:"Batman Sanchez",
                gender:"Male",
                species:"BAT",
                origin: "SAD",
                image:"SOME URL",
                status:"ALIVE"
            }
            const res = await agent.post('/rickandmorty/fav').send(body);
            expect(res.body).toEqual(body);
        })
    })


});