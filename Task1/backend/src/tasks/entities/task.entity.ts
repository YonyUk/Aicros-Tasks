import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Task {
  @PrimaryGeneratedColumn('identity')
  @Field(() => Int!, { description: 'the id of a task' })
  TaskID: number;

  @Column('text')
  @Field(() => String!, { description: 'the name of the task'})
  TaskName: string;

  @Column('text')
  @Field(() => String!, { description: 'the description of the task'})
  TaskDescription: string;
}
