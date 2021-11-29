import {UserRepository} from "../../dist/repository/UserRepository";
import {Service} from "typedi"
import {InjectRepository} from "typeorm-typedi-extensions";
import {StudentEntity} from "../entity/Student.entity";
import {StudentDto} from "../model/StudentDto";

@Service()
export class StudentService{

    constructor(
        @InjectRepository() private studentRepository: UserRepository
    ) {}

    async findAll():Promise<StudentEntity[]> {
        return await this.studentRepository.findAllStudents();
    }

    async save(student:StudentDto):Promise<StudentEntity>{
        return await this.studentRepository.saveStudent(student.toEntity());
    }


    async search(id:number): Promise<StudentEntity>{
        return await this.studentRepository.findById(id);
    }
}