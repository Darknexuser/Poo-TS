"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vehiculos_1 = require("./Vehiculos");
const carro1 = new Vehiculos_1.Carro("kia", "carens", 8);
const moto1 = new Vehiculos_1.Moto("Yamaha", "BWS");
carro1.encender();
carro1.acelerar();
carro1.acelerar();
carro1.info();
moto1.encender();
moto1.acelerar();
moto1.info();
