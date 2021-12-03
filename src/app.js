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
import {
  createConnection,
  getConnection,
  getCustomRepository,
  useContainer,
  getRepository,
  getConnectionManager
} from 'typeorm';
import {StudentEntity} from "../dist/entity/Student.entity";
import {Auth} from "../dist/entity/Auth";
import {AuthRepository} from "../dist/repository/AuthRepository";
import {UserRepository} from "../dist/repository/UserRepository";
import {InitAuth} from "../dist/db/InitAuth";



Container.set('userController',UserController);
Container.set('studentService',StudentService);


useContainer(Container);


createConnection({
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "1212",
  "database": "pg_node",
  "synchronize": true,
  "logging": true,
  "entities": [
    StudentEntity,Auth
  ]
}).then((con)=>{
  const initAuth = new InitAuth();
  initAuth.start();
  // const connection = getConnection();
  // const authRepository = connection.getCustomRepository(AuthRepository);
  // const auth = authRepository.createAuths(new InitAuth().start())

}).catch((error)=>console.log(error));

const app = express();

useExpressServer(app,{
  controllers:[UserController]
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
