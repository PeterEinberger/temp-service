import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class ProbeEntry extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  senderId: string;
  @Column()
  date: string;
  @Column()
  temp: number;
  @Column()
  humidity: number;

}
