import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('usuarios')
export default class UserEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id?: number;

  @Column({ name: 'nome', type: 'varchar' })
  name: string;

  @Column({ name: 'senha', type: 'varchar' })
  password: string;

  @Column({ name: 'filmes', type: 'varchar' })
  movies?: string;

  @Column({ name: 'ativo', type: 'boolean' })
  active: boolean;

  @Column({
    name: 'criado_em',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'atualizado_em',
    type: 'timestamp',
  })
  updatedAt: Date;
}
