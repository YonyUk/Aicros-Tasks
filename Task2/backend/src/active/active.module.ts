import { Module } from '@nestjs/common';
import { ActiveService } from './active.service';
import { ActiveResolver } from './active.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Active } from './entities/active.entity';

@Module({
  providers: [ActiveResolver, ActiveService],
  imports: [
    TypeOrmModule.forFeature([Active])
  ],
  exports: [
    ActiveService
  ]
})
export class ActiveModule {}
