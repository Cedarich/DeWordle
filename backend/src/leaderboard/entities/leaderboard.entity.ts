import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Leaderboard {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.leaderboard)
  user: User;

  @Column('integer')
  totalWins: number;

  @Column('integer')
  totalAttempts: number;

  @Column('float')
  averageScore: number;
}
