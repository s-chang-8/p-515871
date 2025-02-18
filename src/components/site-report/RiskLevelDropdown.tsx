
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type FeasibilityLevel = "very feasible" | "feasible" | "light risk" | "some risk" | "risky";
export type OptimalLevel = "optimal" | "good" | "light risk" | "some risk" | "risky";

interface RiskLevelDropdownProps {
  value: string;
  onChange: (value: string) => void;
  type: "feasibility" | "optimal";
  editable?: boolean;
}

export const RiskLevelDropdown: React.FC<RiskLevelDropdownProps> = ({
  value,
  onChange,
  type,
  editable = false,
}) => {
  const options = type === "feasibility" 
    ? ["very feasible", "feasible", "light risk", "some risk", "risky"]
    : ["optimal", "good", "light risk", "some risk", "risky"];

  if (!editable) {
    return <div className="text-base font-semibold tracking-[-0.32px] leading-none">{value}</div>;
  }

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select level" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
