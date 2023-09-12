import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadModule } from './ciudad/ciudad.module';
import { CiudadController } from './ciudad/ciudad.controller';
import { CiudadService } from './ciudad/ciudad.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { EscuelaModule } from './escuela/escuela.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';
import { ClaseModule } from './clase/clase.module';

@Module({
  imports: [ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'app') }),
  TypeOrmModule.forRoot({

    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "joha",
    "password": "johana2023",
    "database": "new_schema",
    "entities": [
      __dirname + '/../dist/**/entities/*.entity.{js,ts}'
    ],
    "synchronize": true
  }
  ), CiudadModule,
    ClaseModule,
    EscuelaModule,
    EstudianteModule,
    ProfesorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
