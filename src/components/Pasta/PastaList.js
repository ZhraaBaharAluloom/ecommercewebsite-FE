import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import PastaItem from "./PastaItem";
import SearchBar from "../Serachbar/SearchBar";

//Styles
import { ListWrapper, PastaListWrapper } from "./Styles";

const PastaList = ({ pastas = [], shop }) => {
  const [query, setQuery] = useState("");

  const pastaList = pastas
    .filter((pasta) => pasta.name.toLowerCase().includes(query.toLowerCase()))
    .map((pasta) => <PastaItem pasta={pasta} key={pasta.id} shop={shop} />);

  return (
    <ListWrapper className="container">
      <SearchBar setQuery={setQuery} />
      <PastaListWrapper>{pastaList}</PastaListWrapper>
    </ListWrapper>
  );
};

export default observer(PastaList);
