import { Carro, Moto } from "./Vehiculos";  

const carro1 = new Carro("kia", "carens", 8)
const moto1 = new Moto("Yamaha", "BWS");

carro1.encender();
carro1.acelerar();
carro1.acelerar();
carro1.info();

moto1.encender();
moto1.acelerar();
moto1.info();