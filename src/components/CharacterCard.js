import React from "react";
import styled from "styled-components";

const Card = styled.div`
  text-align:center;
  width: 30%;
  margin-bottom: 2%;
  background-color:lightgray;
`


export default function CharacterCard(props) {
  return (
    props.charData.map(char => {

      return (
        <Card key={char.id}>
          <h2>Name: {char.name}</h2>
          <p>Species: {char.species}</p>
          <p>Status: {char.status}</p>
        </Card>
      )
    })
  )
}
