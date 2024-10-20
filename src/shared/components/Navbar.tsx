import Divider from "./Divider";

const Navbar = () => {
  return (
    <header className="w-full p-4 bg-white flex justify-between items-center md:hidden">
      <div className="flex items-center">
        <img src="./images/icons/menu.png" alt="menu" className="mr-[13px]" />
        <img src="./images/F1M5_Logo.png" alt="FUN88" />
      </div>
      <div className=" flex items-center">
        <img
          src="./images/icons/wallet.png"
          alt="wallet"
          className="mr-[9px]"
        />
        <p className="font-semibold text-base leading-6 text-left font-poppins text-[#00A6FF]">
          $1990.6
        </p>
        
        <Divider
          fromColor="transparent"
          viaColor="#00A6FF"
          toColor="transparent"
        />

        <img src="./images/icons/profile.png" alt="profile" />
      </div>
    </header>
  );
};

export default Navbar;
