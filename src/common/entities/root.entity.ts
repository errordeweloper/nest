import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class RootEntity{
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt: Date
}