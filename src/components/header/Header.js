import React from 'react'
import "./Header.css"

const Header = (props) => {
  return (
    <div className='header'>
        <h1 className='logo'>
            Show Me Menu
        </h1>
        <nav>
            <button onClick={function(){props.onRecipeSelect("indian")}}>Indian</button>
            <button onClick={function(){props.onRecipeSelect("italian")}}>Italian</button>
            
        </nav>

    </div>
  )
}

export default Header