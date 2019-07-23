//----------------| DECLARAÇÃO DE CLASSES |----------------
console.log('-----| DECLARAÇÃO DE CLASSES |------');
//método estático - não precisa instanciar numa variável
class Matematica{
	static soma(a, b) {
		return a+b;
	}
}
//console.log(Matematica.soma(1, 2));

class List{
	constructor() {
		this.data = [];
	}

	add(data) {
		this.data.push(data);
		console.log(this.data);
	}
}

class TodoList extends List{
	constructor() {
		//chama o constructor da class herdada
		super();
		this.usuario = 'Luis';
	}

	mostraUsuario() {
		console.log(this.usuario);
	}
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
	MinhaLista.add('Novo todo');
}
//MinhaLista.mostraUsuario();

//----------------| VARIÁVEIS CONST E LET |----------------
console.log('-----| VARIÁVEIS CONST E LET |------');
//const não é possível mudar seu valor
/*
const a = 1
a = 2;
*/

//mas é possível mutar o valor do objeto
const usuario = { nome : 'Luis' };
usuario.nome = 'Roberto';

function teste(x){
	//variável de escopo, não pode ser instanciada ou chamada fora do seu escopo
	let y = 2;

	if(x > 5){
		console.log(x, y);
	}
}

//teste(10);

//-----------| TRABALHANDO COM ARRAYS E ARROW FUNCTIONS |-----------
console.log('-----| TRABALHANDO COM ARRAYS E ARROW FUNCTIONS |------');
const arr = [1, 3, 5, 8, 10];

//um dos meios de executar um foreach() em ES6
const newArr = arr.map(function(item, index) {
	return item * 2;
	//index é o numero da posição de cada item do array
});

//ARROW FUNCTION
/*
//No caso de functions que não possuem nome, não é necessário declaração
//da palavra "function"
const newArr = arr.map((item) => {
	return item * 2;
});

//No caso de functions com somente um valor, os parenteses podem ser retirados
const newArr = arr.map(item => {
	return item * 2;
});

//No caso de functions com somente um retorno, a palavra return é dispensável
const newArr = arr.map(item => item *2);
*/

console.log(newArr);

//método de somar valores de um array
const soma = arr.reduce((total, next) => {
	return total + next;
});

console.log(soma);

//método para filtrar itens de um array para gerar um novo
//retornar somente os números pares
const filter = arr.filter(item => item % 2 === 0);

console.log(filter);

//faz um busca por um parametro e retorna o resulta se encontrar
//retornar somente se encontrar um numero 5 no array
//caso não encontre, retornará undefined
const find = arr.find(item => item === 5);

console.log(find);

//---------| DECLARAÇÃO DE FUNCTIONS EM VARIÁVEIS |---------
console.log('-----| DECLARAÇÃO DE FUNCTION EM VARIÁVEIS |------');
//é possível criar uma function diretamente numa varíavel
const novoTeste = () => {
	console.log('teste');
}
novoTeste();

//podendo até mesmo usar arrow functions
const newTest = () => 'Luis';
console.log(newTest());

//no caso de retornar valores em objeto, usar uma parenteses
const newestTest = () => ({nome : 'Otavio'});
console.log(newestTest());

//valores padrão
console.log('-----| VALORES PADRAO |------');
/*
function somar(a = 3, b = 5){
	return a+b;
}
*/
const somar = (a = 3, b = 5) => a+b;

console.log(somar());

//Desestruturação de objeto
console.log('-----| DESESTRUTURAÇÃO DE OBJETO |------');
const pessoa = {
	nome : 'Luis',
	idade: 29,
	endereco: {
		cidade : 'São Paulo',
		estado: 'SP'
	}
}
//Com a desestrutução consegue extrair informações especificações de 
//um objeto
//const { nome, idade, endereco : { cidade } } = pessoa;
//console.log(nome, cidade);

//O mesmo vale para parâmetros de um método
function mostraNome({nome}){
	console.log(nome);
}
mostraNome(pessoa);

//---------| OPERADORES REST/SPREAD |---------
console.log('-----| OPERADORES REST/SPREAD |------');

//REST
console.log('-| REST |-');
//Usando a desestruturação para obter informações específicas do código
//pode-se usar o REST para armazenar numa variável o resto das informações
//do objeto informado.
const user = {
	nome : 'Leandro',
	idade : 23,
	empresa : 'RocketSeat'
};

//const { idade, ...resto } = user;

//o mesmo vale para vetores (array)
const vetor = [1, 2, 3, 4, 5];
const [ a, b, ...c ] = vetor;
console.log(c);

//e também para métodos
//dessa forma não é necessário informar todo os parametros que o método precisa
function executarSoma(...params){
	return params.reduce((total, next) => total + next);
}

console.log(executarSoma(1, 5, 7, 9));

//SPREAD
console.log('-| SPREAD |-');

//pode ser utilizado para unificar informações de duas ou mais variáveis
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);

//ou criar uma segunda variável com as mesmas informações da primeira, porém
//mudando alguns parâmetros
const user1 = {
	nome : 'Luis',
	idade : 24
};

//recupero as informações do usuário e só mudo o nome
const user2 = { ...user1, nome : 'Gustavo' };
console.log(user2);

//---------| TEMPLATE LITERALS |---------
console.log('-----| TEMPLATE LITERALS |------');

//é uma forma mais fácil de manipular variáveis dentro de strings
//e deixar a sintaxe menor

const nome = 'Luis';
const idade = 29;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

//---------| OBJECT SHORT SINTAX |---------
console.log('-----| OBJECT SHORT SINTAX |------');

//Quando o nome da propriedade é igual ao nome da variável não é necessário
//declará-la de forma convecional (nome: nome) bastando somente uma delas

const categoria = 'carros';
const marca = 'ford';

const concessionaria = {
	categoria,
	marca,
	modelo : 'Ka'
};
console.log(concessionaria);

//---------| CONFIGURANDO WEBPACK |---------
console.log('-----| CONFIGURANDO WEBPACK |------');
import {somaNum} from './funcoes';

console.log(somaNum(2,5));
