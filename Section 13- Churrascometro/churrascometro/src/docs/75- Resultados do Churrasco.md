# Exibindo resultados do Churrasco

Este código consiste em um componente React chamado `PaginaResultado` que renderiza os resultados de um cálculo relacionado a um churrasco. Vamos analisar em detalhes:

1. **Imports:**
   ```javascript
   import { useLocation, useNavigate } from "react-router-dom";
   import { Alimento, nomesAlimentos, quantidadePessoas } from "../types";
   import "./ResultadoChurrasco.css";
   ```
   - `useLocation` e `useNavigate` são hooks fornecidos pelo pacote `react-router-dom` para lidar com a navegação entre as páginas.
   - `Alimento`, `nomesAlimentos` e `quantidadePessoas` são importados do arquivo `types` localizado na pasta anterior (`../`). Eles contêm tipos e dados relacionados aos alimentos e quantidades necessárias para o churrasco.
   - `./ResultadoChurrasco.css` importa um arquivo de estilo para este componente.

2. **Tipo `ResultadosChurrasco`:**
   ```javascript
   type ResultadosChurrasco = {
     pessoas: number;
     alimentosSelecionados: Alimento[];
   };
   ```
   - Este tipo define a estrutura dos resultados esperados do cálculo do churrasco. Ele inclui o número de pessoas e uma lista de alimentos selecionados.

3. **Componente `PaginaResultado`:**
   ```javascript
   const PaginaResultado = () => { ... }
   ```
   - Este é um componente funcional React que renderiza os resultados do cálculo do churrasco.

4. **Hooks `useLocation` e `useNavigate`:**
   ```javascript
   const location = useLocation();
   const navigate = useNavigate();
   ```
   - Esses hooks são usados para acessar a localização atual (URL) e para navegar entre as páginas do aplicativo, respectivamente.

5. **Extração do estado:**
   ```javascript
   const state = location.state as ResultadosChurrasco;
   ```
   - Aqui, o estado é extraído da localização atual. Supõe-se que este estado contenha os resultados do cálculo do churrasco, conforme definido pelo tipo `ResultadosChurrasco`.

6. **Cálculo da quantidade de comida:**
   ```javascript
   const totalPorAlimento = state.alimentosSelecionados.reduce((acc, alimento) => {
     acc[alimento] = (quantidadePessoas[alimento] * state.pessoas) / 1000; // Convertendo para kg
     return acc;
   }, {} as Record<Alimento, number>);
   ```
   - Neste trecho, é calculada a quantidade total de cada alimento necessário para o número de pessoas especificado. A quantidade é calculada em quilogramas (kg), convertendo as quantidades em gramas fornecidas em `quantidadePessoas`.

7. **Função `reiniciar`:**
   ```javascript
   const reiniciar = () => {
     navigate("/");
   };
   ```
   - Esta função é chamada quando o botão "Reiniciar" é clicado. Ela utiliza a função `navigate` para redirecionar o usuário para a página inicial (`"/"`).

8. **Renderização do conteúdo:**
   - O componente renderiza o número de pessoas e a quantidade de cada alimento necessário em um formato específico. Além disso, há um botão "Reiniciar" que, quando clicado, aciona a função `reiniciar`.

Este componente é parte de um aplicativo React que calcula e exibe os resultados de um churrasco com base nos dados fornecidos pelo usuário e navega entre diferentes páginas do aplicativo usando `react-router-dom`.