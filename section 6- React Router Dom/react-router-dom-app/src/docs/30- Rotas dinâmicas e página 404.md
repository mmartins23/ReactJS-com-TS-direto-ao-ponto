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

***

# Rotas Aninhadas

No exemplo fornecido, as rotas aninhadas são usadas para criar um roteamento hierárquico dentro do componente `Dashboard`. Vamos explicar como isso funciona:

1. **Rota Principal para o Dashboard**:
   - Primeiro, é definida uma rota principal para o `Dashboard` usando `<Route path="/dashboard/*" element={<Dashboard />} />`.
   - Esta rota captura qualquer URL que comece com "/dashboard/" e renderiza o componente `Dashboard`.

2. **Rotas Aninhadas no Componente Dashboard**:
   - Dentro do componente `Dashboard`, são definidas rotas aninhadas usando `<Route>` para as diferentes páginas ou seções do dashboard, como `Profile` e `Settings`.
   - Cada rota aninhada tem um caminho relativo à rota principal do `Dashboard`.

3. **Links para as Rotas Aninhadas**:
   - Dentro do componente `Dashboard`, são renderizados links usando `NavLink` para navegar entre as diferentes rotas aninhadas.
   - Os links são relativos à URL atual, então `to="profile"` e `to="settings"` correspondem aos caminhos relativos das rotas aninhadas definidas no passo anterior.

4. **Utilização do `Outlet`**:
   - O `Outlet` é um componente especial fornecido pelo React Router DOM que é usado para renderizar os componentes das rotas aninhadas.
   - No exemplo, `<Outlet />` é usado para renderizar dinamicamente os componentes das rotas aninhadas dentro do `Dashboard`.
   - Quando a URL corresponde à rota do `Dashboard`, o `Outlet` renderiza os componentes das rotas aninhadas dentro do `Dashboard`.

O `Outlet` serve como um ponto de saída para os componentes das rotas aninhadas dentro de um componente pai. Ele permite que você renderize dinamicamente os componentes das rotas aninhadas sem precisar especificar manualmente onde eles devem ser renderizados. Em vez disso, eles são renderizados automaticamente no local onde o `Outlet` é colocado dentro do componente pai.

***

# Page not Found

No aplicativo fornecido, quando uma página não é encontrada (erro 404), isso é tratado usando o componente `NotFound`. Vou explicar como isso foi feito:

1. **Definição do Componente NotFound**:
   - Um componente chamado `NotFound` é definido para lidar com as páginas não encontradas.
   - Este componente exibe uma mensagem de erro 404 e um link para retornar à página inicial.

2. **Roteamento para Páginas Não Encontradas**:
   - No componente `App`, é definida uma rota para páginas não encontradas dentro do roteamento para o `Dashboard`.
   - A rota para páginas não encontradas é definida usando `<Route path="*" element={<NotFound />} />`.
   - Isso significa que qualquer URL que não corresponda a nenhuma outra rota dentro do `Dashboard` será redirecionada para o componente `NotFound`.

3. **Renderização do Componente NotFound**:
   - Quando uma URL não corresponde a nenhuma outra rota dentro do `Dashboard`, o componente `NotFound` é renderizado.
   - O usuário verá a mensagem "404 - Page Not Found" juntamente com um link para retornar à página inicial.

Essa abordagem garante que qualquer URL que não corresponda a nenhuma rota específica dentro do `Dashboard` seja tratada corretamente, mostrando uma mensagem de erro apropriada ao usuário. Isso ajuda a melhorar a experiência do usuário, fornecendo feedback claro quando uma página não é encontrada e oferecendo uma maneira fácil de retornar à página inicial.