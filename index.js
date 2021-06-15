import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupança } from "./ContaPoupança.js";
import {Conta} from "./Conta.js"

const cliente1 = new Cliente ("Ricardo",11122233309);

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
contaCorrenteCliente1.depositar(500);
contaCorrenteCliente1.sacar(100);


const contaPoupança = new ContaPoupança (50, cliente1, 1001);


console.log(contaPoupança);
console.log(contaCorrenteCliente1);
