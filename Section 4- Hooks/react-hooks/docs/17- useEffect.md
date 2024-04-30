# useEffect

Vou explicar como o `useEffect` foi usado neste componente, passo a passo:

1. **Importação de useState e useEffect**:
   ```javascript
   import { useState, useEffect } from "react";
   ```
   - Aqui, estamos importando os hooks `useState` e `useEffect` do pacote React, que serão usados neste componente.

2. **Declaração do componente Timer**:
   ```javascript
   const Timer = () => {
       // Declaração do estado 'seconds' e função 'setSeconds' para atualizar o estado
       const [seconds, setSeconds] = useState(0);
   ```
   - O componente Timer é definido como uma função de componente, que usa o hook `useState` para declarar uma variável de estado `seconds` e uma função `setSeconds` para atualizar esse estado. O valor inicial de `seconds` é definido como 0.

3. **Uso do useEffect**:
   ```javascript
   useEffect(() => {
       console.log('Componente mounted');

       const intervalId = setInterval(() => {
           setSeconds((prevSeconds) => prevSeconds + 1);
       }, 1000);

       return () => {
           console.log('Componente unmounted');
           clearInterval(intervalId);
       }
   }, [])
   ```
   - O `useEffect` é usado para definir um efeito secundário no componente. Ele é chamado após a renderização inicial do componente devido ao segundo argumento ser uma array vazia `[]`.
   - Dentro do `useEffect`, é definida uma função que será executada quando o efeito for ativado. Essa função inicia um intervalo utilizando `setInterval`, que incrementa o estado `seconds` a cada segundo usando `setSeconds`.
   - Também é definida uma função de limpeza dentro do `useEffect`, que será executada quando o componente for desmontado. Essa função limpa o intervalo utilizando `clearInterval`.
   - Como o array de dependências está vazio, esse efeito será executado apenas uma vez após a montagem do componente.

4. **Retorno do componente**:
   ```javascript
   return (
       <div>Timer: {seconds} seconds.</div>
   )
   ```
   - O componente retorna um elemento `<div>` que exibe o valor do estado `seconds`.

Em resumo, o `useEffect` neste componente é usado para iniciar um intervalo que incrementa um contador a cada segundo e limpar esse intervalo quando o componente é desmontado. Isso cria um efeito de contador que continua a contar os segundos enquanto o componente está montado e interrompe a contagem quando o componente é desmontado.