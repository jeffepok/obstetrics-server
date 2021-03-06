const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users');
const pregnantWoman = require('./routes/pregnantWoman');
const adminRouter = require('./routes/adminPanel');
const adminLogin = require('./routes/adminLogin');
const app = express();
app.use(cors());
app.use('/admin', adminRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', adminLogin);
app.use('/users', usersRouter);
app.use('/api/user', authRouter);
app.use('/api/pregnantwoman', pregnantWoman);


module.exports = app;
