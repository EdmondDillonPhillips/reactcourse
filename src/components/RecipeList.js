import React from 'react'
import Recipie from './Recipe'

export default function RecipeList({recipies}) {
    return (
        <div className="recipe-list">
        <div>
            {
                recipies.map( recipie => {
                    return <Recipie key={recipie.id} {...recipie}/>
                })
            }
        </div>
        <div className="recipe-list__add-recipe-btn-contianer">
            <button className="btn btn--primary">Add Recipie</button>
        </div>
        
        </div>

        
       
    )
}
