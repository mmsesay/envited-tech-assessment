import React from "react";

const Button = ({ content }: any) => {
  return (
    <div className="my-3">
      <button className="bg-gradient-to-r from-primaryGradientColorOne to-primaryGradientColorTwo w-full h-14 rounded-md text-white font-semibold text-lg">
        {content}
      </button>
    </div>
  );
};

export default Button;
