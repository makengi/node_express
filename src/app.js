import {Container} from "typedi";
import "reflect-metadata";

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');

import {useExpressServer} from "routing-controllers";
import {UserController} from "../dist/controller/UserController";
import {StudentService} from "../dist/service/StudentService";
import {createConnection,useContainer} from 'typeorm';

Container.set('userController',UserController);
Container.set('studentService',StudentService);

useContainer(Container);

createConnection().catch((error)=>console.log(error));


const app = express();
useExpressServer(app,{
  controllers:[UserController]
});


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
