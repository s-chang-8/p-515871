
import React, { useState } from "react";

interface InfoCardProps {
  label: string;
  value: string;
  className?: string;
  editable?: boolean;
  onValueChange?: (value: string) => void;
  onLabelChange?: (value: string) => void;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  label,
  value,
  className = "",
  editable = false,
  onValueChange,
  onLabelChange,
}) => {
  const [tempValue, setTempValue] = useState(value);
  const [tempLabel, setTempLabel] = useState(label);
  const [isValueActive, setIsValueActive] = useState(false);
  const [isLabelActive, setIsLabelActive] = useState(false);

  React.useEffect(() => {
    if (!editable) {
      setTempValue(value);
      setTempLabel(label);
    }
  }, [value, label, editable]);

  const handleValueBlur = () => {
    setIsValueActive(false);
    onValueChange?.(tempValue);
  };

  const handleLabelBlur = () => {
    setIsLabelActive(false);
    onLabelChange?.(tempLabel);
  };

  return (
    <div
      className={`border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white flex flex-col overflow-hidden justify-center w-60 px-6 py-4 rounded-lg border-solid ${className}`}
    >
      <div className="flex max-w-full w-[180px] items-center gap-4">
        <div className="self-stretch w-[180px] my-auto">
          {editable ? (
            <input
              type="text"
              value={isLabelActive ? tempLabel : label}
              onChange={(e) => setTempLabel(e.target.value)}
              onBlur={handleLabelBlur}
              onFocus={() => setIsLabelActive(true)}
              className="text-sm font-normal leading-none w-full p-1 border rounded"
            />
          ) : (
            <div className="text-sm font-normal leading-none">{label}</div>
          )}
          {editable ? (
            <input
              type="text"
              value={isValueActive ? tempValue : value}
              onChange={(e) => setTempValue(e.target.value)}
              onBlur={handleValueBlur}
              onFocus={() => setIsValueActive(true)}
              className="text-base font-semibold w-full mt-1 p-1 border rounded"
            />
          ) : (
            <div className="text-base font-semibold leading-none tracking-[-0.32px] mt-1">
              {value}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
