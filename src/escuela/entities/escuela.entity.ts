import { Clase } from "src/clase/entities/clase.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('escuelas')
export class Escuela {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;

    }

    public getIdCiudad(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getDomicilio(): string {
        return this.nombre;
    }

    public setDomicilio(nombre: string) {
        this.nombre = nombre;
    }

    @OneToMany(() => Clase, clase => clase.escuela)
    clases: Clase[];
}
