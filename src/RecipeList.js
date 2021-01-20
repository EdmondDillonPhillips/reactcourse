import React from 'react'
import Recipie from './Recipe'

export default function RecipeList({recipies}) {
    return (
        <div>
            {
                recipies.map( recipie => {
                    return <Recipie key={recipie.id} {...recipie}/>
                })
            }
        </div>
       
    )
}
