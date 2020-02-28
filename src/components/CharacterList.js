import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

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
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <CharacterCard charData={charData} key={charData.id}/>
    </section>
  );
}
