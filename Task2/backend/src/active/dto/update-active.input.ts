import { CreateActiveInput } from './create-active.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Area } from '../../area/entities/area.entity';
import { IsAlphanumeric, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateActiveInput extends PartialType(CreateActiveInput) {

  @IsAlphanumeric()
  @IsNotEmpty()
  @Field(() => String!, { description: "Active id" })
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
