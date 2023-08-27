const express = require('express')
const path = require('path')
const rootDir = require('../util/path')


const router = express.Router();

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')) //s dve dolni cherti __dirname - will point to the path(folder)we are in, in this case routes folder
    res.sendFile(path.join(rootDir, 'views', 'shop.html')) //s dve dolni cherti __dirname - will point to the path(folder)we are in, in this case routes folder

})

module.exports = router;