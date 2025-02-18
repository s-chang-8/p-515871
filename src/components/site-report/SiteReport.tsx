
import React, { useState } from "react";
import { SiteHeader } from "./SiteHeader";
import { ChapterPanel } from "./ChapterPanel";
import { InfoCard } from "./InfoCard";
import { DataSection } from "./DataSection";
import { MapView } from "./MapView";
import { DataGrid } from "./DataGrid";
import { toast } from "sonner";

export const SiteReport: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    projectSize1: "200 MW",
    projectSize2: "200 MW",
    feasibilityText: "Located within an Opportunity Zone, the site benefits from a multitude of tax benefits.",
    siteInfo: [
      { label: "Address", value: "123 Orange way" },
      { label: "Power", value: "xxx" },
      { label: "Zoning", value: "xxxx" },
      { label: "Size", value: "xxxx" },
      { label: "County", value: "xxxx" },
    ],
    proximityText: "Multiple airports nearby, multiple data center sites close by, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    powerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });

  const handleSave = () => {
    // Here you would typically save the data to a backend
    toast.success("Changes saved successfully!");
    setIsEditing(false);
  };

  const handleEdit = (field: string, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSiteInfoEdit = (index: number, field: "label" | "value", value: string) => {
    setEditData(prev => ({
      ...prev,
      siteInfo: prev.siteInfo.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const EditableText = ({ value, onChange, textarea = false }: { value: string; onChange: (value: string) => void; textarea?: boolean }) => {
    if (!isEditing) return <div className="text-sm font-normal leading-5">{value}</div>;
    
    return textarea ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-md text-sm font-normal leading-5 min-h-[100px]"
      />
    ) : (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-md text-sm font-normal leading-5"
      />
    );
  };

  return (
    <div className="bg-neutral-50 overflow-hidden">
      <SiteHeader 
        isEditing={isEditing} 
        onEditToggle={() => setIsEditing(!isEditing)} 
        onSave={handleSave}
      />
      <div className="flex w-full gap-6 flex-wrap px-[120px]">
        <ChapterPanel />
        <div className="min-w-60 flex-1 shrink basis-[0%]">
          <DataSection title="Overview" id="overview">
            <div className="flex gap-4 text-black flex-wrap mt-4">
              <InfoCard 
                label="Project size" 
                value={editData.projectSize1}
                editable={isEditing}
                onValueChange={(value) => handleEdit("projectSize1", value)}
              />
              <InfoCard 
                label="Project size" 
                value={editData.projectSize2}
                editable={isEditing}
                onValueChange={(value) => handleEdit("projectSize2", value)}
              />
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
              <EditableText
                value={editData.feasibilityText}
                onChange={(value) => handleEdit("feasibilityText", value)}
              />
            </div>

            <MapView
              className="mt-4"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c757a05f7caf97f98e878e3a9dcbb2999c93a330635c7492707fc5886de6979f?placeholderIfAbsent=true"
            />

            <div className="border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white flex w-full gap-[40px_64px] overflow-hidden text-black flex-wrap mt-4 p-6 rounded-lg border-solid">
              <DataGrid 
                title="Site information" 
                data={editData.siteInfo} 
                editable={isEditing}
                onEdit={handleSiteInfoEdit}
              />
              <div className="border w-0 shrink h-[188px] grow border-[rgba(240,240,240,1)] border-solid" />
              <DataGrid 
                title="Site information" 
                data={editData.siteInfo}
                editable={isEditing}
                onEdit={handleSiteInfoEdit}
              />
            </div>
          </DataSection>

          <DataSection title="Proximity" id="proximity" className="mt-10">
            <div className="flex gap-4 text-black flex-wrap mt-4">
              <InfoCard
                label="Closest freeway"
                value="Orange highway (2 miles)"
                className="pl-6 py-6"
                editable={isEditing}
                onValueChange={(value) => {}}
              />
              <InfoCard
                label="Closest freeway"
                value="Orange highway (2 miles)"
                className="pl-6 py-6"
                editable={isEditing}
                onValueChange={(value) => {}}
              />
            </div>

            <div className="border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white w-full overflow-hidden text-black mt-4 p-6 rounded-lg border-solid">
              <div className="w-[135px] max-w-full text-base font-semibold whitespace-nowrap tracking-[-0.32px] leading-none">
                Optimal
              </div>
              <EditableText
                value={editData.proximityText}
                onChange={(value) => handleEdit("proximityText", value)}
                textarea
              />
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
              <EditableText
                value={editData.powerText}
                onChange={(value) => handleEdit("powerText", value)}
                textarea
              />
            </div>
          </DataSection>
        </div>
      </div>
    </div>
  );
};
