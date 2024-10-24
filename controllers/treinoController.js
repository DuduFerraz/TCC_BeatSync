const User = require('../models/treinoModel');

const ExercicioController = {
    userExercicio: (req, res) => {
        const newTreino = {
            tipo: req.body.tipo,
        };

        User.treino(newTreino, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/users/playlist'); 
        });
    }, 
    renderExercicio: (req, res) => {
        res.render('users/exercicio');
    },

};

module.exports = ExercicioController;