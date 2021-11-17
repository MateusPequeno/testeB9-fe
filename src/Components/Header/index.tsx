import React from "react";
import { Container, Title, IconsDiv, SearchBarDiv } from "./styles";
import { WbSunny, Person } from "@material-ui/icons";
import SearchBar from "../Searchbar/";

const Header: React.FC = () => {
  return (
    <Container>
      <WbSunny />
      <Title>SolarStore</Title>
      <SearchBarDiv>
        <SearchBar placeholder="Pesquisar" />
      </SearchBarDiv>
      <IconsDiv>
        <Person
          onClick={() => {
            console.log("Takes to admin profile  page");
          }}
        />
      </IconsDiv>
    </Container>
  );
};
export default Header;
