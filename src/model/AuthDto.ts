import {Auth} from "../entity/Auth";

export class AuthDto{

    private name:string;
    private isActive: boolean;
    private orderIndex;
    private code;

    public toEntity(){
        return Auth.create(this.name,this.isActive,this.orderIndex,this.code);
    }
}