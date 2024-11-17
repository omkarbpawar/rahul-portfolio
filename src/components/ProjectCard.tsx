// src/components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, techStack, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-500 text-sm mb-4">
        {techStack.map((tech, idx) => (
          <li key={idx} className="inline-block mr-2 px-2 py-1 bg-gray-200 rounded-full">
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
