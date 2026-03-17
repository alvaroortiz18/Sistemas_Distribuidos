import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('files')
export class FileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filename: string;

    @Column()
    mimetype: string;

    @Column()
    size: number;

    @Column({ nullable: true })
    path: string;

    @Column({ nullable: true })
    originalName: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
