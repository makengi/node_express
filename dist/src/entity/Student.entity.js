var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var StudentEntity_1;
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from "../../dist/entity/BaseTimeEntity";
let StudentEntity = StudentEntity_1 = class StudentEntity extends BaseTimeEntity {
    constructor() {
        super();
    }
    static create(firstName, lastName, isActive) {
        const student = new StudentEntity_1();
        student.firstName = firstName;
        student.lastName = lastName;
        student.isActive = isActive;
        return student;
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], StudentEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], StudentEntity.prototype, "firstName", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], StudentEntity.prototype, "lastName", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], StudentEntity.prototype, "isActive", void 0);
StudentEntity = StudentEntity_1 = __decorate([
    Entity(),
    __metadata("design:paramtypes", [])
], StudentEntity);
export { StudentEntity };
//# sourceMappingURL=Student.entity.js.map