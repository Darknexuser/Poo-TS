"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = exports.Animal = void 0;
class Add {
}
class Animal extends Add {
    nombre;
    especie;
    edad;
    vacuna = false;
    dueños = [];
    constructor(nombre, especie, edad) {
        super();
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
    }
    static saludo() {
        console.log("Chanchito feliz");
    }
    sonidoAnimal() {
        return "SONIDO X-Y";
    }
    hacerSonido() {
        console.log(this.sonidoAnimal());
    }
    informacion() {
        console.log(`Nombre: ${this.nombre}, Especie: ${this.especie}, Edad: ${this.edad}`);
    }
    revision() {
        this.vacuna = true;
        console.log(`${this.nombre} ha sido vacunado`);
    }
    vacunar() {
        return this.vacuna = true;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(nuevaEdad) {
        if (nuevaEdad >= 0) {
            this.edad = nuevaEdad;
        }
        else {
            console.log("La edad no puede ser negativa");
        }
    }
}
exports.Animal = Animal;
class Perro extends Animal {
    raza;
    constructor(nombre, especie, edad, raza) {
        super(nombre, especie, edad);
        this.raza = raza;
    }
    sonidoAnimal() {
        return "Relincho :V";
    }
    informacion() {
        console.log(`Nombre: ${this.nombre}, Especie: ${this.especie}, Edad: ${this.edad} años, Raza: ${this.raza}, Vacunado: ${this.vacuna}`);
    }
}
exports.Perro = Perro;
