# Curso JavaScript ES6 RocketSeat Starter

Curso administrado pelo tutor Diego Fernandes e distribuído gratuitamente pela RocketSeat
<br>
Interessados acessar [RocketSeat Starter](https://rocketseat.com.br/starter) e requisitar seu acesso
<br>
### Módulo 1. Conceitos [Total de 12 aulas]

- [FEITO] Introdução;
- [FEITO] Instalando Node e Yarn;
- [FEITO] Configurando Babel;
- [FEITO] Classes;
- [FEITO] Const e Let;
- [FEITO] Operações em Array;
- [FEITO] Arrow Functions;
- [FEITO] Valores Padrão;
- [FEITO] Desestruturação;
- [FEITO] Operadores rest/spread;
- [FEITO] Template Literals;
- [FEITO] Object Short Sintax;

### Instalação do NodeJs e Yarn

1. Faça o Download do [NodeJs](https://nodejs.org/en/) e instale seguindos os passos conforme seu S.O.;
2. Para verificar se o Node foi instalado corretamente, via terminal digite
```
node - v
```
Caso esteja tudo correto o terminal deve retornar a versão do Node instalada na máquina. Exemplo:
```
v10.16.0
```
3. Faça o download do [Yarn](https://yarnpkg.com/pt-BR/) e instale seguindos os passos conforme seu S.O.;
4. Para verificar se o Yarn foi instalado corretamente, via terminal digite
```
yarn -v
```
Caso esteja tudo correto o terminal deve retornar a versão do Yarn assim como ocorreu com o Node
<br><br>
Observações: Caso ao rodar o yarn -v ou node -v responder que o comando é inválido ou inexistente, feche o terminal, abra novamente e tente rodar os comandos. Pode ser que o terminal atualmente ativo não tenha recebido as atualizações ainda.

### Configurando o Babel

1. Na pasta onde o projeto se encontra, via terminal execute o comando:
```
yarn init
```
Ao fazer esse comando, o yarn criará um arquivo na raiz do projeto chamado package.json que armazenará as informações de dependência da aplicação.
<br>
2. Com o yarn iniciado e o arquivo package.json criado, execute via terminal
```
yarn add @babel/cli
```
Com essa dependência é possível trabalhar com a interface de linha de comando do babel
<br>
3. Instalado a denpendência mencionada, execute via terminal
```
yarn add @babel/preset-env
```
Feito os comando acima, na raiz do projeto deve conter uma pasta chamada node_modules e um arquivo chamado yarn.lock
<br>
4. Caso use o git para versionamento, crie o arquivo .gitignore e informe o caminho da pasta node_modules para deixar o projeto mais leve ao versionar
```
node_modules/
```
5. Na raiz do projeto crie um arquivo chamado .babelrc e nesse arquivo digite
```
{
  "presets": [@babel/preset-env]
}
```
O preset determina o ambiente que o projeto está sendo desenvolvido (Node, ReactNative, entre outros). Ele vai converter as features do S6, S7, S8 para S5 que é o que a maioria dos navegadores entende.
<br>
6. Na raiz do projeto crie os arquivos index.html e main.js
<br>
7. No terminal, execute o seguinte comando
```
yarn add @babel/core
```
8. No arquivo package.json, crie um novo objeto com os seguintes dados
```
"scripts" : {
  "dev" : "babel ./main.js -o ./bundle.js"
}
```
Esse script irá criar um arquivo bundle com a interpretação do código feito no main da forma que o navegador irá entender
<br>
9. No terminal, execute o comando
```
yarn dev
```
Se todas as configurações e instalação de dependências estiverem corretas, o comando será executado no terminal sem falhas. O arquivo bundle será criado automaticamente e com o código digitado no main 'traduzido' para o navegador.
<br>
10. Para que a cada alteração não seja necessário rodar o comando yarn dev no navegador, acrescente -w ao final da regra do script em package.json
```
"scripts" : {
  "dev" : "babel ./main.js -o ./bundle.js -w"
}
```
Execute yarn dev novamente e agora ele ficará monitorando o código a cada alteração feita.
<br>
11. No arquivo index.html, acrescente o caminho do arquivo bundle.js para que o script interpretado seja executado ao abrir o arquivo.
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script src="./bundle.js"></script>
</body>
</html>
```

### Instalando Plugin REST / SPREAD

1. Via terminal, execute o comando
```
yarn add @babel/plugin-proposal-object-rest-spread
```
2. Dentro do arquivo .babelrc, insira um novo objeto referente a este plugin
```
{
	"presets" : ["@babel/preset-env"],
	"plugins" : ["@babel/plugin-proposal-object-rest-spread"]
}
```
Para que as alterações sejam recebidas, interrompa o yarn dev com o comando CTRL+C e confirme, e inicie o yarn dev novamente.


