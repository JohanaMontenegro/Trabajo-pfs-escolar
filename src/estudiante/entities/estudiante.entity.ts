import { Clase } from "src/clase/entities/clase.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiante')
export class Estudiante {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreApellido: string;

    constructor(nombre: string) {
        this.nombreApellido = nombre;

    }

    public getIdEstudiante(nombre: string) {
        return this.id;
    }

    public getNombre(): string {
        return this.nombreApellido;
    }

    public setNombre(nombre: string) {
        return this.nombreApellido = nombre;
    }

    @ManyToMany(() => Clase, clase => clase.estudiantes)
    clases: Clase[];

}
