interface sonido {
    sonidoAnimal(): string;
}

abstract class Add {
    abstract dueños: string[];
}

export class Animal extends Add implements sonido {
    public nombre: string;
    protected especie: string;
    protected edad: number;
    protected vacuna: boolean = false;
    dueños: string[] = [];

    constructor(nombre: string, especie: string, edad: number) {
        super();
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
    }

    public static saludo(): void {
        console.log("Chanchito feliz");
    }

    public sonidoAnimal(): string {
        return "SONIDO X-Y";
    }

    public hacerSonido(): void {
        console.log(this.sonidoAnimal());
    }

    public informacion(): void {
        console.log(`Nombre: ${this.nombre}, Especie: ${this.especie}, Edad: ${this.edad}`);
    }

    public revision(): void {
        this.vacuna = true;
        console.log(`${this.nombre} ha sido vacunado`);
    }

    private vacunar(): boolean {
        return this.vacuna = true;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(nuevaEdad: number): void {
        if (nuevaEdad >= 0) {
            this.edad = nuevaEdad;
        } else {
            console.log("La edad no puede ser negativa");
        }
    }
}

export class Perro extends Animal {
    raza: string;

    constructor(nombre: string, especie: string, edad: number, raza: string) {
        super(nombre, especie, edad);
        this.raza = raza;
    }

    override sonidoAnimal(): string {
        return "Relincho :V";
    }

    override informacion(): void {
        console.log(
            `Nombre: ${this.nombre}, Especie: ${this.especie}, Edad: ${this.edad} años, Raza: ${this.raza}, Vacunado: ${this.vacuna}`
        );
    }
}
