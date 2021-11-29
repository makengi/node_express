import {EntityRepository, Repository} from "typeorm";
import {StudentEntity} from "../entity/Student.entity";

@EntityRepository(StudentEntity)
export class UserRepository extends Repository<StudentEntity>{

    findByName(firstName: string, lastName:string){
        return this.createQueryBuilder("student")
            .where("student.firstName=:firstName",{firstName})
            .andWhere("student.lastName=:lastName",{lastName})
            .getMany();
    }

    findAllStudents(){
        return this.find();
    }

    findById(id:number){
        return this.createQueryBuilder("student")
            .where("student.id=:id",{id})
            .getOne();
    }
}