import React, {useContext} from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';

export default function RecipeEdit(props) {
    const {recipe} = props;
    const {handleRecipeChange, handleRecipeSelect} = useContext(RecipeContext);

    function handleChange(changes){
        handleRecipeChange(recipe.id, {...recipe, ...changes});
    };

    function handleIngredientChange(id, ingredient){
        const newIngredients = [...recipe.ingredients];
        const index = newIngredients.findIndex( i => i.id === id);
        newIngredients[index] = ingredient;
        handleChange({ingredients: newIngredients});
    }

    function handleIngredietAdd() {
        const newIngredient = {
            id: uuidv4(),
            name: '',
            amount: ''
        }
        handleChange({ingredients: [...recipe.ingredients, newIngredient]})
    }

    function handleIngredientDelete(id){
        handleChange({
            ingredients: recipe.ingredients.filter(i => i.id!==id)
        })
    }

    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button 
                className="btn recipe-edit__remove-button"
                onClick={()=>handleRecipeSelect(undefined)}
                >
                    &times;
                </button>
            </div>
            <div className="recipe-edit__details-grid">
                <label 
                htmlFor="name" 
                className="recipe-edit__label">
                    Name
                </label>
                <input 
                type="text" 
                name="name" 
                id="name"
                className="recipe-edit__input"
                value={recipe.name}
                onChange={ e => handleChange({name: e.target.value})}
                />
                <label 
                htmlFor="cookTime"
                className="recipe-edit__label">
                    Cook Time
                </label>
                <input 
                type="text" 
                name="cookTime" 
                id="cookTime"
                className="recipe-edit__input"
                value={recipe.cookTime}
                onChange={ e => handleChange({cookTime: e.target.value})}/>
                
                <label 
                htmlFor="servings"
                className="recipe-edit__label">
                    Servings
                </label>
                <input 
                type="number" 
                name="servings" 
                id="servings"
                className="recipe-edit__input"
                value={recipe.servings}
                onChange={ e => handleChange({servings: parseInt(e.target.value) || ''})}
                />                
                <label 
                htmlFor="instructions"
                className="recipe-edit__label">
                    Instructions
                </label>
                <textarea 
                name="instructions" 
                id="instructions" 
                cols="30" 
                rows="10"
                className="recipe-edit__input"
                value={recipe.instructions}
                onChange={ e => handleChange({instructions: e.target.value})}
                ></textarea>
            </div>
            <br/>
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => 
                    <RecipeIngredientEdit 
                    key={ingredient.id}
                    handleIngredientChange={handleIngredientChange}
                    handleIngredientDelete={handleIngredientDelete}
                    ingredient={ingredient}/>
                    )}
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button 
                className="btn btn--primary"
                onClick={()=> handleIngredietAdd()}
                >Add Ingredient</button>
            </div>
        </div>
    )

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          // eslint-disable-next-line
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
}
