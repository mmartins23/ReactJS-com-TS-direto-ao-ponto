# Exibindo fotos

Claro, vou fornecer uma explicação detalhada junto com os códigos.

### Explicação do Componente `App`:

```jsx
import SearchBar from "./components/SearchBar";
import PhotoList from "./components/PhotoList";
import PhotoZoomed from "./components/PhotoZoomed";
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  // Definindo os estados
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState([]);

  // Função assíncrona para buscar as fotos
  const fetchData = async ({ query, category }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    // Fazendo uma requisição GET para a API do Unsplash
    const res = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 10,
      },
    });
    
    // Atualizando o estado das fotos com os dados recebidos da API
    setPhotos(res.data);
  }

  // Chamando a função fetchData quando o componente é montado
  useEffect(() => {
    fetchData(query, category);
  }, []);

  // Renderizando os componentes na interface
  return (
    <div className="container">
      <SearchBar />
      <PhotoList photos={photos} />
      <PhotoZoomed />
    </div>
  )
}

export default App;
```

### Explicação do Componente `PhotoList`:

```jsx
import React from 'react';
import Photo from "./Photo";

const PhotoList = ({ photos }) => {
  // Mapeando a lista de fotos e renderizando o componente Photo para cada uma delas
  return (
    <div className="album">
      {photos.map(photo => (
        <Photo key={photo.id} data={photo} />
      ))}
    </div>
  )
}

export default PhotoList;
```

### Explicação do Componente `Photo`:

```jsx
import React from 'react';

const Photo = ({ data }) => {
  // Renderizando uma única foto com a imagem e a descrição alternativa
  return (
    <div className='photo'>
       <img src={data.urls.small} alt={data.alt_description} />
    </div>
  )
}

export default Photo;
```

### Explicação Geral:

- O componente `App` é o componente principal da aplicação, que renderiza outros componentes como `SearchBar`, `PhotoList`, e `PhotoZoomed`.
- No `App`, a função `fetchData` é chamada assim que o componente é montado usando o hook `useEffect`. Esta função faz uma requisição para a API do Unsplash e atualiza o estado `photos` com os dados recebidos.
- O componente `PhotoList` recebe a lista de fotos como propriedade e mapeia essa lista para renderizar o componente `Photo` para cada foto.
- O componente `Photo` recebe os dados de uma foto e renderiza a imagem com a URL fornecida e a descrição alternativa.