const SearchBar = ({setQuery, setCategory, setActivateSearch}) => {
  const categories = [
    "Nature",
    "People",
    "Technology",
    "Animals",
    "Food",
    "Sports"
  ]

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" onChange={e => setQuery(e.target.value)} />
      <button onClick={() => setActivateSearch(true)}>Search</button>
      <select onChange={(e) => {
        setCategory(e.target.value); 
        setActivateSearch(true);
        }}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar