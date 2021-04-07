const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');

const mongoose = require('mongoose');
AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
    databases: [mongoose],
    rootPath: '/admin',
    branding:{
        logo: false,
        companyName: 'Obstetrics Data Collection',
        softwareBrothers: false,
        theme: {
            colors: {
                primary100: 'rgba(236, 72, 153)',
                hoverBg: 'rgba(244, 114, 182)'
            }
        }
    },
    locale: {
        language: 'en',
        translations: {
            messages:{
                welcomeOnBoard_title: 'Welcome Admin',
                welcomeOnBoard_subtitleL: 'This is obstetrics data collection data base admin panel',
                loginWelcome: 'To Obstetrics Data Collection database'

            }
        }
    }
})
const ADMIN = {
    email: process.env.ADMIN_EMAIL || 'admin@example.com',
    password: process.env.ADMIN_PASSWORD || '8vpawh75ttrcu2',
}
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
    cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
    cookiePassword: process.env.ADMIN_COOKIE_PASS || 'default-password',
    authenticate: async (email,password) =>{
        if(email === ADMIN.email && password === ADMIN.password){
            return ADMIN;
        }
        return null;
    }
});

module.exports = router;