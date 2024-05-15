# Estilos iniciais

Esse componente é uma barra de pesquisa reutilizável para uma aplicação web. Vamos analisar cada parte em detalhes:

1. **SearchBar Componente Funcional**:
   - Este é um componente funcional chamado `SearchBar`. No React, os componentes funcionais são funções JavaScript que retornam elementos React (normalmente, JSX).
   - Ele não mantém estado interno (stateless) ou lógica de ciclo de vida, apenas renderiza uma interface com base nos dados fornecidos.

2. **Constante `categories`**:
   - É uma matriz de strings que contém diferentes categorias de pesquisa.
   - Cada categoria é representada por uma string, como "Nature", "People", "Technology", etc.

3. **Elemento JSX**:
   - O componente retorna um elemento JSX encapsulado em uma `<div>` com a classe CSS "search-bar".
   - Dentro da `<div>`, há três elementos:
     - Um `<input>` do tipo texto, que é a caixa de texto de pesquisa com um espaço reservado (placeholder) "Search".
     - Um `<button>`, que é o botão de pesquisa.
     - Um `<select>`, que é um menu suspenso (dropdown) contendo opções de categorias.
   - Para o `<select>`, as opções são geradas dinamicamente usando o método `map()` na matriz `categories`. Cada categoria se torna uma `<option>` dentro do menu suspenso.

4. **Atributos `key` e `value`**:
   - O atributo `key` é usado pelo React para otimização de renderização. Ele ajuda o React a identificar quais itens foram adicionados, removidos ou alterados. Neste caso, cada categoria é usada como chave, garantindo que o React possa diferenciar cada `<option>` de forma eficiente.
   - O atributo `value` especifica o valor que será enviado ao servidor quando uma opção é selecionada. No caso das opções do menu suspenso, o valor selecionado será a própria categoria.

5. **Exportação do Componente**:
   - Por fim, o componente é exportado como `default`, o que significa que ele será importado sem a necessidade de usar chaves (por exemplo, `import SearchBar from './SearchBar'`).

Em resumo, este componente `SearchBar` renderiza uma barra de pesquisa com uma caixa de texto, um botão de pesquisa e um menu suspenso para selecionar a categoria de pesquisa. Ele é flexível e pode ser facilmente integrado em qualquer aplicação web que precise de funcionalidade de pesquisa.

***

Claro, vamos explicar cada conjunto de estilos CSS em detalhes:

1. **`.container`**:
   - `margin: 20px auto;`: Isso define uma margem de 20 pixels em todos os lados do elemento `.container`, enquanto `auto` horizontalmente centraliza o conteúdo dentro de seu contêiner pai.
   - `width: 80%;`: Define a largura do `.container` como 80% da largura do seu contêiner pai.
   - `text-align: center;`: Isso centraliza o texto dentro do `.container`, alinhando-o ao centro horizontalmente.

2. **`.search-bar`**:
   - `display: flex;`: Isso torna o elemento `.search-bar` um contêiner flexível, permitindo o uso de propriedades flexíveis para o layout dos elementos filhos.
   - `justify-content: center;`: Centraliza os elementos filhos horizontalmente dentro do `.search-bar`.
   - `margin-bottom: 20px;`: Adiciona uma margem de 20 pixels na parte inferior do `.search-bar`.

3. **`.search-bar input`**:
   - `width: 300px;`: Define a largura da caixa de entrada (input) como 300 pixels.
   - `padding: 10px;`: Adiciona um preenchimento interno de 10 pixels em todos os lados da caixa de entrada.
   - `margin-right: 10px;`: Adiciona uma margem de 10 pixels à direita da caixa de entrada.

4. **`.search-bar button`**:
   - `padding: 11px 20px;`: Define o preenchimento interno do botão como 11 pixels na parte superior e inferior e 20 pixels à esquerda e à direita.
   - `cursor: pointer;`: Muda o cursor para uma mão quando o usuário passa o mouse sobre o botão, indicando que é clicável.

5. **`.search-bar select`**:
   - `padding: 10px;`: Adiciona um preenchimento interno de 10 pixels em todos os lados do menu suspenso (select).
   - `margin-left: 10px;`: Adiciona uma margem de 10 pixels à esquerda do menu suspenso.

6. **`.album`**:
   - `display: grid;`: Define o elemento `.album` como um contêiner de grade.
   - `grid-template-columns: repeat(4, 1fr);`: Cria quatro colunas de larguras iguais dentro do `.album`, preenchendo o espaço disponível igualmente.
   - `gap: 16px;`: Adiciona um espaçamento de 16 pixels entre os elementos filhos na grade.

7. **`.photo img`**:
   - `width: 100%;`: Define a largura da imagem como 100% do contêiner pai.
   - `height: 100%;`: Define a altura da imagem como 100% do contêiner pai.
   - `max-height: 400px;`: Define a altura máxima da imagem como 400 pixels, garantindo que ela não ultrapasse essa altura. Isso ajuda a manter a proporção da imagem.