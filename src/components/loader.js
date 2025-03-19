import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[9999] flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
