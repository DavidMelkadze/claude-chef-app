import { useState, useRef, useEffect } from "react" 
import IngredientsList from "./IngredientsList.jsx"
import Recipe from "./Recipe.jsx"

export default function Main() {

    const [ingredients, setIngredients] = useState([])

    const [ recipeShown, setRecipeShown ] = useState(false)

    const recipeSection = useRef(null)

   useEffect(() => {
    if ( recipeShown && recipeSection.current ) {
        recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipeShown])

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    function addIngredient(formData) {
         const newIngredient = formData.get("ingredient")
         setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

 
  return (
     <main>
        <form action={addIngredient} className="add-ingredient-form">
            <input type="text" 
               placeholder="e.g. oregano"
               aria-label="Add Ingredient"
               name="ingredient" 
            />
            <button>Add Ingredient</button>
        </form>

        {ingredients.length > 0 && <IngredientsList ref={recipeSection} ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} />}

        {recipeShown && <Recipe />}

     </main>
  )
}
