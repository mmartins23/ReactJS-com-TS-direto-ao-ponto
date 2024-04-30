# Context API

A Context API no React é uma ferramenta que permite o compartilhamento de dados entre componentes em diferentes níveis da árvore de componentes, sem a necessidade de passar props manualmente através de cada nível intermediário. Ela é especialmente útil em situações onde você precisa compartilhar o mesmo estado entre componentes que não estão diretamente relacionados ou próximos na hierarquia de componentes.

Vamos explicar como a Context API está sendo usada nos componentes fornecidos:

1. **Criação e fornecimento do contexto (MyContextProvider)**:

```javascript
import React, { createContext, useState } from "react";

// Context creation
export const MyContext = createContext();

// Provider component that encapsulates its children by providing the context
export const MyContextProvider = ({ children }) => {
    const [message, setMessage] = useState("Initial message");

    // The value that will be passed to the consumers of the context
    const contextValue = {
        message,
        setMessage,
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};
```

- Um contexto é criado usando a função `createContext()` e exportado como `MyContext`.
- Um componente `MyContextProvider` é definido, que encapsula seus filhos e fornece o contexto. Ele mantém o estado `message` usando o hook `useState` com o valor inicial "Initial message".
- O valor do contexto é definido como um objeto contendo o estado `message` e a função `setMessage` para atualizar o estado.
- Dentro do componente, o contexto é fornecido através de `<MyContext.Provider>` com o valor `contextValue` definido anteriormente.

2. **Consumo do contexto (ContextValue)**:

```javascript
import  { useContext } from "react";
import { MyContext } from "/src/contexts/MyContext"; // Adjust the import path according to the location of your context file

const ContextValue = () => {
  // Use useContext to access the current value of the MyContext context
  const { message } = useContext(MyContext);

  return <div>The context value is: {message}</div>;
};

export default ContextValue;
```

- O componente `ContextValue` usa o hook `useContext` para acessar o valor atual do contexto `MyContext`.
- Dentro do componente, `message` é extraído do contexto e renderizado em um elemento `<div>`.

3. **Atualização do contexto (ChildComponent)**:

```javascript
import { useContext } from "react";
import { MyContext } from "../contexts/MyContext"; // Import the context provider

// Component that consumes the context
const ChildComponent = () => {
  // Access the context
  const { message, setMessage } = useContext(MyContext);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("New message")}>
        Update Message
      </button>
    </div>
  );
};

export default ChildComponent;
```

- O componente `ChildComponent` também usa o hook `useContext` para acessar o valor do contexto `MyContext`.
- Dentro do componente, `message` e `setMessage` são extraídos do contexto.
- O componente renderiza `message` em um elemento `<p>` e inclui um botão que, quando clicado, chama a função `setMessage` para atualizar o valor do contexto para "New message".

Em resumo, a Context API permite que o valor do contexto seja definido em um componente pai e acessado por componentes filhos sem a necessidade de passar props manualmente entre eles. Isso simplifica a passagem de dados em componentes e melhora a organização do código, especialmente em casos onde múltiplos componentes precisam acessar o mesmo estado global.