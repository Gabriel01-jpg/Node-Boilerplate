

exports.homePage = (req, res) => {
    res.render('index', {
        titulo: 'Título da página',
        numeros: [1, 5, 6, 9, 10, 11]
    });
    return
};


exports.trataPost = (req, res) => {
    res.send(`Sua nova rota de post`);
    return
};
