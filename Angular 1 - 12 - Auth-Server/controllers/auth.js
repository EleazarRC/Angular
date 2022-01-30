const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async(req, res = response) =>{    
   
    const { email, password, name } = req.body;  

    try {
        // Verificar el email
        const usuario = await Usuario.findOne({ email })
        if( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            });
        }
        // Crear usuario modelo
        const dbUser = new Usuario( req.body );
        
        // Hashear la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // Generar el JWT
        const token = await generarJWT(dbUser.id, name)


        // Crear usuario de base de datos
        await dbUser.save();
        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            id: dbUser.id,
            name,
            email,
            token
        });
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const loginUsuario = async(req, res) =>{
   
    const { email, password } = req.body;

    try {

        const dbUser = await Usuario.findOne({ email });

        if( !dbUser ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            })
        }
        
        // Confirmar si el password hace match
        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es correcta'
            })
        }

        // Generar el JWT
        const token = await generarJWT(dbUser.id, dbUser.name)

        return  res.json({
            ok: true,
            id: dbUser.id,
            name: dbUser.name,
            email,
            token
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const revalidarToken =  async(req, res) =>{

    const { id } = req;

    const dbUser = await Usuario.findById(id);


    const token = await generarJWT(id, dbUser.name)

    return res.json({
        ok: true,
        id,
        name: dbUser.name,
        email: dbUser.email,
        token
    });
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}