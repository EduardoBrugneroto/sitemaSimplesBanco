import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupança } from "./ContaPoupança.js";

const cliente1 = new Cliente ("Ricardo",11122233309);
const cliente2 = new Cliente ("Alicia", 88822233309);


const contaCorrenteCliente1 = new ContaCorrente(cliente1,1001);
contaCorrenteCliente1.depositar(500);

const contaPoupança = new ContaPoupança (50, cliente1, 1001);
console.log(contaPoupança);

const conta2 = new ContaCorrente(cliente2, 102);
contaCorrenteCliente1.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);
