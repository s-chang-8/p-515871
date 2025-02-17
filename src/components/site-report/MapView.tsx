import React from "react";

interface MapViewProps {
  imageUrl: string;
  className?: string;
}

export const MapView: React.FC<MapViewProps> = ({
  imageUrl,
  className = "",
}) => {
  return (
    <div
      className={`border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white w-full overflow-hidden rounded-lg border-solid ${className}`}
    >
      <img
        loading="lazy"
        src={imageUrl}
        className="aspect-[1.96] object-contain w-full"
        alt="Site map"
      />
    </div>
  );
};
