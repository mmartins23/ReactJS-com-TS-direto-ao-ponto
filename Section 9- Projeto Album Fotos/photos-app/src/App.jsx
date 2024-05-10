import SearchBar from "./components/SearchBar";
import PhotoList from "./components/PhotoList";
import PhotoZoomed from "./components/PhotoZoomed";

import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="container">
      <SearchBar />
      <PhotoList />
      <PhotoZoomed />
    </div>
  )
}

export default App
