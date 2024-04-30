# Custom Hook

Um custom hook é uma função JavaScript que utiliza um ou mais hooks do React (ou outros custom hooks) para encapsular lógica reutilizável em componentes funcionais. Aqui está um exemplo de um custom hook simples que retorna o estado atual da janela (largura e altura):

```javascript
import { useState, useEffect } from 'react';

// Custom hook para obter a largura e altura da janela
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Adiciona um event listener para o evento de resize da janela
    window.addEventListener('resize', handleResize);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
```

Este hook `useWindowDimensions` retorna um objeto contendo a largura e altura da janela. Ele utiliza os hooks `useState` e `useEffect` para gerenciar o estado e lidar com a atualização do tamanho da janela.

Você pode usar este hook em qualquer componente funcional para acessar as dimensões da janela, assim:

```javascript
import React from 'react';
import useWindowDimensions from './useWindowDimensions';

const MyComponent = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default MyComponent;
```

Dessa forma, você pode reutilizar a lógica de obter as dimensões da janela em qualquer componente funcional, mantendo seu código mais limpo e modular.