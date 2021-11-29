import {BaseEntity, Entity,Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class StudentEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    isActive: boolean;
}