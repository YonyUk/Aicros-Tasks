import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ActiveService } from './active.service';
import { Active } from './entities/active.entity';
import { CreateActiveInput, CreateActiveResponse } from './dto/create-active.input';
import { UpdateActiveInput } from './dto/update-active.input';
import { ValidationPipe } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Resolver(() => Active)
export class ActiveResolver {
  constructor(private readonly activeService: ActiveService) { }

  @Mutation(() => CreateActiveResponse)
  async createActive(@Args('createActiveInput') createActiveInput: CreateActiveInput) {
    const input = plainToClass(CreateActiveInput, createActiveInput);
    const errors = await validate(input);
    if (errors.length > 0)
      throw Error('The data is invalid');
    return this.activeService.create(input);
  }

  @Query(() => [Active], { name: 'actives' })
  async findAll() {
    return this.activeService.findAll();
  }

  @Query(() => Active, { name: 'active' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return this.activeService.findOne(id);
  }

  @Query(() => [Active], { name: 'activeByArea' })
  async findActiveByArea(@Args('areaid', { type: () => String }) areaid: string) {
    return this.activeService.getActiveByArea(areaid);
  }

  @Query(() => [Active], { name: 'activeSubGroup', description: 'gets a subgroup of active given a coutn parameter' })
  async findActivesSubgroup(
    @Args('page', { type: () => Int }) page: number
  ) {
    return this.activeService.getActivesByPage(page);
  }

  @Mutation(() => CreateActiveResponse)
  async updateActive(@Args('updateActiveInput') updateActiveInput: UpdateActiveInput) {
    const input = plainToClass(UpdateActiveInput, updateActiveInput);
    const errors = await validate(input);
    if (errors.length > 0)
      throw Error('The data is invalid');
    return this.activeService.update(updateActiveInput.ActiveID, updateActiveInput);
  }

  @Mutation(() => CreateActiveResponse)
  async removeActive(@Args('id', { type: () => String }) id: string) {
    return this.activeService.remove(id);
  }
}
