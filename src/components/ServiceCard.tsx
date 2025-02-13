// src/components/ServiceCard.tsx
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-center space-x-6 max-w-md">
      {/* Icon */}
      <div className="w-60 h-20 rounded-full bg-yellow-300 flex items-center justify-center shadow-lg">
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>
      
      {/* Text */}
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
