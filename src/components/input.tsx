import React from "react";

type InputProps = {
  placeholder: string;
  type?: string;
  className?: string;
  required?: boolean;
  pattern?: string;
  name: string;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  name,
  className,
  required,
  pattern,
}) => {
  return (
    <input
      className={`w-full border-[#ABA1B6] focus:border-[#ABA1B6] rounded-md px-4 py-2 bg-[#E5DFEB] ${className}`}
      type={type}
      name={name}
      pattern={pattern}
      required={required}
      placeholder={placeholder}
    />
  );
};

export default Input;
