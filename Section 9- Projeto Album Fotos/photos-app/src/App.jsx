import SearchBar from "./components/SearchBar";
import PhotoList from "./components/PhotoList";
import PhotoZoomed from "./components/PhotoZoomed";

import { useState, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const fetchData = async ({query, category}) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        client_id: apiKey
      }
    });
}
  useEffect(() => {
  fetchData(query, category)
  }, [])

  return (
    <div className="container">
      <SearchBar />
      <PhotoList />
      <PhotoZoomed />
    </div>
  )
}

export default App
