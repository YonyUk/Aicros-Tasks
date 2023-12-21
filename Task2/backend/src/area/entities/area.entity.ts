import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Active } from '../../active/entities/active.entity';

@Entity('areas')
@ObjectType()
export class Area {

  @PrimaryColumn()
  @Field(() => String!, { description: 'Area id' })
  AreaID: string;

  @Column()
  @Field(() => String!, { description: "Area name"})
  AreaName: string;

  @OneToMany(() => Active, active => active.ActiveID)
  Actives: Active[];
}
