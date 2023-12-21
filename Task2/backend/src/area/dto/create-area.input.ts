import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { IsAlphanumeric, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAreaInput {

  @IsAlphanumeric()
  @IsNotEmpty()
  @Field(() => String!, { description: 'Area id' })
  AreaID: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String!, { description: "Area name"})
  AreaName: string;
}

@ObjectType()
export class CreateAreaResponse {

  @Field(() => String, { description: 'Status of the result of the operation'})
  Status: string;

  @Field(() => String, { description: 'Message of the operation'})
  Message: string;

}