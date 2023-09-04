

exports.errorController = ((req, res, next) => {
    res.status(404).render('error-page',{addProductTitle:'Page Not Found'})
})