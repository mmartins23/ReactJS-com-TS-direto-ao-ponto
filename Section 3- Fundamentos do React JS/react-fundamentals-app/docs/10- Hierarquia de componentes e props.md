# Hierarquia de componentes e props

Claro! Vamos criar um exemplo de hierarquia de componentes usando `ParentComponent` e `ChildComponent`, e depois vamos criar um componente `UserComponent` que recebe props como `name`, `age`, e `jobRole`.

### Hierarquia de Componentes:

Vamos começar com a hierarquia de componentes usando `ParentComponent` e `ChildComponent`. O `ParentComponent` será o componente pai que renderiza o `ChildComponent`.

```jsx
import React from 'react';

function ChildComponent() {
  return <p>Este é o componente filho.</p>;
}

function ParentComponent() {
  return (
    <div>
      <h1>Componente Pai</h1>
      <ChildComponent />
    </div>
  );
}

export default ParentComponent;
```

Neste exemplo, `ParentComponent` é o componente pai que renderiza o `ChildComponent`. Quando `ParentComponent` é renderizado, ele também renderiza o `ChildComponent` dentro de si.

### Props:

Agora, vamos criar o componente `UserComponent` que recebe props como `name`, `age` e `jobRole`.

```jsx
import React from 'react';

function UserComponent(props) {
  return (
    <div>
      <h2>Informações do Usuário</h2>
      <p>Nome: {props.name}</p>
      <p>Idade: {props.age}</p>
      <p>Cargo: {props.jobRole}</p>
    </div>
  );
}

export default UserComponent;
```

Agora, você pode usar o `UserComponent` em qualquer lugar do seu aplicativo e passar as props `name`, `age` e `jobRole` para exibir informações de usuário dinâmicas.

Por exemplo:

```jsx
import React from 'react';
import UserComponent from './UserComponent';

function App() {
  return (
    <div>
      <h1>Detalhes do Usuário</h1>
      <UserComponent name="Alice" age={30} jobRole="Desenvolvedora" />
      <UserComponent name="Bob" age={25} jobRole="Designer" />
    </div>
  );
}

export default App;
```

Neste exemplo, estamos renderizando dois `UserComponent`, um para Alice e outro para Bob, passando as props `name`, `age` e `jobRole`.

Essa é uma maneira básica de criar hierarquias de componentes e usar props no React JS. Esses conceitos são fundamentais para construir aplicações React escaláveis e reutilizáveis.