import React from "react";

interface InfoCardProps {
  label: string;
  value: string;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  label,
  value,
  className = "",
}) => {
  return (
    <div
      className={`border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white flex flex-col overflow-hidden justify-center w-60 px-6 py-4 rounded-lg border-solid ${className}`}
    >
      <div className="flex max-w-full w-[180px] items-center gap-4">
        <div className="self-stretch w-[180px] my-auto">
          <div className="text-sm font-normal leading-none">{label}</div>
          <div className="text-base font-semibold leading-none tracking-[-0.32px] mt-1">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};
