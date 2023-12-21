import { CreateTaskInput } from './create-task.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  @Field(() => Int!, { description: 'id of the task to update' })
  TaskID: number;

  @Field(() => String!, { description: 'the new name of the task' })
  TaskName: string;

  @Field(() => String!, { description: 'the new description of the task' })
  TaskDescription: string;
}
