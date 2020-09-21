import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne} from "typeorm";
import { Company } from "./Company";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @Column({nullable:false, default:true})
    isActive!:boolean;

    @Column({nullable:false, length:50})
    name!: string;

    @Column({nullable:false, length:50})
    email!: string;

    @Column({nullable:false})
    password!: string;

    @CreateDateColumn({name:'created_At'})
    createdAt!:Date

    @UpdateDateColumn({name:'updated_At'})
    updatedAt!:Date

    @OneToMany(type => Company, company => company.user_owner)
    companies!: Company[]
}
