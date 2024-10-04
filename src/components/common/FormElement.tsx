import React from "react";

interface Props {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
  isRequired?: boolean;
  error: string | undefined;
  describedBy: string;
}

export default function FormElement({
  children,
  htmlFor,
  label,
  isRequired = true,
  error,
  describedBy,
}: Props) {
  return (
    <div className="grid grid-cols-1 items-center gap-3 border-b-2 py-5 first:pt-0 md:grid-cols-3 md:gap-6 [&>:nth-child(2)]:sm:w-[65%] [&>:nth-child(2)]:md:w-full">
      <label htmlFor={htmlFor} className="font-medium">
        {isRequired && <span className="text-red-400">* </span>}
        {label}
      </label>

      {children}

      {error !== undefined && (
        <span id={describedBy} className="font-medium text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}
