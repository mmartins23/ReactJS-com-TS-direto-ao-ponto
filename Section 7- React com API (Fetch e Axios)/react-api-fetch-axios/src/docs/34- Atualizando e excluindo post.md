# Atualizando e excluindo post (UPDATE/PUT e DELETE)

Vou explicar como é feita a atualização e exclusão de postagens nos componentes `PostManager` e `PostForm`.

### PostForm Component:

1. **handleSubmit Function**: Quando o formulário é submetido, a função `handleSubmit` é chamada. Se existir um post sendo editado (ou seja, `post` não é nulo), uma solicitação PUT é feita para atualizar o post existente na API JSONPlaceholder. Caso contrário, uma solicitação POST é feita para criar um novo post.

2. **Handling Success**: Se a solicitação for bem-sucedida, o post retornado pela API é passado para a função `onSuccess`, juntamente com a operação realizada ("add" para adição de postagem ou "update" para atualização de postagem). Os estados `title` e `body` são redefinidos para vazio após o envio bem-sucedido do formulário.

3. **handleDelete Function**: Uma função chamada `handleDelete` é definida para lidar com a exclusão de um post. Quando o botão "Deletar" é clicado, uma solicitação DELETE é feita para a URL do post específico na API JSONPlaceholder. Se a solicitação for bem-sucedida, o post é removido da lista de postagens através da função `onSuccess`.

### PostManager Component:

1. **State Declaration**: Além dos estados `posts` e `error`, o componente `PostManager` também declara dois novos estados: `selectedPost`, que armazena o post selecionado para edição ou exclusão, e `isEditing`, que controla se o formulário está em modo de edição.

2. **handleSuccess Function**: Esta função é chamada quando uma operação de adição, atualização ou exclusão de post é bem-sucedida. Dependendo da operação realizada, os estados `posts` são atualizados de acordo.

3. **handleEdit and handleCancelEdit Functions**: `handleEdit` é chamada quando o botão "Editar" é clicado em um post, e `handleCancelEdit` é chamada quando o botão "Cancelar" é clicado no formulário de edição. Ambas as funções atualizam os estados `selectedPost` e `isEditing`, controlando assim o estado do formulário.

4. **Rendering Delete Button**: O botão "Deletar" é renderizado no componente `PostForm` apenas se um post estiver sendo editado (ou seja, `post` não é nulo). Quando clicado, ele aciona a função `handleDelete` no componente `PostForm`.

Dessa forma, o componente `PostManager` controla a exibição e a interação do formulário de postagem, e o componente `PostForm` é responsável pela submissão de novas postagens, atualização de postagens existentes e exclusão de postagens. As operações são sincronizadas através das funções `onSuccess` e do estado `post` que é passado entre os componentes.