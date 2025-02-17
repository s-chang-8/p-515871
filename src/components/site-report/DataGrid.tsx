import React from "react";

interface DataItem {
  label: string;
  value: string;
}

interface DataGridProps {
  title: string;
  data: DataItem[];
  className?: string;
}

export const DataGrid: React.FC<DataGridProps> = ({
  title,
  data,
  className = "",
}) => {
  return (
    <div className={`min-w-60 grow shrink w-[388px] ${className}`}>
      <div className="text-base font-semibold leading-none tracking-[-0.32px]">
        {title}
      </div>
      <div className="w-full text-sm font-normal leading-none mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex w-full gap-6 ${index > 0 ? "mt-2" : ""}`}
          >
            <div className="w-[180px]">{item.label}</div>
            <div className="w-[180px]">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
