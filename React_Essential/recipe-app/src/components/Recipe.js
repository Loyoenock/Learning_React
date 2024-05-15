import React from "react";
import IngredinetList from "./IngredientList";
import Instructions from "./Instructions";

function Recipe ({ name, ingredients, steps}) {
    return (
       <section className={name.tolowerCase().replace(/ /g, "-")} >
            <h1>{name}</h1>
            <IngredinetList list={ingredients} />
            <Instructions title="Cooking Instructions" step={steps} />
       </section>
    );
}
export default Recipe;