import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import "../../assets/tile-fabric.css";

// SVG Icons
const ImageIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="#ffe066"/><path d="M7 17l4-4 3 3 5-5" stroke="#b59b0c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="9" r="2" fill="#b59b0c"/></svg>
);
const FileIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="#ffe066"/><path d="M6 4h7l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#b59b0c" strokeWidth="2"/><path d="M13 4v5h5" stroke="#b59b0c" strokeWidth="2"/></svg>
);
const SaveImageIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#ffe066"/><path d="M12 16v-8M8 12l4 4 4-4" stroke="#b59b0c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const SaveFileIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#ffe066"/><path d="M8 12h8M8 16h8M8 8h8" stroke="#b59b0c" strokeWidth="2" strokeLinecap="round"/></svg>
);

export default function EmbossedTile({ title, value, jsonKey, image, file, jsonData }) {
  const tileRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Download tile as PNG
  const handleSaveAsImage = async (e) => {
    e.stopPropagation();
    if (tileRef.current) {
      const canvas = await html2canvas(tileRef.current, { backgroundColor: null });
      const link = document.createElement("a");
      link.download = `${title}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  // Download tile as JSON
  const handleSaveAsFile = (e) => {
    e.stopPropagation();
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.download = `${title}.json`;
    link.href = URL.createObjectURL(blob);
    link.click();
  };

  return (
    <div
      ref={tileRef}
      tabIndex={0}
      aria-label={title}
      className={`relative group focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow duration-200 bg-[#ffe066] rounded-3xl
        shadow-[inset_4px_4px_12px_#e6d267,inset_-4px_-4px_12px_#b59b0c,0_2px_8px_#b59b0c]
        border-2 border-[#ffe066]
        p-4 m-2 w-[160px] h-[160px] flex flex-col items-center justify-center select-none
        active:shadow-[inset_2px_2px_8px_#b59b0c,inset_-2px_-2px_8px_#e6d267,0_2px_8px_#b59b0c]
        cursor-pointer
      `}
      style={{
        boxShadow: '0 2px 8px #b59b0c, inset 4px 4px 12px #e6d267, inset -4px -4px 12px #b59b0c',
        backgroundImage: 'none',
        backgroundColor: '#ffe066',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setShowTooltip(false); }}
      onFocus={() => setHovered(true)}
      onBlur={() => { setHovered(false); setShowTooltip(false); }}
    >
      {/* Top-right icons */}
      <div className="absolute top-3 right-3 flex items-center space-x-1 z-10">
        {image && <span title="Image attached"><ImageIcon /></span>}
        {file && <span title="File attached"><FileIcon /></span>}
      </div>
      {/* Hover actions */}
      {(hovered || document.activeElement === tileRef.current) && (
        <div className="absolute top-3 right-3 flex flex-row space-x-2 z-20 animate-fade-in">
          <button
            aria-label="Save as Image"
            className="bg-[#ffe066] rounded-full shadow-[2px_2px_8px_#b59b0c,inset_1px_1px_4px_#e6d267] p-2 mr-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-opacity duration-200 hover:scale-110"
            onClick={handleSaveAsImage}
            tabIndex={0}
          >
            <SaveImageIcon />
          </button>
          <button
            aria-label="Save as File"
            className="bg-[#ffe066] rounded-full shadow-[2px_2px_8px_#b59b0c,inset_1px_1px_4px_#e6d267] p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-opacity duration-200 hover:scale-110"
            onClick={handleSaveAsFile}
            tabIndex={0}
          >
            <SaveFileIcon />
          </button>
        </div>
      )}
      {/* Title and tooltip */}
      <div
        className="text-lg font-semibold text-[#b59b0c] cursor-pointer relative text-center drop-shadow-lg"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        tabIndex={0}
        aria-describedby={`tooltip-${jsonKey}`}
        style={{textShadow: '0 2px 8px #e6d267'}}>
        {title}
        {showTooltip && (
          <span
            id={`tooltip-${jsonKey}`}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded-lg bg-[#ffe066] text-white text-xs shadow-lg z-30 animate-fade-in"
            role="tooltip"
          >
            Key: {jsonKey}
          </span>
        )}
      </div>
      {/* Value (if not shown as title) */}
      {typeof value === "string" && value !== title && (
        <div className="mt-2 text-[#b59b0c] text-sm break-words text-center drop-shadow" style={{textShadow: '0 1px 4px #e6d267'}}>{value}</div>
      )}
      {/* Image preview */}
      {image && (
        <img
          src={image}
          alt="Preview"
          className="mt-3 rounded-xl shadow-inner w-16 h-16 object-cover border border-[#ffe066]"
          style={{ maxWidth: 64, maxHeight: 64 }}
        />
      )}
    </div>
  );
}
