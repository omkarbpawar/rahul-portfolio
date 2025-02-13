// src/components/ServicesSection.tsx
import React from "react";
import ServiceCard from "./ServiceCard";
import CloudImg from "../Assets/icons/cloud-devops.svg";
import DataScienceImg from "../Assets/icons/data-science.svg";
import BigDataImg from "../Assets/icons/big-data.svg";
import FullStackImg from "../Assets/icons/full-stack.svg";
import { data } from "autoprefixer";

interface ServicesSectionProps {
  id?: string;
}

const services = [
  {
    title: "Cloud & DevOps",
    description: "Automating infrastructure, optimizing cloud resources, and ensuring high availability with CI/CD and Kubernetes.",
    icon: CloudImg,
  },
  {
    title: "Data Science & AI",
    description: "Building AI/ML models, predictive analytics, and automating data-driven decision-making.",
    icon: DataScienceImg,
  },
  {
    title: "Big Data & ETL Pipelines",
    description: "Processing large-scale datasets, designing ETL/ELT pipelines, and optimizing data warehouses.",
    icon: BigDataImg,
  },
  {
    title: "Full Stack Development",
    description: "Developing scalable, modern web and mobile applications with a seamless user experience.",
    icon: FullStackImg,
  },
  {
    title: "Project Management & Consulting",
    description: "Managing software projects using Agile, ensuring efficiency, and delivering technical roadmaps.",
    icon: "/Assets/icons/project-management.png",
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Crafting user-friendly interfaces with research-backed design and interactive prototypes.",
    icon: "/Assets/icons/ui-ux.png",
  },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ id }) => {
  return (
    <section id={id} className="bg-[#FBF9F4] py-20 px-6 md:px-10 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-10 px-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
