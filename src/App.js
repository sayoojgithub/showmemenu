import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import RecipeCardWrapper from './components/header/recipecards/RecipeCardWrapper';
import { useState } from 'react';





  

function App() {
  const [recipe,setRecipe]=useState(null)
  function onRecipeSelect(recipe){
    //console.log(recipe)
    setRecipe(recipe)
  }
  return (
    
    <div className="App">
      <Header onRecipeSelect={onRecipeSelect}/>
      <RecipeCardWrapper selectedRecipe={recipe}/>
      
      
    </div>
    
  );
}

export default App;
