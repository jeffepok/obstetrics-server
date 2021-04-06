const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const mongoose = require('mongoose');

const express = require('express');
const app = express();

AdminBro.registerAdapter(AdminBroMongoose);

const run = async () => {
    const mongooseDb = await mongoose.connect('mongodb://localhost:27017/obstetricsDB', { useNewUrlParser: true, useUnifiedTopology: true })
    const AdminBroOptions = {
        databases: [mongooseDb],
    }
    const adminBro = new AdminBro(AdminBroOptions);
    const router = AdminBroExpress.buildRouter(adminBro);
    await app.use(adminBro.options.rootPath, router)
}

run().then(r => app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin')));




