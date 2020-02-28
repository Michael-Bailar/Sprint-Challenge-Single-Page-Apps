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

const PaginationContainer = styled.div`
  display:flex;
  width:50%;
  justify-content:center;
  margin-left:25%;
  margin-bottom:5%;
`

const PaginationLinks = styled.div`
margin-left: 5%;
margin-right: 5%;
border:1px solid black;
width: 50px;
text-align: center;
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
    <PaginationContainer className="pagination-container">
            <PaginationLinks className="next-button" onClick={handleBackClick}>Back</PaginationLinks>
            <div>Page: {pageNumber}</div>
            <PaginationLinks className="back-button" onClick={handleNextClick}>Next</PaginationLinks>
      </PaginationContainer>
    <CardContainer className="character-list">
      
      <CharacterCard charData={charData} key={charData.id}/>
      
    </CardContainer>
  </div>
  );
}
