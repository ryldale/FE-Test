type PropTypes = {
  fillColor?: string;
};

const SearchIcon = ({ fillColor = "#888888" }: PropTypes) => {
  return (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4583 6.37109C14.3348 6.37109 16.6667 8.70295 16.6667 11.5794M17.3529 17.4699L21.875 21.9961M19.7917 11.5794C19.7917 16.1818 16.0607 19.9128 11.4583 19.9128C6.85596 19.9128 3.125 16.1818 3.125 11.5794C3.125 6.97705 6.85596 3.24609 11.4583 3.24609C16.0607 3.24609 19.7917 6.97705 19.7917 11.5794Z"
        stroke={fillColor}
        strokeWidth="2.08333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
