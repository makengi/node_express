
import {AuthRepository} from "../../dist/repository/AuthRepository";
import {Auth} from "../entity/Auth";
import {getConnection, getCustomRepository, getRepository} from "typeorm";
import {Container} from "typedi";


export class InitAuth{

    private auths: Array<Auth>;
     start(){

         const connection = getConnection();
         const authRepository = connection.getCustomRepository(AuthRepository);
        this.auths = new Array<Auth>();

        const authValues = [
            {

                name: "User",
                orderIndex: 0,
                isActive: true,
                code: "AU000001"
            },
            {
                name: "Admin",
                orderIndex: 100,
                isActive: true,
                code: "AU000101"
            },
            {
                name: "Super-Admin",
                orderIndex: 1000,
                isActive: true,
                code: "AU001001"
            }
        ]

        authValues.map((auth)=>{
            const objAuth = Auth.create(auth.name,auth.isActive,auth.orderIndex,auth.code);
            this.auths.push(objAuth);
        });


        // this.authRepository.createAuths(this.auths).then(r => console.log(r));

    }
}






