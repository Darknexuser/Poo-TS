export interface Manejable {
    encender(): void;
    apagar(): void;
    acelerar(): void;
}

export abstract class Vehiculo implements Manejable {
    private encendido: boolean = false;

    constructor(
        public marca: string,
        protected modelo: string,
        protected velocidad: number = 0
    ) {}

    public encender(): void {
        this.encendido = true;
        console.log(`${this.marca} encendido`);
    }

    public apagar(): void {
        this.encendido = false;
        this.velocidad = 0;
        console.log(`${this.marca} apagado`);
    }

    public abstract acelerar(): void;

    public getVelocidad(): number {
        return this.velocidad;
    }

    public setVelocidad(nuevaVelocidad: number): void {
        if (nuevaVelocidad >= 0) {
            this.velocidad = nuevaVelocidad;
        } else {
            console.log("la velocidad no puede ser negativa");
        }
    }

    public info(): void {
        console.log(`Vehiculo: ${this.marca} - Modelo: ${this.modelo} - Velocidad: ${this.velocidad} km/h`);
    }
}

export class Carro extends Vehiculo {
    puertas: number;

    constructor(marca: string, modelo: string, puertas: number) {
        super(marca, modelo);
        this.puertas = puertas;
    }

    public acelerar(): void {
        this.velocidad += 20;
        console.log(`${this.marca} acelera a ${this.velocidad} km/h`);
    }
}

export class Moto extends Vehiculo {
    cascoObligatorio: boolean;

    constructor(marca: string, modelo: string) {
        super(marca, modelo);
        this.cascoObligatorio = true;
    }

    public acelerar(): void {
        this.velocidad += 10;
        console.log(`${this.marca} acelera a ${this.velocidad} km/h`);
    }
}
