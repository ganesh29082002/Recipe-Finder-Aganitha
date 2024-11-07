import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [ingredient, setIngredient] = useState('');

  const handleSearch = () => {
    if (ingredient) onSearch(ingredient);
  };

  return (
    <div className="search-bar flex items-center space-x-2 mb-4">
      <input
        type="text"
        placeholder="Enter an ingredient..."
        className="border p-2 rounded w-full"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
