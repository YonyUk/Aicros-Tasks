import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateActiveInput {

  @Field(() => String!, { description: "Active id" })
  @IsAlphanumeric()
  @IsNotEmpty()
  ActiveID: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  @Field(() => String!, { description: "Active type" })
  ActiveType: string;

  @IsString()
  @Field(() => String!, { description: "Active propierties" })
  ActivePropierties: string;

  @IsString()
  @Field(() => String!, { description: "Active location" })
  ActiveLocation: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  @Field(() => String!, { description: "Area's active" })
  Area: string;

}

@ObjectType()
export class CreateActiveResponse {

  @Field(() => String, { description: 'Status of the result of the operation'})
  Status: string;

  @Field(() => String, { description: 'Message of the response'})
  Message: string;
  
}