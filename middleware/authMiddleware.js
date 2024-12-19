const db = require('../config/db');

module.exports = (req, res, next) => {
    // Verifique se a sessão contém o ID do usuário
    if (!req.session.userId) {
        // Se não estiver autenticado, redireciona para a página de login
        req.flash('error_msg', 'Você precisa estar logado para acessar essa página.');
        return res.redirect('/login');
    }

    const userId = req.session.userId;

    db.execute('SELECT nome, email, data_nasc FROM usuarios WHERE id = ?', [userId], (err, results) => {
        if (err) {
            console.error('Erro ao buscar os dados', err);
            return res.redirect('/login');
        }

        if (results.length > 0) {
            const user = results[0];
            req.session.userNome = user.nome;
            req.session.userEmail = user.email;
            req.session.userData_nasc = user.data_nasc

            next();
        }

        else {
            req.flash('erros_msg', 'Usuário não encontrado');
            return res.redirect('/login');
        };
    });
};

