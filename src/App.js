import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const createRecipe = (newRecipe) => setRecipes((currentRecipe) => [...currentRecipe,newRecipe]);
  const deleteRecipe = (recipeIndex) => setRecipes((currentRecipe) => currentRecipe.filter((post, index)=> index !==recipeIndex));

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList deleteRecipe={deleteRecipe} recipes={recipes}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
