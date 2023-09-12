import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Clase } from './entities/clase.entity';
import { ClaseService} from './clase.service';

@Controller('clase')
export class ClaseController {
  claseService: any;

  constructor(claseService: ClaseService) {}

  @Get()
  findAll() {
    return this.claseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.claseService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.claseService.remove(+id);
  }
}
