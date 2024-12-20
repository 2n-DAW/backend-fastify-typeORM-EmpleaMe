import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity('inscriptions')
@Unique(['job', 'user_email'])
export class Inscription {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    // @Column({ name: 'date', type: 'timestamp' })
    // date!: Date;

    @Column({ name: 'job', type: 'varchar' })
    job!: string;

    @Column({ name: 'status', type: 'int' })
    status!: number;

    @Column({ name: 'user_email', type: 'varchar' })
    user_email!: string;

    @Column({ name: 'created_at', type: 'timestamp' })
    createdAt!: Date;

    // @CreateDateColumn({ name: 'created_at' })
    // createdAt!: Date;

    // @UpdateDateColumn({ name: 'updated_at' })
    // updatedAt!: Date;
}
