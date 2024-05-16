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

  const fetchData = async ({ query, category }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const res = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 10,
      },
    });
    setPhotos(res.data);
  }
  useEffect(() => {
    fetchData(query, category)
  }, [])

  return (
    <div className="container">
      <SearchBar />
      <PhotoList photos={photos} setPhotoZoomed={setPhotoZoomed} />
      {photoZoomed && <PhotoZoomed photo={photoZoomed} setPhotoZoomed={setPhotoZoomed} />}
    </div>
  )
}

export default App
