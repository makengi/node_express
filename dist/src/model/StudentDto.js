import { StudentEntity } from "../entity/Student.entity";
export class StudentDto {
    static create(firstName, lastName, isActive) {
        let dto = new StudentDto();
        dto.firstName = firstName;
        dto.lastName = lastName;
        dto.isActive = isActive;
    }
    toEntity() {
        return StudentEntity.create(this.firstName, this.lastName, this.isActive);
    }
}
//# sourceMappingURL=StudentDto.js.map