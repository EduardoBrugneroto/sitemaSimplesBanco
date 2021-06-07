class Cliente {
    nome;
    cpf;
}  

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
       if(this.saldo >= valor){
           this.saldo -= valor;
       }
    }
}




const cliente1 = new Cliente ();
cliente1.nome = "Ricardo";
cliente1.cpf = 111222333-09;
cliente1.agencia = 1001;
cliente1.saldo = 0;



const cliente2 = new Cliente ();
cliente2.nome = "Alicia";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.saldo = 0;
contaCorrenteCliente1.agencia = 1001;
console.log(contaCorrenteCliente1.saldo);
contaCorrenteCliente1.saldo = 100;
console.log(contaCorrenteCliente1.saldo);
contaCorrenteCliente1.sacar(200);
console.log(contaCorrenteCliente1.saldo);


console.log(cliente1);
console.log(cliente2);