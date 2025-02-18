
import React, { useState } from "react";
import { SiteHeader } from "./SiteHeader";
import { ChapterPanel } from "./ChapterPanel";
import { InfoCard } from "./InfoCard";
import { DataSection } from "./DataSection";
import { MapView } from "./MapView";
import { DataGrid } from "./DataGrid";
import { RiskLevelDropdown } from "./RiskLevelDropdown";
import { toast } from "sonner";

export const SiteReport: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [originalData, setOriginalData] = useState({
    projectSize1: "200 MW",
    projectSize2: "200 MW",
    feasibilityLevel: "very feasible",
    feasibilityText: "Located within an Opportunity Zone, the site benefits from a multitude of tax benefits.",
    siteInfo1: {
      title: "Site information",
      data: [
        { label: "Address", value: "123 Orange way" },
        { label: "Power", value: "xxx" },
        { label: "Zoning", value: "xxxx" },
      ],
    },
    siteInfo2: {
      title: "Additional information",
      data: [
        { label: "Size", value: "xxxx" },
        { label: "County", value: "xxxx" },
        { label: "Status", value: "Active" },
      ],
    },
    proximityLevel: "optimal",
    proximityText: "Multiple airports nearby, multiple data center sites close by...",
    proximityCard1: {
      label: "Closest freeway",
      value: "Orange highway (2 miles)"
    },
    proximityCard2: {
      label: "Closest airport",
      value: "International Airport (5 miles)"
    },
    powerLevel: "optimal",
    powerText: "Lorem ipsum dolor sit amet...",
    overviewMapUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c757a05f7caf97f98e878e3a9dcbb2999c93a330635c7492707fc5886de6979f?placeholderIfAbsent=true",
    proximityMapUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c757a05f7caf97f98e878e3a9dcbb2999c93a330635c7492707fc5886de6979f?placeholderIfAbsent=true",
  });
  const [editData, setEditData] = useState(originalData);

  const handleSave = () => {
    setOriginalData(editData);
    toast.success("Changes saved successfully!");
    setIsEditing(false);
  };

  const handleExitEditing = () => {
    setEditData(originalData);
    setIsEditing(false);
  };

  const handleEdit = (field: string, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSiteInfoEdit = (section: "siteInfo1" | "siteInfo2", title: string) => {
    setEditData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        title
      }
    }));
  };

  const handleSiteInfoDataEdit = (
    section: "siteInfo1" | "siteInfo2",
    index: number,
    field: "label" | "value",
    value: string
  ) => {
    setEditData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        data: prev[section].data.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        )
      }
    }));
  };

  const EditableText = ({ value, onChange, textarea = false }: { value: string; onChange: (value: string) => void; textarea?: boolean }) => {
    const [tempValue, setTempValue] = useState(value);
    const [isActive, setIsActive] = useState(false);

    React.useEffect(() => {
      if (!isEditing) {
        setTempValue(value);
      }
    }, [value, isEditing]);

    const handleBlur = () => {
      setIsActive(false);
      onChange(tempValue);
    };

    const handleFocus = () => {
      setIsActive(true);
      setTempValue(value);
    };

    if (!isEditing) return <div className="text-sm font-normal leading-5">{value}</div>;
    
    return textarea ? (
      <textarea
        value={isActive ? tempValue : value}
        onChange={(e) => setTempValue(e.target.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className="w-full p-2 border rounded-md text-sm font-normal leading-5 min-h-[100px]"
      />
    ) : (
      <input
        type="text"
        value={isActive ? tempValue : value}
        onChange={(e) => setTempValue(e.target.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className="w-full p-2 border rounded-md text-sm font-normal leading-5"
      />
    );
  };

  return (
    <div className="bg-neutral-50 overflow-hidden">
      <SiteHeader 
        isEditing={isEditing} 
        onEditToggle={isEditing ? handleExitEditing : () => setIsEditing(true)} 
        onSave={handleSave}
      />
      <div className="flex w-full gap-6 flex-wrap px-[120px]">
        <ChapterPanel 
          feasibilityLevel={editData.feasibilityLevel}
          proximityLevel={editData.proximityLevel}
          powerLevel={editData.powerLevel}
        />
        <div className="min-w-60 flex-1 shrink basis-[0%]">
          <DataSection title="Overview" id="overview">
            <div className="flex gap-4 text-black flex-wrap mt-4">
              <InfoCard 
                label="Project size" 
                value={editData.projectSize1}
                editable={isEditing}
                onValueChange={(value) => handleEdit("projectSize1", value)}
                onLabelChange={(value) => handleEdit("projectSize1Label", value)}
              />
              <InfoCard 
                label="Project size" 
                value={editData.projectSize2}
                editable={isEditing}
                onValueChange={(value) => handleEdit("projectSize2", value)}
                onLabelChange={(value) => handleEdit("projectSize2Label", value)}
              />
            </div>

            <div className="border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white w-full overflow-hidden text-black mt-4 p-6 rounded-lg border-solid">
              <RiskLevelDropdown
                value={editData.feasibilityLevel}
                onChange={(value) => handleEdit("feasibilityLevel", value)}
                type="feasibility"
                editable={isEditing}
              />
              <EditableText
                value={editData.feasibilityText}
                onChange={(value) => handleEdit("feasibilityText", value)}
              />
            </div>

            <MapView
              className="mt-4"
              imageUrl={editData.overviewMapUrl}
              editable={isEditing}
              onImageChange={(url) => handleEdit("overviewMapUrl", url)}
            />

            <div className="border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white flex w-full gap-[40px_64px] overflow-hidden text-black flex-wrap mt-4 p-6 rounded-lg border-solid">
              <DataGrid 
                title={editData.siteInfo1.title}
                data={editData.siteInfo1.data}
                editable={isEditing}
                onTitleEdit={(title) => handleSiteInfoEdit("siteInfo1", title)}
                onEdit={(index, field, value) => handleSiteInfoDataEdit("siteInfo1", index, field, value)}
              />
              <div className="border w-0 shrink h-[188px] grow border-[rgba(240,240,240,1)] border-solid" />
              <DataGrid 
                title={editData.siteInfo2.title}
                data={editData.siteInfo2.data}
                editable={isEditing}
                onTitleEdit={(title) => handleSiteInfoEdit("siteInfo2", title)}
                onEdit={(index, field, value) => handleSiteInfoDataEdit("siteInfo2", index, field, value)}
              />
            </div>
          </DataSection>

          <DataSection title="Proximity" id="proximity" className="mt-10">
            <div className="flex gap-4 text-black flex-wrap mt-4">
              <InfoCard
                label={editData.proximityCard1.label}
                value={editData.proximityCard1.value}
                className="pl-6 py-6"
                editable={isEditing}
                onValueChange={(value) => handleEdit("proximityCard1Value", value)}
                onLabelChange={(value) => handleEdit("proximityCard1Label", value)}
              />
              <InfoCard
                label={editData.proximityCard2.label}
                value={editData.proximityCard2.value}
                className="pl-6 py-6"
                editable={isEditing}
                onValueChange={(value) => handleEdit("proximityCard2Value", value)}
                onLabelChange={(value) => handleEdit("proximityCard2Label", value)}
              />
            </div>

            <div className="border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white w-full overflow-hidden text-black mt-4 p-6 rounded-lg border-solid">
              <RiskLevelDropdown
                value={editData.proximityLevel}
                onChange={(value) => handleEdit("proximityLevel", value)}
                type="optimal"
                editable={isEditing}
              />
              <EditableText
                value={editData.proximityText}
                onChange={(value) => handleEdit("proximityText", value)}
                textarea
              />
            </div>

            <MapView
              className="mt-4"
              imageUrl={editData.proximityMapUrl}
              editable={isEditing}
              onImageChange={(url) => handleEdit("proximityMapUrl", url)}
            />
          </DataSection>

          <DataSection title="Power" id="power" className="mt-10">
            <div className="border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white w-full overflow-hidden mt-4 p-6 rounded-lg border-solid">
              <RiskLevelDropdown
                value={editData.powerLevel}
                onChange={(value) => handleEdit("powerLevel", value)}
                type="optimal"
                editable={isEditing}
              />
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
