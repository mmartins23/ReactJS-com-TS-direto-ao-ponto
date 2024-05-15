const SearchBar = () => {
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
      <input type="text" placeholder="Search" />
      <button>Search</button>
      <select>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar