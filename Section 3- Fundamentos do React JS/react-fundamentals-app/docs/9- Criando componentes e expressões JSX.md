# Criando componentes e expressões JSX

Em React JS, você pode criar componentes como funções. Este é o método mais simples e moderno de definir componentes funcionais. Aqui está um exemplo de como você pode criar um componente como função:

```jsx
import React from 'react';

function MeuComponente() {
  return (
    <div>
      <h1>Olá, Mundo!</h1>
      <p>Este é o meu primeiro componente React.</p>
    </div>
  );
}

export default MeuComponente;
```

Neste exemplo, `MeuComponente` é um componente funcional que retorna JSX. Ele não tem estado interno ou ciclo de vida, tornando-o ideal para componentes simples que apenas renderizam conteúdo.

### Expressões JSX:

O JSX (JavaScript XML) é uma extensão de sintaxe que permite escrever marcação HTML dentro do JavaScript. Ele simplifica a criação de interfaces de usuário no React JS. Aqui está um exemplo de como você pode usar expressões JSX dentro de um componente:

```jsx
import React from 'react';

function MeuComponente() {
  const nome = 'João';
  const elemento = <h2>Olá, {nome}!</h2>;

  return (
    <div>
      {elemento}
      <p>Este é um parágrafo JSX.</p>
    </div>
  );
}

export default MeuComponente;
```

Neste exemplo, `elemento` é uma expressão JSX que usa a variável `nome` para exibir uma mensagem personalizada. O componente `MeuComponente` renderiza esse elemento JSX juntamente com um parágrafo JSX dentro de um `<div>`.

Esses são os fundamentos de criar componentes como funções e usar expressões JSX no React JS. Esses conceitos são amplamente utilizados para desenvolver interfaces de usuário dinâmicas e reativas em aplicações React.