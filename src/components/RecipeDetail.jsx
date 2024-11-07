import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeDetail({ recipe, onBack }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`)
      .then(response => {
        setDetails(response.data.meals[0]);
      })
      .catch(() => setDetails(null));
  }, [recipe.idMeal]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="recipe-detail">
      <button onClick={onBack} className="text-blue-500 mb-4">Back to Results</button>

      <h2 className="text-2xl font-bold mb-2">{details.strMeal}</h2>

      <img src={details.strMealThumb} alt={details.strMeal} className="min-w-80 h-60 rounded mb-4" />
      <p><strong>Category:</strong> {details.strCategory}</p>

      <p><strong>Area:</strong> {details.strArea}</p>

      <h3 className="text-xl font-bold mt-4">Instructions</h3>

      <p>{details.strInstructions}</p>
      <h3 className="text-xl font-bold mt-4">Ingredients</h3>
      <ul className="list-disc ml-4">

        {Object.keys(details).filter(key => key.startsWith('strIngredient') && details[key]).map(key => (
          <li key={key}>{details[key]}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetail;
