import {EntityRepository, Repository} from "typeorm";
import {Auth} from "../entity/Auth";

@EntityRepository(Auth)
export class AuthRepository extends Repository<Auth>{

    async saveAuthEntity(auth:Auth){
        return this.save(auth);
    }
    async saveAuthEntityUsingManager(auth:Auth){
        return this.manager.save(auth);
    }

    async createAuths(authsArrays:Array<Auth>){
        const auths = this.create(authsArrays);
        return this.save(auths);
    }



}