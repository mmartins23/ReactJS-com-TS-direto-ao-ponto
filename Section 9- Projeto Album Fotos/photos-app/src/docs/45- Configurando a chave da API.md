# Configurando a chave da API

Claro, aqui estão os passos para configurar a chave da API em um projeto React:

1. **Obtenha uma chave da API**: Primeiro, você precisa obter uma chave da API do Unsplash. Parece que você já tem uma chave, conforme fornecido em `VITE_UNSPLASH_API_KEY=G4i5IFVGdjy00_MxMqUgbs9Uk0FJy4figl-mpz-95Vo`. Se não tiver uma, você pode se registrar no site do Unsplash para obter uma.

2. **Defina a chave da API no seu projeto React**: O próximo passo é configurar a chave da API no seu projeto React. Você pode fazer isso definindo-a como uma variável de ambiente. No seu caso, parece que você está usando Vite como seu bundler, então você pode definir a variável de ambiente `VITE_UNSPLASH_API_KEY` no arquivo `.env` na raiz do seu projeto. Certifique-se de adicionar a chave real fornecida pelo Unsplash.

3. **Acesse a chave da API no código**: Agora que você definiu a chave da API como uma variável de ambiente, você pode acessá-la no seu código React. Parece que você está usando `import.meta.env.VITE_UNSPLASH_API_KEY` para fazer isso. Isso deve funcionar bem, desde que você esteja usando um ambiente que suporte variáveis de ambiente em tempo de compilação, como Vite.

4. **Chamada da API**: Você pode usar a chave da API para fazer chamadas à API do Unsplash. No seu exemplo, você está usando a biblioteca Axios para fazer isso. No entanto, a chamada da API no seu exemplo está dentro de uma função `fetchData` que não está sendo chamada em nenhum lugar. Você precisa chamar essa função para realmente fazer a solicitação à API do Unsplash. Além disso, você está passando os parâmetros `query` e `category` para a função `fetchData`, mas na verdade esses parâmetros estão sendo definidos no escopo do componente. Você pode remover esses parâmetros da função e acessar diretamente as variáveis de estado `query` e `category`.

5. **Use `useEffect` para chamar a função de busca**: Finalmente, você pode usar o hook `useEffect` para chamar a função `fetchData` quando o componente for montado. Isso garantirá que a chamada à API seja feita assim que o componente for renderizado pela primeira vez.

Aqui está uma versão corrigida do seu componente `App` com essas alterações:

```javascript
import SearchBar from "./components/SearchBar";
import PhotoList from "./components/PhotoList";
import PhotoZoomed from "./components/PhotoZoomed";
import { useState, useEffect } from 'react';
import axios from 'axios'; // Importe axios

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const fetchData = async () => { // Remova os parâmetros da função fetchData
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        client_id: apiKey,
        query: query, // Use a variável de estado query aqui
        category: category // Use a variável de estado category aqui
      }
    });
    console.log(res.data); // Faça algo com os dados da resposta
  }

  useEffect(() => {
    fetchData(); // Chame a função fetchData aqui
  }, []) // Certifique-se de passar uma lista de dependências vazia para garantir que isso só seja executado uma vez

  return (
    <div className="container">
      <SearchBar />
      <PhotoList />
      <PhotoZoomed />
    </div>
  )
}

export default App;
```

Com essas alterações, seu componente `App` deve ser capaz de fazer chamadas à API do Unsplash assim que for montado. Certifique-se de substituir `console.log(res.data)` pela lógica necessária para manipular os dados da resposta da API de acordo com o que você deseja fazer no seu aplicativo.