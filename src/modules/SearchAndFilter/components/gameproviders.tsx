import FilterIcon from "../../../core/assets/SearchAndFilter/FilterIcon";
import CloseIcon from "@mui/icons-material/Close";
import { gameProviders } from "../types/type";

type PropTypes = {
  onClose: () => void;
  onProviderSelect: (providerName: string) => void;
};

const GameProviders = ({ onClose, onProviderSelect }: PropTypes) => {
  const handleResetProviders = () => {
    onProviderSelect("");
  };
  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed bottom-0 left-0 w-full h-[60vh] bg-white shadow-md overflow-auto z-50">
        <div className="flex flex-row items-center justify-between p-4 bg-[#00A6FF]">
          <div className="flex flex-row items-center">
            <div className="mr-2">
              <FilterIcon fillColor="#fff" />
            </div>
            <h2 className=" text-lg text-white mr-2">Game Providers</h2>
            <button
              onClick={handleResetProviders}
              className=" p-2 bg-white text-[#00A6FF] rounded"
            >
              Reset
            </button>
          </div>
          <div className="cursor-pointer" onClick={onClose}>
            <CloseIcon style={{ width: "24px", color: "white" }} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-3">
          {gameProviders.map((item, index) => (
            <div
              key={index}
              className="flex bg-[#F2F2FA] justify-center cursor-pointer rounded-md"
              onClick={() => {
                onProviderSelect(item.name);
                onClose();
              }}
            >
              <img src={item.imgSrc} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameProviders;
