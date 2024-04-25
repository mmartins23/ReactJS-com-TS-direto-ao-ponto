# useState hook

O `useState` é um dos Hooks mais fundamentais do React, usado para adicionar o estado a componentes funcionais. Ele retorna um par de valores: o estado atual e uma função que permite atualizar esse estado. Vou explicar como usar o `useState` com exemplos de um `CounterComponent` e um `FormComponent`.

### CounterComponent usando useState:

Vamos criar um componente de contador simples usando o `useState`.

```jsx
import React, { useState } from 'react';

function CounterComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default CounterComponent;
```

Neste exemplo, `useState(0)` inicializa o estado do contador com o valor inicial de 0. A função `setCount` é usada para atualizar o estado do contador.

### FormComponent usando useState:

Agora, vamos criar um componente de formulário que captura o nome e o e-mail do usuário e os exibe no console quando o formulário é enviado.

```jsx
import React, { useState } from 'react';

function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormComponent;
```

Neste exemplo, `useState('')` inicializa o estado do nome e do e-mail como strings vazias. Quando o usuário digita no campo de entrada, o estado é atualizado usando a função `setName` e `setEmail`.

Quando o formulário é enviado, a função `handleSubmit` é chamada, que exibe o nome e o e-mail no console.

Esses são exemplos básicos de como usar o `useState` para adicionar estado a componentes funcionais no React. Ele permite que você crie componentes interativos e dinâmicos de forma simples e eficaz.