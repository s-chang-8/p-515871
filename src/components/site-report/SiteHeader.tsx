
import React from "react";

interface SiteHeaderProps {
  isEditing: boolean;
  onEditToggle: () => void;
  onSave: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  isEditing,
  onEditToggle,
  onSave,
}) => {
  return (
    <div className="bg-neutral-50 flex min-h-16 w-full items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap px-[120px] py-4 sticky top-0 z-50">
      <div className="text-black text-xl font-semibold leading-[1.2] tracking-[-0.4px] self-stretch my-auto">
        Data Center Site
      </div>
      <div className="self-stretch flex items-center gap-2 text-sm font-medium text-center leading-none my-auto">
        {isEditing ? (
          <>
            <button
              onClick={onSave}
              className="justify-center items-center shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-[#047D69] self-stretch flex min-h-8 overflow-hidden text-white my-auto px-4 py-[9px] rounded-lg"
            >
              Save changes
            </button>
            <button
              onClick={onEditToggle}
              className="justify-center items-center border border-[color:var(--border-border-base,#E0DFE5)] shadow-[0px_1px_4px_-2px_rgba(10,9,13,0.08),0px_4px_4px_-2px_rgba(10,9,13,0.04)] bg-white self-stretch flex min-h-8 overflow-hidden text-black whitespace-nowrap my-auto px-4 py-[9px] rounded-lg border-solid"
            >
              Exit editing
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onEditToggle}
              className="justify-center items-center border border-[color:var(--border-border-base,#E0DFE5)] shadow-[0px_1px_4px_-2px_rgba(10,9,13,0.08),0px_4px_4px_-2px_rgba(10,9,13,0.04)] bg-white self-stretch flex min-h-8 overflow-hidden text-black whitespace-nowrap my-auto px-4 py-[9px] rounded-lg border-solid"
            >
              Edit
            </button>
            <button className="justify-center items-center shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-[#047D69] self-stretch flex min-h-8 overflow-hidden text-[#010101] my-auto px-4 py-[9px] rounded-lg">
              Explore services
            </button>
          </>
        )}
      </div>
    </div>
  );
};
