# Adicionando post (POST)

Claro! Vou explicar como é feita a adição de um novo post (POST) nos componentes `PostManager` e `PostForm`.

### PostForm Component:

1. **handleSubmit Function**: Quando o formulário é submetido, a função `handleSubmit` é chamada. Esta função é assíncrona (`async`) para permitir o uso do `await` para aguardar a resposta da solicitação POST.

2. **Creating New Post Object**: Dentro de `handleSubmit`, um novo objeto `newPost` é criado com os campos `title`, `body` e `userId`. Esses campos são preenchidos com os valores dos estados locais `title` e `body`.

3. **POST Request**: Em seguida, uma solicitação POST é feita para a URL da API JSONPlaceholder usando o Axios. O novo post é enviado como dados na solicitação.

4. **Handling Success**: Se a solicitação for bem-sucedida, o novo post retornado pela API é passado para a função `onSuccess`, juntamente com a operação realizada (que neste caso é "add"). Esta função é passada como uma propriedade para o componente `PostForm` a partir do componente `PostManager`.

### PostManager Component:

1. **handleSuccess Function**: No componente `PostManager`, uma função chamada `handleSuccess` é definida para lidar com o sucesso da adição de um novo post. Esta função é chamada quando `onSuccess` é acionada no componente `PostForm`.

2. **Updating Post List**: Dentro de `handleSuccess`, o novo post é adicionado à lista existente de posts usando o método `setPosts`. Como queremos que o novo post seja exibido no topo da lista, usamos a função de atualização do estado que recebe o estado anterior `currentPosts` e adicionamos o novo post ao início.

Dessa forma, quando um novo post é enviado com sucesso pelo formulário, ele é adicionado à lista de posts existente no componente `PostManager` e renderizado na interface do usuário.

Por exemplo, se um novo post for submetido com título "Novo Post" e conteúdo "Conteúdo do novo post", ele será adicionado à lista de posts existente no topo, e os componentes `PostManager` e `PostForm` serão atualizados para refletir isso.