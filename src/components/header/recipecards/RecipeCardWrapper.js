import React,{useEffect, useState} from 'react'
import Recipecard from './Recipecard'
import "./Recipecard.css"



const API_KEY='21ac8f40de094b6b98c1ebffa79b41fe'
const RecipeCardWrapper=(props)=>{
  
  const [recipes,setRecipes]=useState([])
 
 useEffect(()=>{
  if(props.selectedRecipe)
  fetchRecipe();

 },[props.selectedRecipe])
 let fetchRecipe= async ()=>{
  let response= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${props.selectedRecipe}&addRecipeInformation=true&number=10`)
  let recipeData= await response.json();
  setRecipes(recipeData.results)
  console.log(recipeData)
 }



  return (
    <div className='recipewrapper'
    
    >
    {recipes.map((recipe)=>(
      <Recipecard key={recipe.id} recipe={recipe}/>

    ))}
      

      
      
     
        

    </div>
  )
    }


export default RecipeCardWrapper