/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.somaNum = somaNum;\n\nfunction somaNum(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _funcoes = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//----------------| DECLARAÇÃO DE CLASSES |----------------\nconsole.log('-----| DECLARAÇÃO DE CLASSES |------'); //método estático - não precisa instanciar numa variável\n\nvar Matematica =\n/*#__PURE__*/\nfunction () {\n  function Matematica() {\n    _classCallCheck(this, Matematica);\n  }\n\n  _createClass(Matematica, null, [{\n    key: \"soma\",\n    value: function soma(a, b) {\n      return a + b;\n    }\n  }]);\n\n  return Matematica;\n}(); //console.log(Matematica.soma(1, 2));\n\n\nvar List =\n/*#__PURE__*/\nfunction () {\n  function List() {\n    _classCallCheck(this, List);\n\n    this.data = [];\n  }\n\n  _createClass(List, [{\n    key: \"add\",\n    value: function add(data) {\n      this.data.push(data);\n      console.log(this.data);\n    }\n  }]);\n\n  return List;\n}();\n\nvar TodoList =\n/*#__PURE__*/\nfunction (_List) {\n  _inherits(TodoList, _List);\n\n  function TodoList() {\n    var _this;\n\n    _classCallCheck(this, TodoList);\n\n    //chama o constructor da class herdada\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));\n    _this.usuario = 'Luis';\n    return _this;\n  }\n\n  _createClass(TodoList, [{\n    key: \"mostraUsuario\",\n    value: function mostraUsuario() {\n      console.log(this.usuario);\n    }\n  }]);\n\n  return TodoList;\n}(List);\n\nvar MinhaLista = new TodoList();\n\ndocument.getElementById('novotodo').onclick = function () {\n  MinhaLista.add('Novo todo');\n}; //MinhaLista.mostraUsuario();\n//----------------| VARIÁVEIS CONST E LET |----------------\n\n\nconsole.log('-----| VARIÁVEIS CONST E LET |------'); //const não é possível mudar seu valor\n\n/*\r\nconst a = 1\r\na = 2;\r\n*/\n//mas é possível mutar o valor do objeto\n\nvar usuario = {\n  nome: 'Luis'\n};\nusuario.nome = 'Roberto';\n\nfunction teste(x) {\n  //variável de escopo, não pode ser instanciada ou chamada fora do seu escopo\n  var y = 2;\n\n  if (x > 5) {\n    console.log(x, y);\n  }\n} //teste(10);\n//-----------| TRABALHANDO COM ARRAYS E ARROW FUNCTIONS |-----------\n\n\nconsole.log('-----| TRABALHANDO COM ARRAYS E ARROW FUNCTIONS |------');\nvar arr = [1, 3, 5, 8, 10]; //um dos meios de executar um foreach() em ES6\n\nvar newArr = arr.map(function (item, index) {\n  return item * 2; //index é o numero da posição de cada item do array\n}); //ARROW FUNCTION\n\n/*\r\n//No caso de functions que não possuem nome, não é necessário declaração\r\n//da palavra \"function\"\r\nconst newArr = arr.map((item) => {\r\n\treturn item * 2;\r\n});\r\n\r\n//No caso de functions com somente um valor, os parenteses podem ser retirados\r\nconst newArr = arr.map(item => {\r\n\treturn item * 2;\r\n});\r\n\r\n//No caso de functions com somente um retorno, a palavra return é dispensável\r\nconst newArr = arr.map(item => item *2);\r\n*/\n\nconsole.log(newArr); //método de somar valores de um array\n\nvar soma = arr.reduce(function (total, next) {\n  return total + next;\n});\nconsole.log(soma); //método para filtrar itens de um array para gerar um novo\n//retornar somente os números pares\n\nvar filter = arr.filter(function (item) {\n  return item % 2 === 0;\n});\nconsole.log(filter); //faz um busca por um parametro e retorna o resulta se encontrar\n//retornar somente se encontrar um numero 5 no array\n//caso não encontre, retornará undefined\n\nvar find = arr.find(function (item) {\n  return item === 5;\n});\nconsole.log(find); //---------| DECLARAÇÃO DE FUNCTIONS EM VARIÁVEIS |---------\n\nconsole.log('-----| DECLARAÇÃO DE FUNCTION EM VARIÁVEIS |------'); //é possível criar uma function diretamente numa varíavel\n\nvar novoTeste = function novoTeste() {\n  console.log('teste');\n};\n\nnovoTeste(); //podendo até mesmo usar arrow functions\n\nvar newTest = function newTest() {\n  return 'Luis';\n};\n\nconsole.log(newTest()); //no caso de retornar valores em objeto, usar uma parenteses\n\nvar newestTest = function newestTest() {\n  return {\n    nome: 'Otavio'\n  };\n};\n\nconsole.log(newestTest()); //valores padrão\n\nconsole.log('-----| VALORES PADRAO |------');\n/*\r\nfunction somar(a = 3, b = 5){\r\n\treturn a+b;\r\n}\r\n*/\n\nvar somar = function somar() {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;\n  return a + b;\n};\n\nconsole.log(somar()); //Desestruturação de objeto\n\nconsole.log('-----| DESESTRUTURAÇÃO DE OBJETO |------');\nvar pessoa = {\n  nome: 'Luis',\n  idade: 29,\n  endereco: {\n    cidade: 'São Paulo',\n    estado: 'SP'\n  } //Com a desestrutução consegue extrair informações especificações de \n  //um objeto\n  //const { nome, idade, endereco : { cidade } } = pessoa;\n  //console.log(nome, cidade);\n  //O mesmo vale para parâmetros de um método\n\n};\n\nfunction mostraNome(_ref) {\n  var nome = _ref.nome;\n  console.log(nome);\n}\n\nmostraNome(pessoa); //---------| OPERADORES REST/SPREAD |---------\n\nconsole.log('-----| OPERADORES REST/SPREAD |------'); //REST\n\nconsole.log('-| REST |-'); //Usando a desestruturação para obter informações específicas do código\n//pode-se usar o REST para armazenar numa variável o resto das informações\n//do objeto informado.\n\nvar user = {\n  nome: 'Leandro',\n  idade: 23,\n  empresa: 'RocketSeat'\n}; //const { idade, ...resto } = user;\n//o mesmo vale para vetores (array)\n\nvar vetor = [1, 2, 3, 4, 5];\nvar a = vetor[0],\n    b = vetor[1],\n    c = vetor.slice(2);\nconsole.log(c); //e também para métodos\n//dessa forma não é necessário informar todo os parametros que o método precisa\n\nfunction executarSoma() {\n  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n    params[_key] = arguments[_key];\n  }\n\n  return params.reduce(function (total, next) {\n    return total + next;\n  });\n}\n\nconsole.log(executarSoma(1, 5, 7, 9)); //SPREAD\n\nconsole.log('-| SPREAD |-'); //pode ser utilizado para unificar informações de duas ou mais variáveis\n\nvar arr1 = [1, 2, 3];\nvar arr2 = [4, 5, 6];\nvar arr3 = [].concat(arr1, arr2);\nconsole.log(arr3); //ou criar uma segunda variável com as mesmas informações da primeira, porém\n//mudando alguns parâmetros\n\nvar user1 = {\n  nome: 'Luis',\n  idade: 24\n}; //recupero as informações do usuário e só mudo o nome\n\nvar user2 = _objectSpread({}, user1, {\n  nome: 'Gustavo'\n});\n\nconsole.log(user2); //---------| TEMPLATE LITERALS |---------\n\nconsole.log('-----| TEMPLATE LITERALS |------'); //é uma forma mais fácil de manipular variáveis dentro de strings\n//e deixar a sintaxe menor\n\nvar nome = 'Luis';\nvar idade = 29;\nconsole.log(\"Meu nome \\xE9 \".concat(nome, \" e tenho \").concat(idade, \" anos\")); //---------| OBJECT SHORT SINTAX |---------\n\nconsole.log('-----| OBJECT SHORT SINTAX |------'); //Quando o nome da propriedade é igual ao nome da variável não é necessário\n//declará-la de forma convecional (nome: nome) bastando somente uma delas\n\nvar categoria = 'carros';\nvar marca = 'ford';\nvar concessionaria = {\n  categoria: categoria,\n  marca: marca,\n  modelo: 'Ka'\n};\nconsole.log(concessionaria);\nconsole.log((0, _funcoes.somaNum)(2, 5));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });