// middleware/authMiddleware.js

module.exports = (req, res, next) => {
    // Verifique se a sessão contém o ID do usuário
    if (!req.session.userId) {
        // Se não estiver autenticado, redireciona para a página de login
        req.flash('error_msg', 'Você precisa estar logado para acessar essa página.');
        return res.redirect('/login');
    }
    
    // Se estiver autenticado, passa para a próxima função
    next();
};
