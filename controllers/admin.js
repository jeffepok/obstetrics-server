
module.exports = {
    login: (req, res, next) =>{
        res.render('login', { title: 'Admin Panel' });
    }
}
