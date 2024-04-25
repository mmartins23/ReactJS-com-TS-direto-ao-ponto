# Expressões ternárias e listas

Em React, a renderização de `null` é usada quando você deseja que um componente não renderize nada. Isso pode ser útil em situações onde você deseja condicionalmente renderizar um componente com base em determinadas condições, mas não quer que o componente apareça na árvore de elementos DOM quando não for necessário. Vou explicar com um exemplo:


### Renderização condicional com `null`:

```jsx
import React from 'react';

function ComponenteComProp({ mostrar }) {
  if (mostrar) {
    return <div>O componente está visível!</div>;
  } else {
    return null; // Não renderiza nada se mostrar for false
  }
}

export default ComponenteComProp;
```

Neste exemplo, `ComponenteComProp` é um componente funcional que recebe uma prop `mostrar`. Se `mostrar` for verdadeiro, ele renderiza um `<div>` com o texto "O componente está visível!". Se `mostrar` for falso, ele retorna `null`, resultando em nenhum conteúdo renderizado.

Aqui está como você pode usar este componente em seu aplicativo React:

```jsx
import React from 'react';
import ComponenteComProp from './ComponenteComProp';

function App() {
  return (
    <div>
      <h1>Exemplo de Renderização null em React</h1>
      <ComponenteComProp mostrar={true} /> {/* Renderiza o componente */}
      <ComponenteComProp mostrar={false} /> {/* Não renderiza nada */}
    </div>
  );
}

export default App;
```

### Lists em React:

Agora, vamos dar uma olhada em como renderizar listas em React:

```jsx
import React from 'react';

function Lists() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>Listas em React</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
```

Neste exemplo, `items.map` é usado para iterar sobre a matriz `items` e retorna um elemento `<li>` para cada item. Cada item é renderizado com seu índice como chave (`key`). Isso garante que o React possa identificar de forma eficiente quais itens foram adicionados, removidos ou modificados na lista.