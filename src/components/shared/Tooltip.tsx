import React, { ReactNode, useState } from 'react';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 bg-dark text-white text-sm rounded p-2 ease-in  whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;