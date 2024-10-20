import SearchIcon from "../../../core/assets/SearchAndFilter/SearchIcon";

type PropTypes = {
  onClick: () => void;
  isActive: boolean;
};

const Search = ({ onClick, isActive }: PropTypes) => {
  const fillColor = !isActive ? "#888888" : "#00A6FF";
  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <div className="h-6 w-6 mb-1">
        <SearchIcon fillColor={fillColor} />
      </div>
      <span
        className={`font-poppins text-sm font-normal leading-5 tracking-tight text-center uppercase ${
          isActive ? "text-[#00A6FF] underline" : "text-[#888888]"
        }`}
      >
        Search
      </span>
    </div>
  );
};

export default Search;
