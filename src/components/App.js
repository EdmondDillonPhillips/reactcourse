import React, {useState, useEffect} from 'react';
import '../css/app.css';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';


function App() {

  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  };

  useEffect(()=>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null){
      setRecipes(JSON.parse(recipeJSON))
    }
  }, []);

  useEffect(() => {
    console.log('Rendered')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes]);

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),  name: '',  amount: ''
        }
      ] 
    }
    
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  };

  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex( r => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id) {
    if(selectedRecipeId!=null && selectedRecipeId === id){
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
    <RecipeList 
      recipes={recipes}
    />
    {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
  );

  


}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on Chicken\n2. Put Chicken in oven\n3. Eat chicken',
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
    instructions: '1. Put paprika on Pork\n2. Put Pork in oven\n3. Eat Pork',
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
    // eslint-disable-next-line
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default App;
