# Busca e filtro por categorias

Esse aplicativo possui uma barra de pesquisa com uma caixa de texto, um botão de pesquisa e um menu suspenso para selecionar categorias. Quando o usuário insere texto na caixa de pesquisa e pressiona o botão de pesquisa, ou seleciona uma categoria no menu suspenso, o aplicativo busca fotos correspondentes à consulta ou categoria selecionada na API do Unsplash.

Vou explicar o funcionamento detalhado:

### Componente `SearchBar`

Este componente é responsável por exibir a barra de pesquisa e o menu suspenso de categorias. Ele recebe três funções de callback como propriedades: `setQuery`, `setCategory` e `setActivateSearch`, que serão chamadas para atualizar o estado do aplicativo quando o usuário interagir com a barra de pesquisa ou selecionar uma categoria.

- **Caixa de Texto**: Quando o usuário digita na caixa de texto, o estado `query` é atualizado com o valor digitado.
- **Botão de Pesquisa**: Quando o usuário clica no botão, a função `setActivateSearch` é chamada para sinalizar ao aplicativo que uma pesquisa deve ser realizada.
- **Menu Suspenso de Categorias**: Quando o usuário seleciona uma categoria, a função `setCategory` é chamada para atualizar o estado da categoria selecionada.

### Função `fetchData`

Essa função é responsável por fazer solicitações para a API do Unsplash com base nos parâmetros `query` e `category`.

- **Parâmetros `query` e `category`**: Se `query` ou `category` forem fornecidos, a função constrói uma consulta de pesquisa combinando `query` e `category` ou usando apenas `category` se `query` estiver vazio.
- **Solicitação à API do Unsplash**: A função faz uma solicitação GET para a API do Unsplash, passando a consulta de pesquisa como parâmetro. Dependendo se é uma pesquisa por categoria ou não, a URL da solicitação é ajustada.
- **Atualização do Estado**: Quando a resposta da API é recebida, as fotos correspondentes são definidas no estado `photos`.

### Componente `App`

Este componente é o componente principal do aplicativo e gerencia o estado global do aplicativo.

- **Estados Gerenciados**:
  - `query`: O texto atualmente digitado na caixa de pesquisa.
  - `category`: A categoria selecionada no menu suspenso.
  - `photos`: A lista de fotos retornadas pela API.
  - `photoZoomed`: A foto atualmente ampliada.
  - `activateSearch`: Sinalizador para indicar se uma pesquisa deve ser ativada.

- **Efeito `useEffect` Inicial**: Quando o componente é montado, um efeito `useEffect` é acionado para chamar `fetchData` com os valores atuais de `query` e `category`. Isso garante que as fotos sejam carregadas quando o aplicativo for inicializado.
- **Efeito `useEffect` para Ativação da Pesquisa**: Este efeito é acionado sempre que `activateSearch` muda. Se `activateSearch` for verdadeiro, ele chama `fetchData` com os valores atuais de `query` e `category` e em seguida, redefine `activateSearch` para falso.

### Fluxo Geral

1. O usuário interage com a barra de pesquisa digitando texto ou selecionando uma categoria.
2. Quando o usuário pressiona o botão de pesquisa ou seleciona uma categoria, `activateSearch` é definido como verdadeiro.
3. Isso aciona o efeito `useEffect` que chama `fetchData` com os valores atuais de `query` e `category`.
4. `fetchData` faz solicitações à API do Unsplash com base nos parâmetros `query` e `category`.
5. Quando a resposta da API é recebida, as fotos correspondentes são atualizadas no estado `photos`.
6. O componente `PhotoList` renderiza as fotos na interface do usuário.

Esse é o fluxo básico de como a busca e o filtro por categorias são implementados neste aplicativo.