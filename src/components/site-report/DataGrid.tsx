
import React, { useState } from "react";

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
  onTitleEdit?: (title: string) => void;
}

interface EditableFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const EditableField: React.FC<EditableFieldProps> = ({ value, onChange }) => {
  const [tempValue, setTempValue] = useState(value);
  const [isActive, setIsActive] = useState(false);

  React.useEffect(() => {
    if (!isActive) {
      setTempValue(value);
    }
  }, [value, isActive]);

  const handleBlur = () => {
    setIsActive(false);
    onChange(tempValue);
  };

  return (
    <input
      type="text"
      value={isActive ? tempValue : value}
      onChange={(e) => setTempValue(e.target.value)}
      onBlur={handleBlur}
      onFocus={() => setIsActive(true)}
      className="w-full p-1 border rounded"
    />
  );
};

export const DataGrid: React.FC<DataGridProps> = ({
  title,
  data,
  className = "",
  editable = false,
  onEdit,
  onTitleEdit,
}) => {
  const [tempTitle, setTempTitle] = useState(title);
  const [isTitleActive, setIsTitleActive] = useState(false);

  React.useEffect(() => {
    if (!editable) {
      setTempTitle(title);
    }
  }, [title, editable]);

  const handleTitleBlur = () => {
    setIsTitleActive(false);
    onTitleEdit?.(tempTitle);
  };

  return (
    <div className={`min-w-60 grow shrink w-[388px] ${className}`}>
      {editable ? (
        <input
          type="text"
          value={isTitleActive ? tempTitle : title}
          onChange={(e) => setTempTitle(e.target.value)}
          onBlur={handleTitleBlur}
          onFocus={() => setIsTitleActive(true)}
          className="text-base font-semibold w-full p-1 border rounded"
        />
      ) : (
        <div className="text-base font-semibold leading-none tracking-[-0.32px]">
          {title}
        </div>
      )}
      <div className="w-full text-sm font-normal leading-none mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex w-full gap-6 ${index > 0 ? "mt-2" : ""}`}
          >
            <div className="w-[180px]">
              {editable ? (
                <EditableField
                  value={item.label}
                  onChange={(value) => onEdit?.(index, "label", value)}
                />
              ) : (
                item.label
              )}
            </div>
            <div className="w-[180px]">
              {editable ? (
                <EditableField
                  value={item.value}
                  onChange={(value) => onEdit?.(index, "value", value)}
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
