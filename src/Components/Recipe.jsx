export default function Recipe() {
    return (
       <section>
            <h2>Chef’s Recommendation 🍝</h2>

            <article className="suggested-recipe-container" aria-live="polite">
   
               <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
                ⚠️ AI functionality is disabled in the public version of this project.
                The recipe shown is a sample and is not generated from your ingredients list.
                 In a production version, this would be generated dynamically.
            </p>
               <hr />
                <p className="recipe-intro">
                    Here’s a classic, comforting meal that’s easy to prepare and perfect for any day of the week.
                </p>

                <h3>Beef Bolognese Pasta</h3>

                <h4>Ingredients</h4>
                <ul>
                    <li>1 lb ground beef</li>
                    <li>1 onion, diced</li>
                    <li>3 cloves garlic, minced</li>
                    <li>2 tbsp tomato paste</li>
                    <li>1 can crushed tomatoes (28 oz)</li>
                    <li>1 cup beef broth</li>
                    <li>1 tsp dried oregano</li>
                    <li>1 tsp dried basil</li>
                    <li>Salt and pepper, to taste</li>
                    <li>8 oz pasta (spaghetti, penne, or linguine)</li>
                </ul>

                <h4>Instructions</h4>
                <ol>
                    <li>Bring a large pot of salted water to a boil and cook the pasta according to package instructions.</li>
                    <li>In a large pan over medium heat, cook the ground beef until browned.</li>
                    <li>Add the onion and garlic, cooking until soft and fragrant.</li>
                    <li>Stir in the tomato paste and cook for 1 minute.</li>
                    <li>Add crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper.</li>
                    <li>Reduce heat and let the sauce simmer for 15–20 minutes.</li>
                    <li>Combine the sauce with the cooked pasta and serve hot.</li>
                </ol>

                <p className="recipe-note">
                    💡 Tip: Top with grated Parmesan or fresh basil for extra flavor.
                </p>
                 <hr />
            </article>
        </section>
    )
}