import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Tranzaction {
    @PrimaryColumn({name: 'tranzaction_id'})
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true})
    type: string;

    @ManyToOne (() => User, (user)=> user.tranzactions)
    @JoinColumn({name: 'user_id'})
    user: User;

    @ManyToOne(()=> Category, (category) => category.tranzactions)
    @JoinColumn({name: 'category_id'})
    category: Category;

    @Column()
    amount: number;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date

}
    