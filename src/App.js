import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import {Route, Link} from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />
      <Link to="/">Home</Link>
      <br/>
      <Link to="/characters">Character List</Link>

      <Route exact path ="/" component={WelcomePage} />
      <Route  path="/characters/" component={CharacterList}/>
    </main>
  );
}
