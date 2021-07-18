import styled from 'styled-components'

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  padding: 16px;
  margin-right: auto;
  margin-left: auto;
  max-width: 500px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    display: grid;
    max-width: 1100px;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 175px 1fr 275px; 
  }
`;

export default MainGrid;