# Formulários e renderização condicional


Em React, os formulários funcionam de maneira semelhante aos formulários em HTML, mas com algumas diferenças na forma como o estado é gerenciado e como os eventos são manipulados. Vou explicar como funciona um formulário em React com um exemplo de um formulário que exibe o valor de um input no console ao ser submetido, além de exemplos de renderização condicional com props.

### Exemplo de Formulário em React:

Vamos começar com o exemplo do formulário:

```jsx
import React, { useState } from 'react';

function Formulario() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Valor do input:', inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Digite algo..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
```

Neste exemplo, utilizamos o hook `useState` para gerenciar o estado do input. Quando o valor do input é alterado, o estado é atualizado através da função `setInputValue`. Quando o formulário é submetido, a função `handleSubmit` é chamada, exibindo o valor do input no console.

### Exemplo de Renderização Condicional com Props:

Agora, vamos criar dois exemplos de renderização condicional com props.

#### Exemplo 1: WelcomeMessage Component

```jsx
import React from 'react';

function WelcomeMessage({ user }) {
  return (
    <div>
      {user && <h2>Welcome back, {user}!</h2>}
    </div>
  );
}

export default WelcomeMessage;
```

#### Exemplo 2: LoginButton Component

```jsx
import React from 'react';

function LoginButton({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Log out</p> : <p>Log in</p>}
    </div>
  );
}

export default LoginButton;
```

Estes componentes recebem props e fazem renderização condicional com base nessas props. Se `user` tiver um valor, o componente `WelcomeMessage` renderizará uma mensagem de boas-vindas. No caso do componente `LoginButton`, se `isLoggedIn` for `true`, ele renderizará "Log out", senão, renderizará "Log in".

Você pode usar esses componentes em conjunto com o formulário ou em qualquer parte do seu aplicativo React para implementar a lógica de renderização condicional com base em props.