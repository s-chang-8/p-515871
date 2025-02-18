
import React from "react";

interface DataItem {
  label: string;
  value: string;
}

interface DataGridProps {
  title: string;
  data: DataItem[];
  className?: string;
  editable?: boolean;
  onEdit?: (index: number, field: "label" | "value", value: string) => void;
}

export const DataGrid: React.FC<DataGridProps> = ({
  title,
  data,
  className = "",
  editable = false,
  onEdit,
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
            <div className="w-[180px]">
              {editable ? (
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) => onEdit?.(index, "label", e.target.value)}
                  className="w-full p-1 border rounded"
                />
              ) : (
                item.label
              )}
            </div>
            <div className="w-[180px]">
              {editable ? (
                <input
                  type="text"
                  value={item.value}
                  onChange={(e) => onEdit?.(index, "value", e.target.value)}
                  className="w-full p-1 border rounded"
                />
              ) : (
                item.value
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
