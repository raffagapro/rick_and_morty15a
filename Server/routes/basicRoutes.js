const express = require('express');
const routerRyM = express.Router();
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

routerRyM.get("/character/:id", getCharById);
  
routerRyM.get("/login", login);

routerRyM.post("/login", postUser);
  
routerRyM.post("/fav", postFav);

routerRyM.delete("/fav/:id", deleteFav);


module.exports = routerRyM;