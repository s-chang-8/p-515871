
import React from "react";
import { SiteHeader } from "./SiteHeader";
import { ChapterPanel } from "./ChapterPanel";
import { InfoCard } from "./InfoCard";
import { DataSection } from "./DataSection";
import { MapView } from "./MapView";
import { DataGrid } from "./DataGrid";

export const SiteReport: React.FC = () => {
  const siteInfo = [
    { label: "Address", value: "123 Orange way" },
    { label: "Power", value: "xxx" },
    { label: "Zoning", value: "xxxx" },
    { label: "Size", value: "xxxx" },
    { label: "County", value: "xxxx" },
  ];

  return (
    <div className="bg-neutral-50 overflow-hidden">
      <SiteHeader />
      <div className="flex w-full gap-6 flex-wrap px-[120px]">
        <ChapterPanel />
        <div className="min-w-60 flex-1 shrink basis-[0%]">
          <DataSection title="Overview" id="overview">
            <div className="flex gap-4 text-black flex-wrap mt-4">
              <InfoCard label="Project size" value="200 MW" />
              <InfoCard label="Project size" value="200 MW" />
            </div>

            <div className="border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white w-full overflow-hidden text-black mt-4 p-6 rounded-lg border-solid">
              <div className="w-[135px] max-w-full text-base font-semibold tracking-[-0.32px] leading-none">
                <div className="flex w-full items-center gap-2">
                  <div>Very feasible</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/977db347aa76800b7f45d135788b39ede54bd781ad7b694cb20dd8913585710b?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-sm font-normal leading-none mt-2">
                Located within an Opportunity Zone, the site benefits from a
                multitude of tax benefits.
              </div>
            </div>

            <MapView
              className="mt-4"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c757a05f7caf97f98e878e3a9dcbb2999c93a330635c7492707fc5886de6979f?placeholderIfAbsent=true"
            />

            <div className="border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white flex w-full gap-[40px_64px] overflow-hidden text-black flex-wrap mt-4 p-6 rounded-lg border-solid">
              <DataGrid title="Site information" data={siteInfo} />
              <div className="border w-0 shrink h-[188px] grow border-[rgba(240,240,240,1)] border-solid" />
              <DataGrid title="Site information" data={siteInfo} />
            </div>
          </DataSection>

          <DataSection title="Proximity" id="proximity" className="mt-10">
            <div className="flex gap-4 text-black flex-wrap mt-4">
              <InfoCard
                label="Closest freeway"
                value="Orange highway (2 miles)"
                className="pl-6 py-6"
              />
              <InfoCard
                label="Closest freeway"
                value="Orange highway (2 miles)"
                className="pl-6 py-6"
              />
            </div>

            <div className="border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white w-full overflow-hidden text-black mt-4 p-6 rounded-lg border-solid">
              <div className="w-[135px] max-w-full text-base font-semibold whitespace-nowrap tracking-[-0.32px] leading-none">
                Optimal
              </div>
              <div className="text-sm font-normal leading-5 mt-2">
                Multiple airports nearby, multiple data center sites close by,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
            </div>

            <MapView
              className="mt-4"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c757a05f7caf97f98e878e3a9dcbb2999c93a330635c7492707fc5886de6979f?placeholderIfAbsent=true"
            />
          </DataSection>

          <DataSection title="Power" id="power" className="mt-10">
            <div className="border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white w-full overflow-hidden mt-4 p-6 rounded-lg border-solid">
              <div className="w-[135px] max-w-full text-base font-semibold whitespace-nowrap tracking-[-0.32px] leading-none">
                Optimal
              </div>
              <div className="text-sm font-normal leading-5 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </DataSection>
        </div>
      </div>
    </div>
  );
};
