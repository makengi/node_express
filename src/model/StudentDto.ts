import {StudentService} from "../service/StudentService";
import {StudentEntity} from "../entity/Student.entity";

export class StudentDto{

    private firstName: string;
    private lastName: string;
    private isActive:boolean;

    static create(firstName:string, lastName:string, isActive:boolean){
        let dto = new StudentDto();
        dto.firstName = firstName;
        dto.lastName = lastName;
        dto.isActive = isActive;
    }

}