# Estruturando componentes

Vamos analisar a estruturação dos dois componentes:

### PostManager Component:

1. **State Declaration**: Dentro do componente `PostManager`, são declarados dois estados usando o hook `useState`: `posts` para armazenar as postagens recuperadas da API e `error` para armazenar mensagens de erro, caso ocorram.

2. **Effect for Fetching Posts**: Utiliza o hook `useEffect` para executar uma função assíncrona quando o componente é montado. Essa função, `axiosPosts`, faz uma solicitação GET para a URL da API JSONPlaceholder usando Axios. Os dados recuperados são então atualizados no estado `posts`. No entanto, `res.data.splice(0, 5)` é usado para limitar os resultados a apenas cinco postagens.

3. **Return Statement**: Retorna a estrutura do componente, que inclui um título, um componente `PostForm`, uma lista de postagens renderizadas e um botão "Editar" para cada postagem.

### PostForm Component:

1. **State Declaration**: Dentro do componente `PostForm`, são declarados dois estados usando o hook `useState`: `title` para armazenar o título da postagem e `body` para armazenar o conteúdo da postagem.

2. **Form Submission Handling**: Define uma função `handleSubmit` para lidar com a submissão do formulário. Neste caso, a função apenas previne o comportamento padrão de envio do formulário.

3. **Return Statement**: Retorna a estrutura do formulário, que inclui um campo de entrada para o título da postagem e um campo de texto para o conteúdo da postagem. O valor desses campos é vinculado aos estados `title` e `body` respectivamente. Quando os valores são alterados, os estados são atualizados por meio dos eventos `onChange`. Um botão de envio também é fornecido, embora sua funcionalidade ainda não tenha sido implementada.

Em resumo, o componente `PostManager` é responsável por gerenciar as postagens, incluindo a recuperação das postagens da API e a renderização delas, juntamente com um formulário para adicionar novas postagens, enquanto o componente `PostForm` é um formulário reutilizável para inserir novas postagens.