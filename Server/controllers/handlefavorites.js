let myFavorites = [];

const postFav = (req, res)=>{
    let character = req.body;
    myFavorites.push(character);
    return res.json(character);
}

const deleteFav = (req, res)=>{
    let id = req.params;
    console.log('ANTES', myFavorites);
    myFavorites = myFavorites.filter(char=>char.id === +id) //parseInt(id)
    console.log('DESPUES', myFavorites);

    res.json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}