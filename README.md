# CLASSROOM-BOT

**BOT CRIADO TOTALMENTE PARA FINS DE ESTUDO DE AUTOMATIZAÇÃO DE SOFTWARE E PESQUISAS, faça sua tarefinha.**

Um bot feito para resolver exercicios e comentar a resolução no classroom de forma automática.

## REQUISITOS

<li>[NodeJS LTS](https://nodejs.org/en/download/) version</li>

## INSTALANDO AS DEPENDENCIAS

*Isso só é necessário na primeira execução do programa.*

Após instalar o NodeJS e ter baixado o bot, extraia os arquivos e clique duas vezes sobre o a arquivo **install.bat**

ou use o comando no terminal na pasta do bot.

```shell
npm install
```

## CONFIGURANDO O BOT

### Dados para login

Os dados para login ficam armazenados no arquivo **credencials.json** ou **credencials.template.json**.

```json
{
  "email": "<seu email>",
  "password": "<sua senha>"
}
```

Os seus dados não serão acessados por nenhum serviço externo, fique traquilo.

### Dados da sala do classroom

Os dados da sala ficam no **config.json**.

#### NÃO ALTERE O classroom_url

```json
{
  // não altere o valor do classroom_url
  "classroom_url": "https://accounts.google.com/signin/v2/identifier?service=classroom&passive=1209600&continue=https%3A%2F%2Fclassroom.google.com%2F%3Femr%3D0&followup=https%3A%2F%2Fclassroom.google.com%2F%3Femr%3D0&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
  "room_url": "<link da sala | EX: https://classroom.google.com/c/NzM4Mzg4ODkxNjVa>",
  "exercise_url": "<link do exercicio para ser resolvido | EX: https://classroom.google.com/u/2/c/NzM4Mzg4ODkxNjVa/a/MTMyNDI3Mzg2NDgz/details>"
}
```

Cuidado com os dados que vc vai colocar no **config.json** eles são ultilizados de forma direta no código.

## EXECUTANDO O BOT

Após ter instalado todas as dependencias e ter feito toda configuração corretamente, clique duas vezes sobre o a arquivo **run.bat**

ou use o comando no terminal na pasta do bot.

```shell
npm start
```

e veja acontecer

## EXEMPLO DE EXECUÇÃO

Exemplo realizado no terminal.

```shell
comecei!

fazendo login...
login realizado com sucesso!

entrando na sala...

o exercicio predefinido foi: https://classroom.google.com/u/2/c/NzM4Mzg4ODkxNjVa/a/MTMyNDI3Mzg2NDgz/details

SELECAO PARA PESQUISA:

[0]: Com base no modelo faça um plano de gerenciamento de riscos e evidencie os possíveis riscos que o seu projeto de software pode ter até a sua entrega final
[1]: Leve em consideração atuação cenário de pandemia
[2]: Observação:Será feito um Plano de Gerenciamento de Riscos por equipe
[3]: A equipe são a mesma que foram formadas em sala de aula

escolha o indice para pesquisar: 0

vc pode editar a resposta diretamente no navegador.
[1] para enviar / [0] para cancelar: 0

terminei, tchauzinho!
by Danilo XD 
```

A execução varia se a resolução aprensetar respostas que podem ser feitas de maneira mais simples e sucinta.
