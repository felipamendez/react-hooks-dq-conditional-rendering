import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [selected, setSelected] = useState("")

  
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

    let display;
    if (selected === "user") {
      (display = <Profile /> )
    } else if  (selected === "cat") {
       (display = <Photos/>)
    } else if  (selected === "cocktail") {
       (display = <Cocktails/>) 
    } else if  (selected === "pokemon") {
       (display = <Pokemon/>)
    } 



  let detailsToDisplay = <div>Hi, I'm a div!</div>;

  return (
    <div>
      <MenuBar  selected={selected} setSelected={setSelected} />
      {display}
    </div>
  );
}

export default MainBox;
