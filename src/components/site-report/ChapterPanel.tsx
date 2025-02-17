import React from "react";
import { MetricBar } from "./MetricBar";

export const ChapterPanel: React.FC = () => {
  return (
    <div className="border border-[color:var(--border-border-base,#E5E5E5)] shadow-[0px_6px_12px_-6px_rgba(20,20,20,0.08),0px_8px_24px_-4px_rgba(20,20,20,0.04)] bg-neutral-50 overflow-hidden w-[188px] rounded-xl border-solid">
      <div className="bg-white border-neutral-200 flex w-full items-stretch gap-5 overflow-hidden text-black px-0.5 border-b">
        <div className="w-1 shrink-0 h-[76px] border-[rgba(28,28,28,1)] border-solid border-4" />
        <div className="my-auto">
          <div className="text-sm font-semibold leading-none tracking-[-0.28px]">
            Overview
          </div>
          <div className="flex w-full items-center gap-1 text-xs font-normal leading-none mt-1">
            <div className="self-stretch gap-0.5 my-auto">Very feasible</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dabc896febb20fdfe379427a4de05165be0fb67c3c73d2076e58cac3aa463ce?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-neutral-50 border-neutral-200 flex w-full flex-col overflow-hidden items-stretch justify-center px-[19px] py-4 border-b">
        <div>
          <div className="text-black text-sm font-semibold leading-none tracking-[-0.28px]">
            Proximity
          </div>
          <div className="flex w-full flex-col items-stretch mt-1">
            <div className="gap-0.5 text-xs text-black font-normal whitespace-nowrap leading-none">
              Optimal
            </div>
            <MetricBar value={5} />
          </div>
        </div>
      </div>
      <div className="bg-neutral-50 border-neutral-200 flex w-full flex-col overflow-hidden items-stretch justify-center px-[19px] py-4 border-b">
        <div>
          <div className="text-black text-sm font-semibold leading-none tracking-[-0.28px]">
            Power
          </div>
          <div className="flex w-full flex-col items-stretch mt-1">
            <div className="gap-0.5 text-xs text-black font-normal whitespace-nowrap leading-none">
              Optimal
            </div>
            <MetricBar value={5} />
          </div>
        </div>
      </div>
    </div>
  );
};
