import React from "react";

export default function CharacterCard(props) {
  return (
    props.charData.map(char => {

      return (
        <div key={char.id}>
          <h3>{char.name}</h3>
          <p>{char.species}</p>
          <p>{char.status}</p>
        </div>
      )
    })
  )
}
