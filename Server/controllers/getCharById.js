const axios = require('axios');
const data = require('../utils/data');

const URL = 'https://rickandmortyapi.com/api/character';

const getCharById = async (req, res)=>{
    try {
        
        let { id } = req.params;
        const response = await axios.get(`${URL}/${id}`);
        let {name, gender, species, origin, image, status } = response.data
        if (name) {
            let char = {
                id,
                name,
                gender,
                species,
                origin: origin.name,
                image,
                status
            }
            return res.send(char);
        }else return res.status(404).send({message:'Not Found!'});

    } catch (err) {
        console.log(err.message);
        res.status(500).send({message:err.message});
    }


    // axios.get(`${URL}/${id}`)
    // .then(response =>{
    //     let {name, gender, species, origin, image, status } = response.data
    //     if (name) {
    //         let char = {
    //             id,
    //             name,
    //             gender,
    //             species,
    //             origin: origin.name,
    //             image,
    //             status
    //         }
    //         return res.send(char);
    //     }else return res.status(404).send({message:'Not Found!'});
    // })
    // .catch(err=>{
    //     console.log(err.message);
    //     res.status(500).send({message:err.message});
    // });
}

module.exports = getCharById