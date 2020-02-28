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

  useEffect(() => {
    axios
    .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {
      setCharData(response.data.results);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);



  return (
    <CardContainer className="character-list">
      <CharacterCard charData={charData} key={charData.id}/>
    </CardContainer>
  );
}
