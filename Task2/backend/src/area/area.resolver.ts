import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AreaService } from './area.service';
import { Area } from './entities/area.entity';
import { CreateAreaInput, CreateAreaResponse } from './dto/create-area.input';
import { UpdateAreaInput } from './dto/update-area.input';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Resolver(() => Area)
export class AreaResolver {
  constructor(private readonly areaService: AreaService) {}

  @Mutation(() => CreateAreaResponse)
  async createArea(@Args('createAreaInput') createAreaInput: CreateAreaInput) {
    const input = plainToClass(CreateAreaInput, createAreaInput);
    const errors = await validate(input);

    if(errors.length > 0)
      throw Error('The data is invalid');

    return this.areaService.create(createAreaInput);
  }

  @Query(() => [Area], { name: 'areas' })
  async findAll() {
    return this.areaService.findAll();
  }

  @Query(() => Area, { name: 'area' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return this.areaService.findOne(id);
  }

  @Query(() => [Area], { name: 'areaSubGroup' })
  async findAreaBySubgroup (
    @Args('page', { type: () => Int }) page: number
  ) {
    return this.areaService.getAreaByPage(page);
  }

  @Mutation(() => CreateAreaResponse)
  async updateArea(@Args('updateAreaInput') updateAreaInput: UpdateAreaInput) {
    const input = plainToClass(UpdateAreaInput, updateAreaInput);
    const errors = await validate(input);

    if (errors.length > 0)
      throw Error('The data is invalid');
    return this.areaService.update(updateAreaInput.AreaID, updateAreaInput);
  }

  @Mutation(() => CreateAreaResponse)
  removeArea(@Args('id', { type: () => String }) id: string) {
    return this.areaService.remove(id);
  }
}
