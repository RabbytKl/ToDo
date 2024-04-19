import { Tranzaction } from "src/tranzaction/entities/tranzaction.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn({ name: 'categoty_id' })
    id: number;

    @Column()
    title: String;

    @ManyToOne(() => User, (user) => user.categories)
    @JoinColumn({ name: 'user_id'})
    user: User;
    
    @OneToMany(()=> Tranzaction, (tranzaction) => tranzaction.category)
    tranzactions: Tranzaction[]

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date
}
