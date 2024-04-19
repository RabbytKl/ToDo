import { Category } from "src/category/entities/category.entity";
import { Tranzaction } from "src/tranzaction/entities/tranzaction.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Category, (category)=> category.user, {onDelete: 'CASCADE'})
    categories: Category[];

    @OneToMany(()=> Tranzaction, (tranzaction) => tranzaction.user, {onDelete: 'CASCADE'})
    tranzactions: Tranzaction[];

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date
} //Таблиця в БД яка буде створена та буде туди передавати дані
