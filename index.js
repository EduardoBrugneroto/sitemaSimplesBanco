import{Cliente} from "./Cliente.js"
import { Funcionario } from "./Funcionarios-Geral/Funcionario.js";
import { Diretor } from "./Funcionarios-Geral/Diretor.js";
import { Gerente } from "./Funcionarios-Geral/Gerente.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

const cliente = new Cliente ("Alicia", 9876543211, "456");
const diretor = new Diretor("Rodrigo",10000, 12345678900 );
diretor.cadastrarSenha("123456");
const gerente = new Gerente ("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("122456");


const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, "122456");
const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, "46");

console.log(clienteEstaLogado);
console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
