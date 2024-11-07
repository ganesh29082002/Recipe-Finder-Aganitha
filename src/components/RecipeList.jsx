import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import ErrorMessage from '../utilities/ErrorMessage';

function RecipeList({ ingredient, onRecipeSelect }) {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (ingredient) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => {
          const data = response.data;
          if (data.meals) {
            setRecipes(data.meals);
            setError(null);
          } else {
            setRecipes([]);
            setError('No recipes found.');
          }
        })
        .catch(() => setError('Failed to fetch recipes.'));
    }
  }, [ingredient]);

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="recipe-list grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} onSelect={onRecipeSelect} />
      ))}
    </div>
  );
}

export default RecipeList;
