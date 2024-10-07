import React from "react";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  extraClasses?: string;
}

export default function Button({
  children,
  disabled = false,
  onClick,
  extraClasses,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-xl bg-indigo-600 px-4 py-1.5 text-lg font-medium text-white outline-indigo-600 duration-200 hover:bg-indigo-700 focus:outline-2 focus:outline-offset-4 ${extraClasses}`}
    >
      {children}
    </button>
  );
}