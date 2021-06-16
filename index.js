import{Cliente} from "./Cliente.js"

import{ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupança } from "./ContaPoupança.js";
import {ContaSalario} from "./ContaSalario.js"


const cliente1 = new Cliente ("Ricardo",11122233309);

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
contaCorrenteCliente1.depositar(500);
contaCorrenteCliente1.sacar(100);


const contaPoupança = new ContaPoupança (50, cliente1, 1001);
contaPoupança.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
console.log(contaCorrenteCliente1);
console.log(contaPoupança);
