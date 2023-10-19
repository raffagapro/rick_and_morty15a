const { Favorite } = require('../src/DB_connection');

const deleteFav = async (req, res) =>{

    let { id } = req.params;
    console.log('MI SUPER ID', id);

    try {
        if (id) {
            await Favorite.destroy({
                where: { id }
            });
            const favs = await Favorite.findAll(); 
            //cuando tengan muchos usuarios tiene que relacion el favorito a un usuario
            //User.addFavorite(favs)
            return res.status(201).json (favs);
        }
        return res.status(401).json({message:'Faltan datos'});
    } catch (error) {
        return res.status(500).json({message:error});
    }
}

module.exports = deleteFav;