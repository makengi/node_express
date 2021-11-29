var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { EntityRepository, Repository } from "typeorm";
import { StudentEntity } from "../entity/Student.entity";
let UserRepository = class UserRepository extends Repository {
    findByName(firstName, lastName) {
        return this.createQueryBuilder("student")
            .where("student.firstName=:firstName", { firstName })
            .andWhere("student.lastName=:lastName", { lastName })
            .getMany();
    }
    findAllStudents() {
        return this.find();
    }
    findById(id) {
        return this.createQueryBuilder("student")
            .where("student.id=:id", { id })
            .getOne();
    }
};
UserRepository = __decorate([
    EntityRepository(StudentEntity)
], UserRepository);
export { UserRepository };
//# sourceMappingURL=UserRepository.js.map