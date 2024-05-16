import SearchBar from "./components/SearchBar";
import PhotoList from "./components/PhotoList";
import PhotoZoomed from "./components/PhotoZoomed";
import axios from 'axios';

import { useState, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoZoomed, setPhotoZoomed] = useState(null);
  const [activateSearch, setActivateSearch] = useState(false);

  const fetchData = async ({ query, category }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    if (query || category) {
      let searchQuery = query;

      if (query && category) {
        searchQuery = `${query} ${category}`
      } else if (category) {
        searchQuery = category
      }

      const res = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: apiKey,
          query: searchQuery,
        },
      });

      setPhotos(res.data.results);
    }

    const res = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 10,
      },
    });
    setPhotos(res.data);
    return;
  }

  useEffect(() => {
    fetchData(query, category)
  }, [])

  useEffect(() => {
   if(activateSearch) {
    fetchData({query, category});
    setActivateSearch(false);
   }
  }, [activateSearch])

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} setCategory={setCategory} setActivateSearch={setActivateSearch} />
      <PhotoList photos={photos} setPhotoZoomed={setPhotoZoomed} />
      {photoZoomed && <PhotoZoomed photo={photoZoomed} setPhotoZoomed={setPhotoZoomed} />}
    </div>
  )
}

export default App
