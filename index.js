import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente ();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente ();
cliente2.nome = "Alicia";
cliente2.cpf = 88822233309;


const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;

contaCorrenteCliente1.depositar(100);
contaCorrenteCliente1.depositar(100);
contaCorrenteCliente1.depositar(100);

const valorSacado = contaCorrenteCliente1.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteCliente1);