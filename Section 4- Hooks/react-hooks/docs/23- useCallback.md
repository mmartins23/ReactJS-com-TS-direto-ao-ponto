# useCallback

```jsx
import React, { useState, useCallback } from "react";

// Button component that only re-renders if its 'onClick' prop changes
const Button = React.memo(({ onClick, children }) => {
  console.log("Button rendered:", children);
  return <button onClick={onClick}>{children}</button>;
});

// Counter component that uses useCallback to pass an increment function to the button
const CallbackCounter = () => {
  const [counter, setCounter] = useState(0);

  // The 'increment' function is memoized with useCallback
  // It will only be recreated if 'counter' changes
  const increment = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <div>
      <p>Count: {counter}</p>
      {/* Button is a memoized component that only updates if 'increment' changes */}
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default CallbackCounter;
```

Esse trecho de código demonstra como usar o hook `useCallback` no React para otimizar o desempenho, memoizando uma função e garantindo que ela não seja recriada a cada renderização. Vamos detalhar passo a passo:

1. **Declarações de Importação**:
   - `import React, { useState, useCallback } from "react";`: Importa os hooks `useState` e `useCallback` da biblioteca React.

2. **Componente Botão**:
   - `Button`: Este é um componente funcional criado usando `React.memo`. Ele renderiza um elemento de botão com a função `onClick` fornecida como seu manipulador de clique. A propriedade `children` representa o conteúdo do botão.
   - `Button.displayName = 'Button';`: Define o nome de exibição do componente `Button`, que é útil para fins de depuração.

3. **Componente CallbackCounter**:
   - `CallbackCounter`: Este é outro componente funcional.
   - `useState(0)`: Inicializa uma variável de estado `counter` com um valor inicial de 0.
   - `useCallback`: Define uma função de retorno de chamada memoizada chamada `increment`. Esta função incrementa o estado `counter` em 1 sempre que é chamada. O array de dependências `[]` indica que as dependências da função não mudam, então ela será memoizada uma vez e reutilizada em renderizações posteriores.
   - O componente renderiza um parágrafo exibindo a contagem atual (`counter`) e um componente `Button`. A função `increment` é passada para a propriedade `onClick` do componente `Button`.

4. **Renderização**:
   - O componente `CallbackCounter` é exportado como a exportação padrão, tornando-o disponível para uso em outras partes da aplicação.

Em resumo, o componente `CallbackCounter` demonstra como usar o `useCallback` para memoizar uma função e passá-la como prop para um componente filho (`Button`). Essa otimização garante que a função não seja recriada desnecessariamente em cada renderização, melhorando o desempenho.