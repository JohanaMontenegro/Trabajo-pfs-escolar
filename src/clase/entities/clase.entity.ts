import { Escuela } from "src/escuela/entities/escuela.entity";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Profesor } from "src/profesor/entities/profesor.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Clase')
export class Clase {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public getCiudad(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    @ManyToOne(() => Profesor, profesor => profesor.clases)
    @JoinColumn({ name: 'id_profesor' })
    profesor: Profesor;

    @ManyToMany(() => Estudiante, estudiante => estudiante.clases)
    @JoinTable({ name: 'Estudiante_clase' })
    estudiantes: Estudiante[];

    @ManyToOne(() => Escuela, escuela => escuela.clases)
    @JoinColumn({ name: 'id_escuela' })
    escuela: Escuela;
}
