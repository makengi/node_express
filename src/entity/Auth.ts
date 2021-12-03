import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import {BaseTimeEntity} from "../entity/BaseTimeEntity";
import {StudentEntity} from "./Student.entity";


@Entity()
export class Auth extends BaseTimeEntity{

    @PrimaryGeneratedColumn({type:"int",name:"id"})
    id: number;

    @Column()
    name: string;

    @Column()
    isActive: boolean;

    @OneToMany((type)=>StudentEntity,(student)=>student.auth)
    students: StudentEntity[];

    @Column()
    orderIndex: number;

    @Column()
    code:string;


    constructor() {
        super();
    }

    static create(name:string,isActive:boolean,orderIndex:number,code:string){
        const auth = new Auth();
        auth.name  = name;
        auth.isActive = isActive;
        auth.orderIndex = orderIndex;
        auth.code = code;
        return auth;
    }
}
