import React from "react";
import { styled } from "styled-components";

const PokemonFilter = ({ filter, setFilter }) => {
  return (
    <Input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
  );
};

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

export default PokemonFilter;
