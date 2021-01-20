import React, {useState} from 'react';
import RecipieList from './RecipeList'
import '../css/app.css'


function App() {

  const [recipies, setRecipes] = useState(sampleRecipies);

  return (
    <>
    <RecipieList recipies={recipies}/>
    </>
  );
}

const sampleRecipies = [
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
]

export default App;
