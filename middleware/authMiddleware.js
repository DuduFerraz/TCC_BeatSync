function checkAuth(req, res, next) {
    // Verifica se há um usuário na sessão
    if (!req.session.user) {
        // Se não houver, redireciona para a página de login
        return res.redirect('/login');
    }
    // Se o usuário estiver autenticado, permite a continuação do fluxo
    next();
}

module.exports = checkAuth;
