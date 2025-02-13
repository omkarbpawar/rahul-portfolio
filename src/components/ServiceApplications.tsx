import React from "react";
import ServiceApplicationCard from "./ServiceApplicationCard";

const serviceApplications = [
  {
    id: "01",
    title: "Cloud & DevOps",
    description: "Automating cloud infrastructure and optimizing deployment workflows for scalable solutions.",
    icon: "/Assets/icons/cloud-devops.png",
  },
  {
    id: "02",
    title: "Data Engineering",
    description: "Building robust ETL pipelines and scalable data lakes for analytics and AI-driven insights.",
    icon: "/Assets/icons/data-engineering.png",
  },
  {
    id: "03",
    title: "Full-Stack Development",
    description: "Crafting high-performance web applications with modern frameworks and best practices.",
    icon: "/Assets/icons/full-stack.png",
  },
];

interface ServiceApplicationsProps {
  id?: string;
}

const ServiceApplications: React.FC<ServiceApplicationsProps> = ({ id }) => {
  return (
    <section id={id} className="bg-[#FBF9F4] py-20 px-6 md:px-10 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Service Applications</h2>

        <div className="relative flex flex-col items-center space-y-16">
          {serviceApplications.map((service, index) => (
            <ServiceApplicationCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isLeftAligned={index % 2 === 0} // Alternates left and right alignment dynamically
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceApplications;
