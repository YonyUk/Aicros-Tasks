import { CreateAreaInput } from './create-area.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsAlphanumeric, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateAreaInput extends PartialType(CreateAreaInput) {

  @IsAlphanumeric()
  @IsNotEmpty()
  @Field(() => String!, { description: 'Area id' })
  AreaID: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String!, { description: "Area name"})
  AreaName: string;
}
