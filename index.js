class Cliente {
    nome;
    cpf;
}  

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor){
       if(this._saldo >= valor){
           this._saldo -= valor;
           return valor;
       }
    }

    depositar(valor){
        if(valor >0){
            this._saldo += valor;
        }
    }
}




const cliente1 = new Cliente ();
cliente1.nome = "Ricardo";
cliente1.cpf = 111222333-09;


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