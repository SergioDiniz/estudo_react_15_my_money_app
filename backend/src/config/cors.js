module.exports = function(req, res, next){

    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, PATH')
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin, Accept')

    next()
}