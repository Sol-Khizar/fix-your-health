import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
}

const FormInput = ({
  className = "",
  placeholder = "",
  ...rest
}: FormInputProps) => {
  return (
    <input
      className={`w-full border mt-2 px-4 py-3 rounded-full bg-[#DEF8DF] ${className}`}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default FormInput;
