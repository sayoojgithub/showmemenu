import React from 'react'
import { Time, Group } from '../../../assets'





const Recipecard = (props) => {
  let {recipe}=props;
 
  
 
  return (
    <div className='recipecard'>
     
        <img src={recipe.image} alt={recipe.title} className='recipeimage'></img>
        <span className='recipename'>{recipe.title}</span>
        <div className='recipeinfo'>
            <Time />
            <span>{recipe.readyInMinutes}</span>
            <Group />
            <span>{recipe.servings}</span>
            
            
        </div>
        

    </div>
  )
}

export default Recipecard