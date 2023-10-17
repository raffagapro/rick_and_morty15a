const express = require('express');
const routerRyM = express.Router();
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handlefavorites');

routerRyM.get("/character/:id", getCharById);
  
routerRyM.get("/login", login);
  
routerRyM.post("/fav", postFav);

routerRyM.delete("/fav/:id", deleteFav);


module.exports = routerRyM;