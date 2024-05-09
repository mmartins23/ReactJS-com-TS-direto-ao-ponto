# Requisição GET com Axios e Fetch API

Vamos analisar detalhadamente como são feitas as solicitações GET com Axios e Fetch API nos exemplos fornecidos.

### Utilizando a Fetch API:

1. Importamos as funções `useState` e `useEffect` do React para gerenciar o estado e os efeitos colaterais dentro de componentes funcionais.

2. Definimos um componente funcional chamado `FetchPosts`.

3. Dentro do componente, declaramos dois estados usando o hook `useState`: `posts`, para armazenar os posts recuperados da API, e `error`, para armazenar mensagens de erro, caso ocorram.

4. Utilizamos o hook `useEffect` para executar uma função assíncrona sempre que o componente for montado (`[]` como segundo argumento indica que a função só será executada uma vez, quando o componente montar).

5. Dentro da função assíncrona `fetchPosts`, tentamos fazer uma requisição GET para a URL da API JSONPlaceholder utilizando `fetch("https://jsonplaceholder.typicode.com/posts")`.

6. Se a requisição for bem-sucedida, usamos `res.json()` para extrair e analisar o corpo da resposta como JSON.

7. Os dados recuperados são então atualizados no estado `posts` usando `setPosts(data)`.

8. Se ocorrer algum erro durante a requisição, capturamos e tratamos o erro usando um bloco `try...catch`, atualizando o estado `error` com a mensagem de erro.

### Utilizando o Axios:

1. Importamos as funções `useState` e `useEffect` do React e a biblioteca Axios.

2. Definimos um componente funcional chamado `AxiosPosts`.

3. Dentro do componente, declaramos os mesmos estados `posts` e `error` como no exemplo anterior.

4. Utilizamos o hook `useEffect` para executar uma função assíncrona sempre que o componente for montado.

5. Dentro da função assíncrona `axiosPosts`, fazemos uma requisição GET para a URL da API JSONPlaceholder utilizando `axios.get("https://jsonplaceholder.typicode.com/posts")`.

6. Se a requisição for bem-sucedida, os dados da resposta são acessados através de `res.data` e atualizados no estado `posts` usando `setPosts(res.data)`.

7. Se ocorrer algum erro durante a requisição, capturamos e tratamos o erro usando um bloco `try...catch`, atualizando o estado `error` com a mensagem de erro.

Ambos os exemplos compartilham a mesma estrutura básica: fazer uma solicitação GET para uma URL específica, processar os dados da resposta e atualizar o estado do componente de acordo com o resultado da solicitação. A principal diferença reside nas APIs utilizadas para fazer as solicitações GET: `fetch` no caso da Fetch API e `axios.get` no caso do Axios.