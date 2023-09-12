import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profesor } from "./profesor.entity";

@Entity('DomicilioProfesor')
export class DomicilioProfesor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    domicilio: string;

    constructor(nombre: string) {
        this.domicilio = nombre;
    }

    public getIdCiudad(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.domicilio;
    }

    public setNombre(nombre: string) {
        this.domicilio = nombre;
    }

    @ManyToOne(() => Profesor, profesor => profesor.domicilios)
    @JoinColumn({ name: 'id_profesor' })
    profesor: Profesor;

    @ManyToOne(() => Ciudad, ciudad => ciudad.domicilios)
    ciudad: Ciudad;

}