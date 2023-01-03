import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const nameChange=(event) => setName(event.target.value);
  const cuisineChange=(event) => setCuisine(event.target.value);
  const photoChange=(event) => setPhoto(event.target.value);
  const ingredientsChange=(event) => setIngredients(event.target.value);
  const preparationChange=(event) => setPreparation(event.target.value);

  const submitHandler = (event) =>{
    event.preventDefault();
    createRecipe({name,cuisine,photo,ingredients,preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }


  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" id="name" placeholder="Name" value={name} onChange={nameChange} required={true}/></td>
            <td><input name="cuisine"placeholder="Cuisine" value={cuisine} onChange={cuisineChange} required={true}/></td>
            <td><input name="photo" id="photo" placeholder="URL" type="url" value={photo} onChange={photoChange} required={true}/></td>
            <td><textarea name="ingredients" placeholder="Ingredients" value={ingredients} onChange={ingredientsChange} required={true}/></td>
            <td><textarea name="preparation" placeholder="Preparation" value={preparation} onChange={preparationChange} required={true}/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
