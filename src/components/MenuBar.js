import React from "react";


function MenuBar({ selected, setSelected}) {
  
  

  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */


  function handleUserClick () {
    setSelected("user")
  }

  function handleCatClick () {
    setSelected("cat")
  }

  function handleCocktailClick () {
    setSelected("cocktail")
  }

  function handlePokemonClick () {
    setSelected("pokemon")
  }

  return (
    <div className="ui four item menu">
      <span className={(selected === "user") ? "item active" : "item"}  
      onClick={(e) => {handleUserClick(e)}}>
        <i className="user large icon" value="user"/>
      </span>

      <span className={(selected === "cat") ? "item active" : "item"}   onClick={handleCatClick}>
        <i className="photo large icon" value="cat"/>
     </span>

      <span className={(selected === "cocktail") ? "item active" : "item"} value="cocktail" onClick={handleCocktailClick}>
        <i className="cocktail large icon" />
        </span>

      <span className={(selected === "pokemon") ? "item active" : "item"} value="pokemon" onClick={handlePokemonClick}>
        <i className=" themeisle large icon" />
        </span>
    </div>
  );
}

export default MenuBar;
