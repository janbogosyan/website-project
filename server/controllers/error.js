

exports.errorController = ((req, res, next) => {
    res.status(404).render('error-page',{addProductTitle:'Page Not Found',path:'/'})  //tuka lipsvashe da mu zadam path, zatova davashe path its not find
})