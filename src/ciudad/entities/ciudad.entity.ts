import { Escuela } from 'src/escuela/entities/escuela.entity';
import { DomicilioProfesor } from 'src/profesor/entities/domicilioProfesor.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('ciudades')
export class Ciudad {

    @PrimaryGeneratedColumn()
    private idCiudad: number;

    @Column()
    private nombre: string;
    domicilios: any;

    @OneToOne(() => Escuela ,{nullable:false})
        @JoinColumn()
        public escuela: Escuela;

    constructor(id: number, nombre: string) {
        this.nombre = nombre;
        this.idCiudad = id;
    }
    public getIdCiudad(): number { return this.idCiudad; }
    public getNombre(): string { return this.nombre; }
    public setNombre(nombre: string): void { this.nombre = nombre; }
}

