# Rotas Dinamicas

No componente `App`, o roteamento dinâmico foi utilizado para renderizar o componente `TaskDetails` com base nos parâmetros da URL. Vou explicar como isso foi feito:

1. **Definição das Rotas Estáticas**:
   - Inicialmente, rotas estáticas são definidas para as páginas Home, About, Contact e Login. Isso é feito usando o componente `Route` fornecido pelo React Router DOM.

2. **Links para Tarefas Dinâmicas**:
   - No componente `App`, são renderizados links dinâmicos para as tarefas, onde o `taskId` é passado como parâmetro na URL.
   - Por exemplo, `Link to={`/tasks/1`}>Tarefa 1</Link>` renderiza um link para a tarefa com o ID 1.

3. **Definição da Rota Dinâmica**:
   - Uma rota dinâmica é definida utilizando `Route path="/tasks/:taskId"`. O `:taskId` indica que este é um parâmetro dinâmico na URL.
   - Quando a URL corresponde a esta rota, o componente `TaskDetails` é renderizado.

4. **Utilização do `useParams`**:
   - No componente `TaskDetails`, o hook `useParams` é utilizado para acessar os parâmetros da URL.
   - O parâmetro `taskId` é obtido através de `let { taskId } = useParams()`.

5. **Renderização dos Detalhes da Tarefa**:
   - Dentro do componente `TaskDetails`, você pode usar o `taskId` para buscar os detalhes da tarefa correspondente.
   - Neste exemplo, apenas o ID da tarefa é exibido, mas normalmente você faria uma busca com esse ID para recuperar os detalhes completos da tarefa.

Essa abordagem permite que você crie um sistema de roteamento dinâmico, onde os detalhes da página são renderizados com base nos parâmetros da URL, neste caso, o ID da tarefa. Isso oferece flexibilidade para lidar com diferentes informações ou recursos com base em diferentes parâmetros na URL.