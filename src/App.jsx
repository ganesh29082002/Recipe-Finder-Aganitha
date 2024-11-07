import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

function App() {
  const [ingredient, setIngredient] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = (inputIngredient) => {
    setIngredient(inputIngredient);
    setSelectedRecipe(null); // Reset recipe selection on new search
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="app container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {selectedRecipe ? (
        <RecipeDetail recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      ) : (
        <RecipeList ingredient={ingredient} onRecipeSelect={handleRecipeSelect} />
      )}
    </div>
  );
}

export default App;
