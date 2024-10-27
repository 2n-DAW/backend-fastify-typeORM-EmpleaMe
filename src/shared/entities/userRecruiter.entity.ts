import { Entity, ObjectIdColumn, ObjectId, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UsersRecruiter {
    @ObjectIdColumn()
    _id!: ObjectId;

    @Column()
    company!: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @Column({ unique: true })
    email!: string;

    @Column("array")
    favouriteJobs!: string[];

    @Column("array")
    followingUsers!: string[];

    @Column({ nullable: true })
    image!: string;

    @Column()
    password!: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;

    @Column({ unique: true })
    username!: string;

    @Column({ nullable: true })
    bio!: string;
}