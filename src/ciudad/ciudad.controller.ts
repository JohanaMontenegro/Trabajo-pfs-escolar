import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { CiudadDTO } from './dto/ciudad.dto';
import { Ciudad } from './entities/ciudad.entity';

@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) { }

  @Get()
  finddAll() {
    return this.ciudadService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ciudadService.getById(+id);
  }
  @Post()
  crearCiudad(@Body() ciudad: CiudadDTO): Ciudad | any {
    return this.ciudadService.addCiudad(ciudad)
  }

  @Put('id')
  actualizar(@Param('id')id:number,@Body() ciudad:CiudadDTO){
    return this.ciudadService.update(id,ciudad);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ciudadService.delete(+id);
  }
}

