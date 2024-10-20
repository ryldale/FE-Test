const NoMobileView = () => {
  return (
    <div className="hidden md:flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold">Mobile view is not available</h1>
      <p className="mt-2 text-lg text-gray-700">
        The content is visible only on smaller screens. Please use a mobile
        device to access the mobile view.
      </p>
    </div>
  );
};

export default NoMobileView;
