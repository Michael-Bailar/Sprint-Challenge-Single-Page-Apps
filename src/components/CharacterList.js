import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

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
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    .then(response => {
      console.log(response);
      const chars = response.data.results.filter
      (character => 
        character.name.toLowerCase().includes
        (query.toLowerCase())
      );
      setCharData(chars);
    })
    .catch(err => {
      console.log(err);
    });
  }, [query, pageNumber]);

  const increasePageNumber = () => {
    if (pageNumber < 20) {
      setPageNumber(pageNumber + 1);
    }
  }
  const decreasePageNumber = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  function handleBackClick(e){
    e.preventDefault();
    console.log("Back");
    decreasePageNumber();
    
}
function handleNextClick(e){
    e.preventDefault();
    console.log("Next");
    increasePageNumber();
}

  return (
  <div>
    <SearchForm handleInputChange={handleInputChange} query={query}/>
    <div className="pagination-container">
            <div className="next-button" onClick={handleBackClick}>Back</div>
            <div>Page: {pageNumber}</div>
            <div className="back-button" onClick={handleNextClick}>Next</div>
        </div>
    <CardContainer className="character-list">
      
      <CharacterCard charData={charData} key={charData.id}/>
      
    </CardContainer>
  </div>
  );
}
