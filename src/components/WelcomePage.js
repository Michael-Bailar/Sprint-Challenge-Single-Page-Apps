import React from "react";

import styled from "styled-components";

const CenterHeader = styled.div`
text-align: center;
margin-bottom: 5%;
`

export default function WelcomePage(props) {
  return (
    <section className="welcome-page">
      <CenterHeader>
        <h1>Welcome to the ultimate fan site!</h1>


        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </CenterHeader>
    </section>
  );
}
