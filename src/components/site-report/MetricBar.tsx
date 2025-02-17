import React from "react";

interface MetricBarProps {
  value: number; // Value between 1-5
  className?: string;
}

export const MetricBar: React.FC<MetricBarProps> = ({
  value,
  className = "",
}) => {
  const bars = Array(5)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className={`self-stretch w-[26px] shrink h-1 flex-1 basis-[0%] my-auto border-[rgba(5,166,139,1)] border-solid border-4`}
      />
    ));

  return (
    <div className={`flex w-full items-center gap-0.5 mt-2 ${className}`}>
      {bars}
    </div>
  );
};
