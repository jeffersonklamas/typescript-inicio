## TypeScript - Iniciando a trilha de conhecimento.

Se cria um arquivo em `TypeScript` E após o desenvolvimento é transpilado para `JavaScript`, considerando que o navegador não lê `TypeScript`.

Para instalar o `TypeScript`  vá até o site oficial  do [TypeScript Documentação Oficial](https://www.typescriptlang.org/)

use o comando: 

```
$ npm install typescript --save-dev
```

Para instalar global, caso queira pode instalar direto com o camando abaixo:

```
$ npm install -g typescript
```

Para verificar se o `typeScript`  esta instalado, execute o comando abaixo:

```
$ tsc -v
```

Ou somente `tsc` que irá mostrar uma série de possibilidades que você poderá usar.

Para rodar o `TypeScript`no teu projeto, vá na pasta onde criou o projeto e execute o comando:

```
$ tsc --init
```

Ele irá criar um arquivo  de nome `tsconfig.json` este é um arquivo onde vem pré configurado regras básicas para o `typescript`, você poderá ir acrescentando mais regras conforme necessidade.

Após você criar seu arquivo `typescript`, lembre criar arquivo com extensão `NaNaNa.ts` e o mesmo estiver ok, usar o comando `ts`no terminal onde teu projeto está criado e será criado um arquivo já convetido em `JavaScript` , exemplo:  `NaNaNa.js`, este é arquivo que será lido pelo browser.

### Tipos Básicos

Para se aprofundar nos **tipos básicos** acessar a documentação oficial no site [TypeScript Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

