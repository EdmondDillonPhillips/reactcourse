import React, { useState } from 'react';
import RecipieList from './RecipeList'


function App() {
  return (
    <>
    <RecipieList recipies={sampleRecipies}/>
    </>
  );
}

const sampleRecipies = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instrucitons: '1. Put salt on Chicken\n 2. Put Chicken in oven\n 3. Eat chicken'
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 4,
    cookTime: '2:55',
    instrucitons: '1. Put paprika on Pork\n 2. Put Pork in oven\n 3. Eat Pork'
  }
]

export default App;
