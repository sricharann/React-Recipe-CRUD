import React from "react"
function RecipeItem({deleteRecipe,index,recipe}){
    return(
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt="image not loaded" role="img"/></td>
            <td><div className="content_td"><p>{(recipe.ingredients)}</p></div></td>
            <td><div className="content_td"><p>{(recipe.preparation)}</p></div></td>
            <td>
                <button name="delete" onClick={deleteRecipe}>delete</button>
            </td>
        </tr>
    )
}

export default RecipeItem