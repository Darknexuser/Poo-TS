"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = exports.Carro = exports.Vehiculo = void 0;
class Vehiculo {
    marca;
    modelo;
    velocidad;
    encendido = false;
    constructor(marca, modelo, velocidad = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    encender() {
        this.encendido = true;
        console.log(`${this.marca} encendido`);
    }
    apagar() {
        this.encendido = false;
        this.velocidad = 0;
        console.log(`${this.marca} apagado`);
    }
    getVelocidad() {
        return this.velocidad;
    }
    setVelocidad(nuevaVelocidad) {
        if (nuevaVelocidad >= 0) {
            this.velocidad = nuevaVelocidad;
        }
        else {
            console.log("la velocidad no puede ser negativa");
        }
    }
    info() {
        console.log(`Vehiculo: ${this.marca} - Modelo: ${this.modelo} - Velocidad: ${this.velocidad} km/h`);
    }
}
exports.Vehiculo = Vehiculo;
class Carro extends Vehiculo {
    puertas;
    constructor(marca, modelo, puertas) {
        super(marca, modelo);
        this.puertas = puertas;
    }
    acelerar() {
        this.velocidad += 20;
        console.log(`${this.marca} acelera a ${this.velocidad} km/h`);
    }
}
exports.Carro = Carro;
class Moto extends Vehiculo {
    cascoObligatorio;
    constructor(marca, modelo) {
        super(marca, modelo);
        this.cascoObligatorio = true;
    }
    acelerar() {
        this.velocidad += 10;
        console.log(`${this.marca} acelera a ${this.velocidad} km/h`);
    }
}
exports.Moto = Moto;
