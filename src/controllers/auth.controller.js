const authService = require('../services/auth.service');

exports.register = async (req, res) => {

    try {

        const { email, password } = req.body; //obtenemos el body de la peticion desestructurandolo
        const user = await authService.register(email, password);
        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({ error: 'Registration error' });

    }

};

exports.login = async (req, res) => {

    try {

        const {email, password} = req.body;
        const token = await authService.authenticate(email, password);
        if (token) {
        
        res.status(200).json ({token})
    } else{
        res.status(401).json({error:'Authentication Error'});
    }

    } catch {

        res.status(500).json({error: 'Registration error'});
    }




};