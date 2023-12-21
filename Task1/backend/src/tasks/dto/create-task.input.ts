import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field(() => Int!, { description: 'this is the id of the new task' })
  TaskID: number;

  @Field(() => String!, { description: 'this is the name of the task' })
  TaskName: string;

  @Field(() => String!, { description: 'this is the description of the task' })
  TaskDescription: string;
}
