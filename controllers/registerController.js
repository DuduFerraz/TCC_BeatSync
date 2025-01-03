const bcrypt = require('bcrypt');
const User = require('../models/userModel'); // Certifique-se de que o model está correto

const registerController = {
    registerUser: async (req, res) => {
        const { nome, email, senha } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(senha, 10); // Criptografa a senha
            await User.create({ nome, email, senha: hashedPassword });

            res.status(201).json({ message: 'Usuário registrado com sucesso!' });
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            res.status(500).json({ error: 'Erro no servidor' });
        }
    }
};

module.exports = registerController;
