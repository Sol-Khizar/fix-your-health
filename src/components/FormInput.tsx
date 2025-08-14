import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  error?: string;
}

const FormInput = ({
  className = "",
  placeholder = "",
  error,
  ...rest
}: FormInputProps) => {
  return (
    <div className="w-full mt-2">
      <input
        className={`w-full border px-4 py-3 rounded-full bg-[#DEF8DF] ${
          error ? "border-red-500" : ""
        } ${className}`}
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
