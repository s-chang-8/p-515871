import React from "react";

interface DataSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const DataSection: React.FC<DataSectionProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div className={`flex w-full flex-col items-stretch ${className}`}>
      <div className="self-stretch w-full text-lg text-black font-semibold whitespace-nowrap tracking-[-0.36px] leading-none">
        {title}
      </div>
      {children}
    </div>
  );
};
