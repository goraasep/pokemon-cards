import Card from "../../components/Card";
import Header from "../../components/Header";
import MobileWrapper from "../../components/MobileWrapper";
import usePokemonList from "../../hooks/usePokemonList";
import SortingAndGrid from "../../components/SortingAndGrid";
import { useEffect, useState } from "react";
const ListPage: React.FC = () => {
  const { pokemonList, loading, error } = usePokemonList();
  const [isSingleGrid, setIsSingleGrid] = useState(true);

  const handleSingleGrid = () => {
    setIsSingleGrid(true);
  };
  const handleDoubleGrid = () => {
    setIsSingleGrid(false);
  };
  if (error) return <div>Something is wrong :(</div>;
  return (
    <MobileWrapper>
      <Header withSearch />
      <SortingAndGrid
        isSingleGrid={isSingleGrid}
        handleSingleGrid={handleSingleGrid}
        handleDoubleGrid={handleDoubleGrid}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div
          className={`px-5 py-4 grid grid-cols-${isSingleGrid ? 1 : 2} gap-5`}
        >
          {pokemonList.map((each, index) => (
            <Card key={index} name={each.name} isSingleGrid={isSingleGrid} />
          ))}
        </div>
      )}
    </MobileWrapper>
  );
};

export default ListPage;
