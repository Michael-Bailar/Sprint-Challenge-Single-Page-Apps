import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

import styled from "styled-components";

const CardContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`

export default function CharacterList(props) {
  

  const [charData, setCharData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
    .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {
    
      const chars = response.data.results.filter
      (character => 
        character.name.toLowerCase().includes
        (query.toLowerCase())
      );
      console.log(chars)


      setCharData(chars);

    })
    .catch(err => {
      console.log(err);
    });
  }, [query]);



  return (
    <CardContainer className="character-list">
      <CharacterCard charData={charData} key={charData.id}/>
    </CardContainer>
  );
}
