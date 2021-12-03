import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {BaseTimeEntity} from "../entity/BaseTimeEntity";
import {Auth} from "./Auth";


@Entity()
export class StudentEntity extends BaseTimeEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    isActive: boolean;

    @ManyToOne(type=>Auth, (auth)=>auth.students)
    auth:Auth;


    constructor() {
        super();
    }


    static create(firstName:string, lastName:string, isActive:boolean){
        const student = new StudentEntity();
        student.firstName=firstName;
        student.lastName = lastName;
        student.isActive = isActive;
        return student;
    }
}