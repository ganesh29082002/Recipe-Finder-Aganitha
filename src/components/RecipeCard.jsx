import React from 'react';

function RecipeCard({ recipe, onSelect }) {
  return (
    <div className="recipe-card border p-4 rounded">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded mb-2" />
      <h3 className="text-lg font-bold">{recipe.strMeal}</h3>
      <button onClick={() => onSelect(recipe)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        View Details
      </button>
    </div>
  );
}

export default RecipeCard;
