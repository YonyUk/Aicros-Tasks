import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateActiveInput } from './dto/create-active.input';
import { UpdateActiveInput } from './dto/update-active.input';
import { Active } from './entities/active.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActiveService {

  constructor(
    @InjectRepository(Active)
    private activeRepository: Repository<Active>
  ) { }

  async create(createActiveInput: CreateActiveInput) {
    try {
      await this.activeRepository.insert(createActiveInput);
      return {
        Status: 'OK',
        Message: 'Operation succesfully completed'
      }
    } catch (error) {
      return {
        Status: 'ERROR',
        Message: error
      };
    }

  }

  async findAll() {
    return await this.activeRepository.find({});
  }

  async findOne(id: string) {
    return await this.activeRepository.findOneBy({ ActiveID: id });
  }

  async getActiveByArea(areaid: string) {
    return await this.activeRepository.findBy({ Area: areaid });
  }

  async getActivesByPage(page: number) {
    return await this.activeRepository.find({
      take: 5,
      skip: 5 * page
    });
  }

  async update(id: string, updateActiveInput: UpdateActiveInput) {
    try {
      await this.activeRepository.update({ ActiveID: id }, updateActiveInput);
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
      const result = await this.findOne(id);
      await this.activeRepository.delete({ ActiveID: id });
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
