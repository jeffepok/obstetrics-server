
module.exports = {
    login: (req, res, next) =>{
        res.render('index', { title: 'Admin Panel' });
    }
}
