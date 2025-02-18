
import React, { useState } from "react";
import { ImageUploadModal } from "./ImageUploadModal";

interface MapViewProps {
  imageUrl: string;
  className?: string;
  onImageChange?: (newImageUrl: string) => void;
  editable?: boolean;
}

export const MapView: React.FC<MapViewProps> = ({
  imageUrl,
  className = "",
  onImageChange,
  editable = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    if (editable) {
      setIsModalOpen(true);
    }
  };

  const handleUpload = (newImageUrl: string) => {
    onImageChange?.(newImageUrl);
  };

  return (
    <>
      <div
        className={`border border-[color:var(--border-border-subtle,#F0F0F0)] shadow-[0px_1px_4px_-2px_rgba(20,20,20,0.08),0px_4px_4px_-2px_rgba(20,20,20,0.04)] bg-white w-full overflow-hidden rounded-lg border-solid ${className} ${
          editable ? "cursor-pointer hover:opacity-90" : ""
        }`}
        onClick={handleImageClick}
      >
        <img
          loading="lazy"
          src={imageUrl}
          className="aspect-[1.96] object-contain w-full"
          alt="Site map"
        />
      </div>
      <ImageUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpload={handleUpload}
      />
    </>
  );
};
