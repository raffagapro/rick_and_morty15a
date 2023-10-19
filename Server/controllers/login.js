const { User } = require('../src/DB_connection');

const login = async (req, res) =>{

    let { password, email } = req.query;

    try {
        if (email && password) {
            const foundUser = await User.findOne({
                where: { email }
            });
            if (!foundUser) return res.status(404).json({message:'Usuario no encontrado'});
            if (foundUser.password !== password) return res.status(403).json({message:'Contraseña incorrecta'});
            return res.status(200).json ({access: true});
        }
        return res.status(400).json({message:'Faltan datos'});
    } catch (error) {
        return res.status(500).json({message:error});
    }
}

module.exports = login;




// const users = require('../utils/users');


// const login = (req, res)=>{
//     let { email, password } = req.query;

//     let foundUser = users.find(user=> user.email === email);

//     if (foundUser) {
//         if (foundUser.password === password) return res.send({access:true});
//         else return res.send({access:false});
//     }
//     else return res.send({access:false});
// }

// module.exports = login