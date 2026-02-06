import { useState } from "react"

export default function IngredientsList(props) {

     const ingredientsListItems = props.ingredients.map(ingredient => (
      <li key={ingredient}>{ingredient}</li>
    ))
     
    return (
        <section>
          <h2 className="ingredients-title">Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
          {props.ingredients.length > 3 && <div className="get-recipe-container">
            <div>
               <h3>Ready for a recipe?</h3>
               <p>Get a sample recipe example (AI disabled in public version). This is a demo feature. 
               </p>
            </div>
            <button onClick={props.toggleRecipeShown}>Show Sample Recipe</button>
          </div>}
        </section>
    )
}