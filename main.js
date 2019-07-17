//----------------| DECLARAÇÃO DE CLASSES |----------------

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

