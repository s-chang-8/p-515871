
import React from "react";

export const SiteHeader: React.FC = () => {
  return (
    <div className="bg-neutral-50 flex min-h-16 w-full items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap px-[120px] py-4 sticky top-0 z-50">
      <div className="text-black text-xl font-semibold leading-[1.2] tracking-[-0.4px] self-stretch my-auto">
        Data Center Site
      </div>
      <div className="self-stretch flex items-center gap-2 text-sm font-medium text-center leading-none my-auto">
        <button className="justify-center items-center border border-[color:var(--border-border-base,#E0DFE5)] shadow-[0px_1px_4px_-2px_rgba(10,9,13,0.08),0px_4px_4px_-2px_rgba(10,9,13,0.04)] bg-white self-stretch flex min-h-8 overflow-hidden text-black whitespace-nowrap my-auto px-2 py-[9px] rounded-lg border-solid">
          <div className="self-stretch gap-2 my-auto px-1">Edit</div>
        </button>
        <button className="justify-center items-center shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-[#047D69] self-stretch flex min-h-8 overflow-hidden text-[#010101] my-auto px-2 py-[9px] rounded-lg">
          <div className="self-stretch gap-2 my-auto px-1">
            Explore services
          </div>
        </button>
      </div>
    </div>
  );
};
