import { Auth } from "../entity/Auth";
export class AuthDto {
    toEntity() {
        return Auth.create(this.name, this.isActive, this.orderIndex, this.code);
    }
}
//# sourceMappingURL=AuthDto.js.map