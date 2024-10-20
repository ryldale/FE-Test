import FilterIcon from "../../../core/assets/SearchAndFilter/FilterIcon";
import SearchIcon from "../../../core/assets/SearchAndFilter/SearchIcon";
type PropTypes = {
  onSearchChange: (searchTerm: string) => void;
  onFilterClick: () => void;
};

const Searchbar = ({ onSearchChange, onFilterClick }: PropTypes) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="flex m-2">
      <div className="relative w-full mr-2">
        <input
          type="text"
          className="w-full pr-10 pl-10 py-2 rounded-md border border-[#00A6FF] focus:outline-none"
          placeholder="Search..."
          onChange={handleChange}
        />
        <div className="absolute left-3 top-2">
          <SearchIcon />
        </div>
      </div>
      <div
        className="rounded-md border border-[#888888] p-2 cursor-pointer"
        onClick={onFilterClick}
      >
        <FilterIcon />
      </div>
    </div>
  );
};

export default Searchbar;
