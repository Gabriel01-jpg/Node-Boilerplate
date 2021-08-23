exports.middlewareGlobal = (req, res, next) => {
    res.locals.globalVariable =  'Este é o valor da variável local';
    next();
};

exports.outroMiddlaware = (req, res, next) => {
    next();
}

exports.checkcsurfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.send('Error de envio de formulário');
    }
}