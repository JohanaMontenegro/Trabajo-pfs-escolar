import { Clase } from "src/clase/entities/clase.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DomicilioProfesor } from "./domicilioProfesor.entity";

@Entity('Profesor')
export class Profesor {

@PrimaryGeneratedColumn()
id:number;

@Column()
NombreApellido:string;

constructor(nombre:string){
    this.NombreApellido = nombre;
}

public getIdCiudad():number{
    return this.id;
}

public getNombre(nombre:string){
    return this.NombreApellido;
}

@OneToMany(()=>Clase,clase =>clase.profesor)
clases: Clase[];

@OneToMany(()=> DomicilioProfesor,domicilios =>domicilios.profesor)
domicilios:DomicilioProfesor[];
}
