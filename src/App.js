import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import {Route, Link} from "react-router-dom";
import styled from "styled-components";

const NavLinks = styled.div`
display:flex;
justify-content: space-between;
width: 30%;
margin-left: 35%;
margin-bottom: 5%;
font-size: 30px;
`


export default function App() {
  return (
    <main>
      <Header />
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/characters">Character List</Link>
      </NavLinks>  
      <Route exact path ="/" component={WelcomePage} />
      <Route  path="/characters/" component={CharacterList}/>
    </main>
  );
}
