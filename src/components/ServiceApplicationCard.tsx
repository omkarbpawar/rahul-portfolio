import React from "react";

interface ServiceApplicationCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  isLeftAligned: boolean;
}

const ServiceApplicationCard: React.FC<ServiceApplicationCardProps> = ({
  id,
  title,
  description,
  icon,
  isLeftAligned,
}) => {
  return (
    <div className={`relative flex items-center w-full ${isLeftAligned ? "flex-row" : "flex-row-reverse"}`}>

      {/* Circle Container with Connector Box */}
      <div className={`relative flex items-center w-1/2 ${isLeftAligned ? "justify-start" : "justify-end"}`}>
      {/* Circle Icon */}
      <div className="relative w-28 h-28 flex items-center justify-center bg-[#92B4EC] rounded-full shadow-lg border-4 border-blue-300 z-10">
        <div className="absolute inset-0 bg-white rounded-full flex flex-col items-center justify-center border-[4px] border-white shadow-md p-2">
        <span className="text-lg font-bold text-gray-900">{id}</span>
        <img src={icon} alt={title} className="w-10 h-10 opacity-80 mt-1" />
        </div>
      </div>

      {/* Connector Box extending from the circle to the content */}
      <div className={`absolute ${isLeftAligned ? "left-28" : "right-28"} top-1/2 transform -translate-y-1/2 h-4 bg-[#92B4EC]`} style={{ width: 'calc(100% - 7rem)' }}></div>
      </div>

      {/* Content Section */}
      <div className={`w-1/2 px-8 ${isLeftAligned ? "text-left" : "text-right"}`}>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
      </div>

        </div>
  );
};

export default ServiceApplicationCard;
