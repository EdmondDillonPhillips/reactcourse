import React from 'react'

export default function RecipeEdit() {
    return (
        <div className="recipe-edit">
            <div>
                <button>&times;</button>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
                <label htmlFor="cookTime">Name</label>
                <input type="text" name="cookTime" id="cookTime"/>
                <label htmlFor="servings">Name</label>
                <input type="number" min="1" name="servings" id="servings"/>
                <label htmlFor="instructions">Instructions</label>
                <textarea name="instructions" idinstructions cols="30" rows="10"></textarea>
            </div>
        </div>
    )
}
