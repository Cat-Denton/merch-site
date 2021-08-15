import React from "react";
import spiderknife from "./../img/spiderknife.jpg"

function Header(){
  return (
    <React.Fragment>
      <h1>HR & Cat's Bazaar of Bodacious Blades</h1>
      <img src={spiderknife} alt="An image of a Spyderco Native Chief knife and a Jester knife" />
    </React.Fragment>
  )
}

export default Header;