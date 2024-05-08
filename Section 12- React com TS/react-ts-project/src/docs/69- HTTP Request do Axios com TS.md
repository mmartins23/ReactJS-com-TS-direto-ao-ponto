# Requisições HTTP do Axios com TypeScript:

O Axios é uma biblioteca JavaScript popular usada para fazer requisições HTTP a servidores web. Com TypeScript, você pode adicionar tipagem estática às requisições HTTP para melhorar a segurança e a legibilidade do código.

Ao usar Axios com TypeScript, você pode definir interfaces ou tipos para os dados que espera receber da API. Isso ajuda a garantir que os dados retornados estejam no formato esperado e fornece recursos de autocompletar e verificação de tipo durante o desenvolvimento.

Aqui está uma explicação detalhada do código fornecido:

### Código:

```typescript
import { useEffect, useState } from "react";
import axios from "axios";

// Definição de tipo para a estrutura dos dados dos posts
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Componente funcional ShowPosts
const ShowPosts = () => {
    // Definição de estados para posts e status de carregamento
    const [posts, setPosts] = useState<Post[]>([]); // Inicializado com um array vazio de posts
    const [loading, setLoading] = useState(true); // Inicializado como true para indicar que está carregando

    // useEffect hook para executar a busca dos posts quando o componente montar
    useEffect(() => {
        // Função assíncrona para buscar os posts da API
        const searchPosts = async () => {
            try {
                // Requisição GET para a API utilizando Axios
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                
                // Atualiza o estado com os dados dos posts (apenas os 5 primeiros)
                setPosts(res.data.slice(0, 5));
            } catch (error) {
                // Captura e trata qualquer erro que ocorra durante a requisição
                console.log(error);
            } finally {
                // Define o status de carregamento como false após a requisição, indicando que terminou
                setLoading(false)
            }
        }
        
        // Chama a função de busca dos posts quando o componente é montado (com array de dependência vazio para garantir que seja chamado apenas uma vez)
        searchPosts();
    }, []);

    // Renderização do componente
    return (
        <div>
            {/* Título da lista de posts */}
            <h2>Posts List</h2>
            {/* Condicional de renderização: Se loading for true, exibe mensagem de carregamento, senão, exibe a lista de posts */}
            {loading ? (<p>Loading posts ...</p>) : (
                <ul>
                    {/* Mapeia cada post no array de posts e renderiza cada um como um item de lista */}
                    {posts.map(post => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div> 
    );
}

// Exporta o componente ShowPosts como padrão
export default ShowPosts;
```

### Explicação:

1. **Importações**: O código começa com as importações necessárias do React e do Axios.

2. **Definição de Tipo**: A interface `Post` é definida para representar a estrutura dos dados dos posts que serão recebidos da API. Isso garante que os dados estejam tipados corretamente.

3. **Componente `ShowPosts`**: É um componente funcional que renderiza uma lista de posts.

4. **useState**: Dois estados são definidos usando o hook `useState`:
   - `posts`: Armazena os dados dos posts obtidos da API.
   - `loading`: Indica se a requisição está em andamento ou não.

5. **useEffect**: O hook `useEffect` é usado para executar uma ação (buscar os posts da API) quando o componente é montado pela primeira vez. Como o segundo argumento é um array vazio (`[]`), isso garante que o efeito seja executado apenas uma vez, quando o componente é montado.

6. **axios.get**: Dentro da função assíncrona `searchPosts`, uma requisição GET é feita para a URL da API usando o Axios. Os dados são então armazenados no estado `posts` após a resposta ser recebida.

7. **Condicional de Renderização**: Se `loading` for verdadeiro, uma mensagem de carregamento é exibida. Caso contrário, a lista de posts é renderizada.

8. **Mapeamento dos Posts**: Se houver posts disponíveis, eles são mapeados e renderizados como itens de lista (`<li>`), exibindo o título e o corpo de cada post.

9. **Exportação**: O componente `ShowPosts` é exportado como o componente padrão deste arquivo.

Em resumo, este código mostra como fazer uma requisição HTTP usando o Axios em um componente React com TypeScript. Ele busca posts de uma API, atualiza o estado do componente com os dados recebidos e renderiza a lista de posts na interface do usuário.