"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//----------------| DECLARAÇÃO DE CLASSES |----------------
console.log('-----| DECLARAÇÃO DE CLASSES |------'); //método estático - não precisa instanciar numa variável

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}(); //console.log(Matematica.soma(1, 2));


var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    //chama o constructor da class herdada
    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Luis';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
}; //MinhaLista.mostraUsuario();
//----------------| VARIÁVEIS CONST E LET |----------------


console.log('-----| VARIÁVEIS CONST E LET |------'); //const não é possível mudar seu valor

/*
const a = 1
a = 2;
*/
//mas é possível mutar o valor do objeto

var usuario = {
  nome: 'Luis'
};
usuario.nome = 'Roberto';

function teste(x) {
  //variável de escopo, não pode ser instanciada ou chamada fora do seu escopo
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
} //teste(10);
//-----------| TRABALHANDO COM ARRAYS E ARROW FUNCTIONS |-----------


console.log('-----| TRABALHANDO COM ARRAYS E ARROW FUNCTIONS |------');
var arr = [1, 3, 5, 8, 10]; //um dos meios de executar um foreach() em ES6

var newArr = arr.map(function (item, index) {
  return item * 2; //index é o numero da posição de cada item do array
}); //ARROW FUNCTION

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

console.log(newArr); //método de somar valores de um array

var soma = arr.reduce(function (total, next) {
  return total + next;
});
console.log(soma); //método para filtrar itens de um array para gerar um novo
//retornar somente os números pares

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //faz um busca por um parametro e retorna o resulta se encontrar
//retornar somente se encontrar um numero 5 no array
//caso não encontre, retornará undefined

var find = arr.find(function (item) {
  return item === 5;
});
console.log(find); //---------| DECLARAÇÃO DE FUNCTIONS EM VARIÁVEIS |---------

console.log('-----| DECLARAÇÃO DE FUNCTION EM VARIÁVEIS |------'); //é possível criar uma function diretamente numa varíavel

var novoTeste = function novoTeste() {
  console.log('teste');
};

novoTeste(); //podendo até mesmo usar arrow functions

var newTest = function newTest() {
  return 'Luis';
};

console.log(newTest()); //no caso de retornar valores em objeto, usar uma parenteses

var newestTest = function newestTest() {
  return {
    nome: 'Otavio'
  };
};

console.log(newestTest()); //valores padrão

console.log('-----| VALORES PADRAO |------');
/*
function somar(a = 3, b = 5){
	return a+b;
}
*/

var somar = function somar() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a + b;
};

console.log(somar()); //Desestruturação de objeto

console.log('-----| DESESTRUTURAÇÃO DE OBJETO |------');
var pessoa = {
  nome: 'Luis',
  idade: 29,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP'
  } //Com a desestrutução consegue extrair informações especificações de 
  //um objeto
  //const { nome, idade, endereco : { cidade } } = pessoa;
  //console.log(nome, cidade);
  //O mesmo vale para parâmetros de um método

};

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome(pessoa); //---------| OPERADORES REST/SPREAD |---------

console.log('-----| OPERADORES REST/SPREAD |------'); //REST

console.log('-| REST |-'); //Usando a desestruturação para obter informações específicas do código
//pode-se usar o REST para armazenar numa variável o resto das informações
//do objeto informado.

var user = {
  nome: 'Leandro',
  idade: 23,
  empresa: 'RocketSeat'
}; //const { idade, ...resto } = user;
//o mesmo vale para vetores (array)

var vetor = [1, 2, 3, 4, 5];
var a = vetor[0],
    b = vetor[1],
    c = vetor.slice(2);
console.log(c); //e também para métodos
//dessa forma não é necessário informar todo os parametros que o método precisa

function executarSoma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(executarSoma(1, 5, 7, 9)); //SPREAD

console.log('-| SPREAD |-'); //pode ser utilizado para unificar informações de duas ou mais variáveis

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3); //ou criar uma segunda variável com as mesmas informações da primeira, porém
//mudando alguns parâmetros

var user1 = {
  nome: 'Luis',
  idade: 24
}; //recupero as informações do usuário e só mudo o nome

var user2 = _objectSpread({}, user1, {
  nome: 'Gustavo'
});

console.log(user2);
