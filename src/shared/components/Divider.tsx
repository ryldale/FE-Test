const Divider = ({
  fromColor = "transparent",
  viaColor = "#888888",
  toColor = "transparent",
}) => {
  return (
    <div className="mx-2 relative h-8 w-[2px] bg-transparent">
      <div
        className="absolute top-0 h-full w-full bg-gradient-to-r"
        style={{
          backgroundImage: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
        }}
      ></div>
    </div>
  );
};

export default Divider;
