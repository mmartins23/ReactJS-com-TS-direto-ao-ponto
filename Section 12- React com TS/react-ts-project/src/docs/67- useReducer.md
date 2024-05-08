# useReducer com TypeScript

### Explicação do `useReducer` em React com TypeScript:

O `useReducer` é um hook do React que é usado para gerenciar estados complexos em componentes. Enquanto o `useState` é útil para gerenciar estados simples, o `useReducer` é preferível para estados mais complexos ou quando há uma lógica de atualização mais complexa envolvida.

Ele segue o padrão de design do Reducer do Redux. Basicamente, você passa para ele uma função redutora que recebe o estado atual e uma ação e retorna o novo estado. Ele retorna um par de valores: o estado atual e uma função `dispatch` que você usa para enviar uma ação ao redutor.

Quando usar `useReducer`:

- **Estados complexos**: Quando o estado de um componente tem uma estrutura complexa ou envolve múltiplos subvalores.
- **Lógica de atualização complexa**: Quando a lógica para atualizar o estado é complicada e envolve muitas condições ou cálculos.

Aqui está uma explicação do código fornecido:

### Código 1: Counter2 Component

```typescript
import { useReducer } from "react";
import { counterReducer } from "../reducer/counterReducer";

const Counter2 = () => {
    const [count, dispatch] = useReducer(counterReducer, 0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({type: "increment"})}>Increase</button>
            <button onClick={() =>dispatch({type: "decrement"})}>Decrease</button>
        </div>
    )
}

export default Counter2;
```

Neste código:

- `useReducer(counterReducer, 0)`: Este trecho inicializa um estado de contador usando o hook `useReducer`. O primeiro argumento é a função `counterReducer`, que é chamada sempre que uma ação é despachada. O segundo argumento é o estado inicial, que é `0`.
  
- O estado do contador (`count`) é exibido dentro de um parágrafo.
  
- Há dois botões: "Increase" e "Decrease", cada um associado a uma função que chama o `dispatch`. O `dispatch` é uma função que aceita uma ação e envia essa ação para o redutor (`counterReducer`).

### Código 2: counterReducer

```typescript
import { CounterAction } from "../types/actions";

export const counterReducer = (state: number, action: CounterAction) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}
```

Neste código:

- `counterReducer`: É uma função pura que recebe o estado atual (`state`) e uma ação (`action`). Com base no tipo da ação, ele atualiza o estado do contador. Se a ação for do tipo `increment`, ele incrementa o estado. Se for do tipo `decrement`, ele decrementa o estado. Caso contrário, retorna o estado atual sem modificação.

### Código 3: CounterAction

```typescript
export type CounterAction = {type: "increment"} | {type: "decrement"};
```

Neste código:

- `CounterAction`: É uma definição de tipo que representa as ações possíveis para o contador. No caso, ele pode ser uma ação de `increment` ou de `decrement`, ambas com um campo `type` correspondente.