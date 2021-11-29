import {UserRepository} from "../../dist/repository/UserRepository";
import {Service} from "typedi"
import {InjectRepository} from "typeorm-typedi-extensions";
import {StudentEntity} from "../entity/Student.entity";

@Service()
export class StudentService{

    constructor(
        @InjectRepository() private studentRepository: UserRepository
    ) {}

    async findAll():Promise<StudentEntity[]> {
        return await this.studentRepository.findAllStudents();
    }

    async search(id:number): Promise<StudentEntity>{
        console.log('service layer')
        console.log(`respository: ${this.studentRepository}`);
        const result = await this.studentRepository.findById(id);
        console.log(result);
        return result;
    }
}