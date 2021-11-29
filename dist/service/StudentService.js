var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import { UserRepository } from "../../dist/repository/UserRepository";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.studentRepository.findAllStudents();
        });
    }
    search(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('service layer');
            console.log(`respository: ${this.studentRepository}`);
            const result = yield this.studentRepository.findById(id);
            console.log(result);
            return result;
        });
    }
};
StudentService = __decorate([
    Service(),
    __param(0, InjectRepository()),
    __metadata("design:paramtypes", [typeof (_a = typeof UserRepository !== "undefined" && UserRepository) === "function" ? _a : Object])
], StudentService);
export { StudentService };
//# sourceMappingURL=StudentService.js.map