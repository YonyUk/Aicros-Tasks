import { Injectable } from '@nestjs/common';
import { CreateAreaInput } from './dto/create-area.input';
import { UpdateAreaInput } from './dto/update-area.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AreaService {

  constructor(
    @InjectRepository(Area)
    private areaRepository: Repository<Area>
  ) { }

  async create(createAreaInput: CreateAreaInput) {
    try {
      await this.areaRepository.insert(createAreaInput);
      return {
        Status: 'OK',
        Message: 'Operation succesfully completed'
      }
    } catch (error) {
      return {
        Status: 'ERROR',
        Message: error
      }
    }
  }

  async findAll() {
    return await this.areaRepository.find({});
  }

  async findOne(id: string) {
    return await this.areaRepository.findOneBy({ AreaID: id });
  }

  async getAreaByPage(page: number) {
    return await this.areaRepository.find({
      take: 5,
      skip: 5 * page
    })
  }

  async update(id: string, updateAreaInput: UpdateAreaInput) {
    try {
      await this.areaRepository.update({ AreaID: id }, updateAreaInput);
      return {
        Status: 'OK',
        Message: 'Operation succesfully completed'
      };
    } catch (error) {
      return {
        Status: 'ERROR',
        Message: error
      };
    }
  }

  async remove(id: string) {
    try {
      const result = await this.findOne(id)
      await this.areaRepository.delete({ AreaID: id });
      return {
        Status: 'OK',
        Message: 'Operation succesfully completed'
      };
    } catch (error) {
      return {
        Status: 'ERROR',
        Message: error
      };
    }
  }
}
