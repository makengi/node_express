var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Auth_1;
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BaseTimeEntity } from "../entity/BaseTimeEntity";
import { StudentEntity } from "./Student.entity";
let Auth = Auth_1 = class Auth extends BaseTimeEntity {
    constructor() {
        super();
    }
    static create(name, isActive, orderIndex, code) {
        const auth = new Auth_1();
        auth.name = name;
        auth.isActive = isActive;
        auth.orderIndex = orderIndex;
        auth.code = code;
        return auth;
    }
};
__decorate([
    PrimaryGeneratedColumn({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Auth.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Auth.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], Auth.prototype, "isActive", void 0);
__decorate([
    OneToMany((type) => StudentEntity, (student) => student.auth),
    __metadata("design:type", Array)
], Auth.prototype, "students", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Auth.prototype, "orderIndex", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Auth.prototype, "code", void 0);
Auth = Auth_1 = __decorate([
    Entity(),
    __metadata("design:paramtypes", [])
], Auth);
export { Auth };
//# sourceMappingURL=Auth.js.map