import { useState } from "react";
import Divider from "../../../shared/components/Divider";
import Filters from "../components/filters";
import Search from "../components/search";
import Searchbar from "../components/searchbar";
import GameProviders from "../components/gameproviders";

type PropTypes = {
  onCategoryChange: (category: string) => void;
  onSearchChange: (searchTerm: string) => void;
  onProviderSelect: (provider: string) => void;
};

const SearchAndFilter = ({
  onCategoryChange,
  onSearchChange,
  onProviderSelect,
}: PropTypes) => {
  const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);
  const [isGameProvidersVisible, setIsGameProvidersVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchbarVisible((prev) => !prev);
  };

  const handleFilterClick = () => {
    setIsGameProvidersVisible((prev) => !prev);
  };

  const handleCloseGameProviders = () => {
    setIsGameProvidersVisible(false);
  };

  return (
    <>
      <div className="flex items-center w-full mx-2 mt-6 pb-2">
        <Search onClick={handleSearchClick} isActive={isSearchbarVisible} />
        <Divider
          fromColor="transparent"
          viaColor="#888888"
          toColor="transparent"
        />
        <Filters onSelectCategory={onCategoryChange} />
      </div>
      {isSearchbarVisible && (
        <Searchbar
          onSearchChange={onSearchChange}
          onFilterClick={handleFilterClick}
        />
      )}
      {isGameProvidersVisible && (
        <>
          <GameProviders
            onClose={handleCloseGameProviders}
            onProviderSelect={onProviderSelect}
          />
        </>
      )}
    </>
  );
};

export default SearchAndFilter;
