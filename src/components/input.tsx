import React from "react";

type InputProps = {
  placeholder: string;
  type?: string;
};

const Input: React.FC<InputProps> = ({ placeholder, type }) => {
  return (
    <input
      className="w-full stroke-[#ABA1B6]"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
