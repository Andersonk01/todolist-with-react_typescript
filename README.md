# To-Do List App

Este projeto é um aplicativo simples de Lista de Tarefas construído utilizando React. Ele permite aos usuários adicionar tarefas e deletar ao serem concluídas. O aplicativo utiliza o gerenciamento de estado do React para atualizar e exibir dinamicamente as tarefas.

## Funcionalidades

- Adicionar tarefas: Insira uma descrição da tarefa no campo de entrada e pressione o botão "🚀" ou pressione Enter para adicioná-la à lista.
- Deletar tarefas concluídas: Clique no botão "✔" ao lado de uma tarefa para excluí-la da lista.

## Como Utilizar

1. Clone o repositório para a sua máquina local.
2. Navegue até o diretório do projeto utilizando o terminal.
3. Execute `yarn` para instalar as dependências necessárias.
4. Execute `yarn dev` para iniciar o servidor de desenvolvimento.
5. Abra o seu navegador web e acesse `http://localhost:3000` para utilizar o aplicativo Lista de Tarefas.

## Estrutura do Projeto

- `src/components/CardMain.tsx`: Este componente representa a seção principal do aplicativo e contém a lógica para adicionar e deletar tarefas.
- `src/styles.css`: Este arquivo contém os estilos do aplicativo.

## Tecnologias Utilizadas

- Vite: Um build tool que oferece uma configuração rápida para o desenvolvimento de aplicações web.
- React: Uma biblioteca JavaScript para construção de interfaces de usuário.
- TypeScript: Um superset do JavaScript que adiciona tipos estáticos.
- CSS: Cascading Style Sheets para estilização do aplicativo.

## Explicação do Código

- O aplicativo utiliza o hook `useState` do React para gerenciar o estado das tarefas, seus IDs e o campo de entrada.
- O estado `counter` é utilizado para manter o controle dos IDs das tarefas, permitindo a identificação e manipulação correta das tarefas na lista.
- A função `handleSetTask` atualiza a descrição da tarefa no estado conforme o usuário digita no campo de entrada.
- A função `handleSubmit` adiciona uma nova tarefa à lista se a entrada não estiver vazia.
- A função `handleDeleteTask` remove uma tarefa da lista quando o botão de deleção é clicado.
- A função `handleKeyPress` permite que o usuário pressione Enter para adicionar uma tarefa.
