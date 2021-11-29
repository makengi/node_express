import {Column,CreateDateColumn,Generated,PrimaryColumn,PrimaryGeneratedColumn,UpdateDateColumn} from "typeorm";

export abstract class BaseTimeEntity{

    @Generated("increment")
    @PrimaryColumn({type:"bigint"})
    id:number;

    @CreateDateColumn({type:"timestamptz"})
    created: Date;

    @UpdateDateColumn({type:"timestamptz"})
    updated: Date;

    @Column({type:"timestamptz",nullable:true})
    useClass: number;

}