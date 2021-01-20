import React, {useState, useContext} from 'react';
import '../css/app.css';
import RecipeList from './RecipeList';
// import uuidv4 from 'uuid/v4';

export const RecipeContext = React.createContext()


function App() {

  const [recipes, setRecipes] = useState(sampleRecipes);

const recipeContextValue = {
  handleRecipeAdd,
  handleRecipeDelete
}

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {
          id: uuidv4(),  name: 'Name',  amount: '1 Tbs'
        }
      ] 
    }
  
    setRecipes([...recipes, newRecipe])
  };

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
    <RecipeList 
      recipes={recipes}
    />
    </RecipeContext.Provider>
  );

  


}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on Chicken\n 2. Put Chicken in oven\n 3. Eat chicken',
    ingredients: [
      {
      id: 1,
      name: 'Chicken',
      amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
  ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 4,
    cookTime: '2:55',
    instructions: '1. Put paprika on Pork\n 2. Put Pork in oven\n 3. Eat Pork',
    ingredients: [
      {
      id: 1,
      name: 'Pork',
      amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
  ]
  }
];

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default App;
