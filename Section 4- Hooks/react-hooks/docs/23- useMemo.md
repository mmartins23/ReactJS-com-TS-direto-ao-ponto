# useMemo

No componente `UseMemoExample`, o hook `useMemo` é usado para memoizar o componente `ListNames` com base na lista de nomes `names`. Isso significa que o componente `ListNames` só será renderizado novamente quando a lista de nomes `names` mudar.

Aqui está como o `useMemo` foi usado:

1. **Uso do hook useMemo**:
   ```javascript
   const listWithNoRender = useMemo(() => <ListNames list={names} />, [names]);
   ```
   - `useMemo` recebe uma função de callback como primeiro argumento. Esta função é responsável por calcular o valor memoizado, que neste caso é o componente `ListNames`.
   - O segundo argumento de `useMemo` é uma lista de dependências. O componente `ListNames` será recalculado apenas quando as dependências mudarem. Neste caso, a lista de nomes `names` é a única dependência.

2. **Retorno do componente**:
   ```javascript
   return (
     <div className="App">
       <h1>{count}</h1>
       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
         Increase by 1
       </button>
       {/* Adiciona useMemo aqui */}
       {listWithNoRender}
     </div>
   )
   ```
   - O componente `ListNames` memoizado (`listWithNoRender`) é renderizado diretamente no JSX. Isso significa que ele será renderizado apenas uma vez, a menos que a lista de nomes `names` mude, evitando renderizações desnecessárias quando outros estados ou props mudarem.

No componente `ListNames`, não há mudança. Ele simplesmente recebe uma lista de nomes e os renderiza em uma lista `<ul>`. No entanto, seu console.log foi colocado dentro da função do componente para demonstrar que ele não é recriado a cada renderização do componente pai. Isso acontece devido ao uso do `useMemo` no componente pai.