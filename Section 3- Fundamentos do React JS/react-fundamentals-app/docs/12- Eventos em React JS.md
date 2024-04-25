# Eventos no React JS

Em React, os eventos são tratados de forma semelhante aos eventos em JavaScript puro, mas com algumas diferenças sutis devido à natureza declarativa do React. Vou explicar como lidar com eventos em React com dois exemplos: um exemplo de passagem de um evento para um botão após um clique e outro exemplo de passagem de uma função de um componente pai para um componente filho para manipular um evento de clique.

### Exemplo 1: Passando um Evento para um Botão

Neste exemplo, vamos criar um componente `ButtonComponent` que aceita uma função `onClick` como propriedade e a associa ao evento de clique de um botão.

```jsx
import React from 'react';

function ButtonComponent(props) {
  return (
    <button onClick={props.onClick}>
      Clique aqui
    </button>
  );
}

export default ButtonComponent;
```

Agora, podemos usar este componente em outro lugar e passar uma função que será executada quando o botão for clicado.

```jsx
import React from 'react';
import ButtonComponent from './ButtonComponent';

function App() {
  const handleClick = () => {
    alert('O botão foi clicado!');
  };

  return (
    <div>
      <h1>Exemplo de Passagem de Evento para um Botão</h1>
      <ButtonComponent onClick={handleClick} />
    </div>
  );
}

export default App;
```

### Exemplo 2: Passando uma Função do Pai para o Filho para Manipular um Evento de Clique

Neste exemplo, vamos criar um componente `ChildComponent` que aceita uma função `onClick` como propriedade e a associa ao evento de clique de um botão. Este componente será usado dentro de um componente pai `ParentComponent`, que fornece a função de manipulação de evento.

```jsx
import React from 'react';

function ChildComponent(props) {
  return (
    <button onClick={props.onClick}>
      Clique aqui
    </button>
  );
}

export default ChildComponent;
```

Agora, podemos usar este componente `ChildComponent` dentro de `ParentComponent` e passar uma função que será executada quando o botão for clicado.

```jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const handleClick = () => {
    alert('O botão foi clicado!');
  };

  return (
    <div>
      <h1>Exemplo de Passagem de Função de Pai para Filho para Manipular um Evento de Clique</h1>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
```

Em ambos os exemplos, estamos passando uma função como propriedade para um componente filho, permitindo que o componente filho manipule eventos de clique. Essa é uma maneira comum de lidar com eventos em React, permitindo que componentes interajam entre si de forma dinâmica e reativa.