
import React, { useState } from "react";

interface InfoCardProps {
  label: string;
  value: string;
  className?: string;
  editable?: boolean;
  onValueChange?: (value: string) => void;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  label,
  value,
  className = "",
  editable = false,
  onValueChange,
}) => {
  const [tempValue, setTempValue] = useState(value);
  const [isActive, setIsActive] = useState(false);

  React.useEffect(() => {
    if (!editable) {
      setTempValue(value);
    }
  }, [value, editable]);

  const handleBlur = () => {
    setIsActive(false);
    onValueChange?.(tempValue);
  };

  const handleFocus = () => {
    setIsActive(true);
    setTempValue(value);
  };

  return (
    <div
      className={`border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white flex flex-col overflow-hidden justify-center w-60 px-6 py-4 rounded-lg border-solid ${className}`}
    >
      <div className="flex max-w-full w-[180px] items-center gap-4">
        <div className="self-stretch w-[180px] my-auto">
          <div className="text-sm font-normal leading-none">{label}</div>
          {editable ? (
            <input
              type="text"
              value={isActive ? tempValue : value}
              onChange={(e) => setTempValue(e.target.value)}
              onBlur={handleBlur}
              onFocus={handleFocus}
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
