import React from 'react'
import Recipe from './Recipe'
function RecipeList(recipes) {
    return (
        <div>
           {recipes.map(recipe=>{
              return <Recipe {...recipe}/>
           })}
        </div>
    )
}

export default RecipeList
