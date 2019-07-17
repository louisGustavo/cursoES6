"use strict";

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
//método estático - não precisa instanciar numa variável
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
//const não é possível mudar seu valor

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
//é possível criar uma function diretamente numa varíavel

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

console.log(newestTest());
