import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";

type PropTypes = {
  img: string;
  isStarred: boolean;
  onToggleStar: () => void;
};

const Card = ({ img, isStarred, onToggleStar }: PropTypes) => {

  return (
    <div className="relative rounded-xl overflow-hidden">
      <img src={img} alt={img} className="w-full max-h-48 object-cover" />
      <div className="absolute right-0 top-0 z-9 w-10 h-10 bg-black opacity-50 clip-triangle"></div>
      <div
        className="absolute right-1 top-0 z-10 cursor-pointer"
        onClick={onToggleStar}
      >
        {isStarred ? (
          <StarIcon
            style={{ width: "15px", height: "auto", color: "yellow" }}
          />
        ) : (
          <StarBorderOutlinedIcon
            style={{ width: "15px", height: "auto", color: "white" }}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
