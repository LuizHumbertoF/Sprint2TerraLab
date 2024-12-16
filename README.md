# DESAFIO TYPESCRIPT

1. TypeScript é uma extensão do JavaScript que adiciona recursos como tipagem estática, interfaces, classes e herança, permitindo maior segurança e escalabilidade no desenvolvimento de aplicações. Ele é compilado para JavaScript puro, sendo compatível com qualquer ambiente que suporte JavaScript.

2. Os tipos básicos do TypeScript incluem:

number: Para números inteiros ou de ponto flutuante.
string: Para cadeias de caracteres.
boolean: Para valores lógicos verdadeiro ou falso.
any: Permite qualquer tipo.
void: Para funções que não retornam valor.
undefined e null: Representam valores indefinidos ou nulos.
array: Para listas de elementos de um tipo específico.
tuple: Para arrays com número fixo de elementos e tipos definidos.
enum: Para conjuntos de valores nomeados.
never: Para funções que nunca retornam.
object: Para objetos que não são tipos primitivos.

3. Uma interface define a forma de um objeto, especificando seus campos e tipos. É usada para garantir que um objeto ou classe siga um contrato predefinido, aumentando a consistência e organização no código.

4. Uma classe é um modelo que encapsula propriedades e comportamentos de objetos, permitindo a criação de instâncias com características definidas. As classes seguem os princípios da Programação Orientada a Objetos (POO) e suportam métodos, construtores e modificadores de acesso.

5. Herança é um mecanismo da POO em que uma classe pode herdar propriedades e métodos de outra classe, promovendo o reaproveitamento de código e a extensão de funcionalidades.

6. Tipagem estática: Detecta erros em tempo de compilação.
Facilidade de manutenção: Ajuda a organizar e refatorar projetos grandes.
Melhor suporte do editor: Oferece autocompletar e verificação de tipos.
Suporte a POO: Implementação de conceitos como classes e herança.
Escalabilidade: Ideal para projetos de grande porte e trabalho em equipe.
Compatibilidade: Permite o uso de código JavaScript e facilita a transição.
Organização: Oferece módulos, namespaces e integração com bibliotecas.


## Instruções
Para executar o projeto, primeiro rode o comando: ```npm i``` para baixar as dependências do projeto.

A função `uuidv4` serve apenas para gerar uma string que será usada como o id quando necessário.

Para compilar e rodar o projeto você primeiro deve executar o comando `npx tsc` para transformar os arquivos `.ts` em `.js`.
Depois disso, os arquivos compilados estarão na pasta `dist`. Para executar, basta executar o seguinte comando: `node ./dist/index.js`.

Decerto algumas dúvidas irão surgir. Não se desespere, tome um ar, tente resolver com calma as questões, e, caso se veja sem saída, peça ajuda :).

## Questões teóricas

- [ ] O que exatamente é o Typescript?

- [ ] Descreva os tipos básicos do Typescript.

- [ ] O que é uma interface?

- [ ] O que é uma classe?
  
- [ ] O que é a herança?
  
- [ ] Quais as vantagens de usar o Typescript ao invés de somente o Javascript?

## Questões práticas
- [ ] Agora que você é bem familiarizado com o Typescript, vamos criar um simples projeto: <br>
Primeiro, clone o repositório anexado em sua máquina;
Como deve ter notado, na pasta `src` temos uma pasta `model` e um arquivo `index.js`. Por enquanto apenas guarde essas informações;

- [ ] Comece pelo arquivo `users.js` na pasta `models`. Nele, você deverá adicionar tipagem para as funções e também para o user. Antes de mais nada renomeie o arquivo para `users.ts`. Um user possui os seguintes atributos: `id`, `name`, `age` e `email`. Use de seu conhecimento na criação de interfaces para resolver esta questão;
  
- [ ] Agora, indo para o arquivo `bankAccount.js` na pasta `models`, você deverá adicionar tipagem para as funções e também para a bankAccount. Como na questão anterior, renomeie o arquivo para `bankAccount.ts`. Nessa questão você deverá identificar quais são os atributos da bankAccount de acordo com o que há disponível nas funções. De novo, use seus conhecimentos sobre interfaces e typescript para resolver a questão.

- [ ] Após ter feito a tipagem dos arquivos da pasta `models` é hora de resolver os erros do arquivo `index.js`. Comece trocando sua extensão para `index.ts`. Você logo verá que alguns erros estão acontecendo. Antes não seria possível identificá-los, pois nenhum dos arquivos possuía tipagem. O que você precisa fazer agora é basicamente corrigir os erros de acordo com o que o intellisense do seu editor de códigos indicar. 

- [ ] Com os erros resolvidos, precisamos apenas testar o código e executar a função de `withdraw` e a função de `deposit` da `bankAccount`. Para isso, primeiro deposite a quantia de 1000 unidades monetárias (um) e faça um saque de 200um. Para verificar se deu tudo certo, use a função `getBankAccountInfo` e dê um `console.log` na conta obtida.

## Desafio extra
- [ ] Refatore o projeto, mas usando classes para criar os `users` e as `bankAccounts`;