const express = require('express');
const router = express.Router();


import {getRepository,getCustomRepository,getConnection} from "typeorm";
import {StudentEntity} from "../../dist/entity/Student.entity";
import {UserRepository} from "../../dist/repository/UserRepository";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get("/findAll",async (req, res) => {

  const connection = getConnection();
  console.log(connection);
  const studentRepository = connection.getCustomRepository(UserRepository);
  const student = studentRepository.create({
    firstName: "Alex",
    lastName: "Brooks",
    isActive:false
  });

  await studentRepository.save(student).catch((err) => {
    console.log("Error: ", err);
  });

  const studentFromTable = await studentRepository.findById(1);
  console.log(studentFromTable)


  res.send('respond with a repository!');
})


module.exports = router;
