import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Post {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name: string;

  @Column()
  public body: string;

  @Column()
  public likes: number;

  @Column()
  public created_at: Date;
  
  @Column()
  public owner_id: Number;

}

export default Post;
