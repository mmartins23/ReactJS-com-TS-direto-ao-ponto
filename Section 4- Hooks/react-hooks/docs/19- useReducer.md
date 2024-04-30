# useReducer

O `useReducer` é um dos hooks oferecidos pelo React que permite a você gerenciar o estado de um componente utilizando um conceito conhecido como "reducer pattern". Esse hook é semelhante ao `useState`, mas é mais adequado para casos em que o estado do componente é mais complexo e pode ter múltiplos valores ou requer lógica de atualização mais sofisticada.

Aqui está uma explicação detalhada sobre o `useReducer`:

1. **Sintaxe**:
   ```javascript
   const [state, dispatch] = useReducer(reducer, initialState);
   ```
   - `state`: O estado atual do componente.
   - `dispatch`: Uma função que permite despachar ações para atualizar o estado.
   - `reducer`: Uma função pura que especifica como o estado deve ser atualizado em resposta a diferentes ações.
   - `initialState`: O estado inicial do componente.

2. **Reducer**:
   - O reducer é uma função pura que recebe dois argumentos: o estado atual e uma ação, e retorna o novo estado. A ação é um objeto que geralmente contém um tipo e, opcionalmente, outros dados relevantes para a atualização do estado.
   - O reducer é responsável por calcular o próximo estado com base na ação recebida. Ele define como o estado deve ser atualizado em resposta a diferentes tipos de ação.

3. **Despachando ações**:
   - Para atualizar o estado, você despacha uma ação utilizando a função `dispatch`. A ação geralmente é um objeto com uma propriedade `type` que indica o tipo de ação a ser executada e, opcionalmente, outras propriedades com dados relevantes para a atualização do estado.
   - Quando `dispatch` é chamado, ele passa a ação para o reducer, que calcula o próximo estado com base na ação e retorna o novo estado.

4. **Benefícios**:
   - `useReducer` é útil quando você tem um estado complexo que envolve múltiplos valores relacionados.
   - Ele facilita a separação da lógica de atualização do estado da lógica de renderização, especialmente para estados mais complexos.
   - Ele pode ser mais eficiente em alguns casos, especialmente quando a lógica de atualização do estado envolve operações complexas ou dependências entre valores de estado.

Em resumo, o `useReducer` é um hook do React que permite gerenciar o estado de um componente de forma mais sofisticada, utilizando um padrão de reducer para atualizar o estado em resposta a diferentes ações. Ele é particularmente útil para estados complexos ou lógica de atualização mais sofisticada.

***

Aqui está um exemplo de como você pode criar um componente de contador em React usando o hook `useReducer`:

```javascript
import React, { useReducer } from 'react';

// Definição do reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
};

// Componente do contador
const Counter = () => {
  // Inicialização do estado usando useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default Counter;
```

Neste exemplo, nós:

1. Definimos um reducer que especifica como o estado do contador deve ser atualizado em resposta a diferentes ações (`increment`, `decrement`, `reset`).
2. Inicializamos o estado do contador usando `useReducer`, fornecendo o reducer e o estado inicial `{ count: 0 }`.
3. Renderizamos o estado atual do contador e três botões que despacham ações para o reducer quando clicados, atualizando assim o estado do contador.