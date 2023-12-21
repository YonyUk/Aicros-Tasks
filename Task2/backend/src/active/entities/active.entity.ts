import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Area } from '../../area/entities/area.entity';

@Entity('actives')
@ObjectType()
export class Active {
  @PrimaryColumn()
  @Field(() => String!, { description: "Active id"})
  ActiveID: string;

  @Column('text')
  @Field(() => String!, { description: "Active type"})
  ActiveType: string;

  @Column('text')
  @Field(() => String!, { description: "Active propierties"})
  ActivePropierties: string;

  @Column('text')
  @Field(() => String!, { description: "Active location"})
  ActiveLocation: string;

  @ManyToOne(() => Area, area => area.Actives)
  @Column('text')
  @Field(() => String!, { description: "Active's area"})
  Area: string;
}
