import React from "react";
import linkedinIcon from "../Assets/icons/linkedin.svg";
import githubIcon from "../Assets/icons/github.svg";
import upworkIcon from "../Assets/icons/upwork.svg";

interface TeamMemberCardProps {
  name: string;
  roles: string[];
  image: string;
  socials: {
    linkedin: string;
    github: string;
    upwork: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, roles, image, socials }) => {
  return (
    <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 w-full max-w-md text-center">
      {/* Profile Image */}
      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="rounded-full w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>

      {/* Roles */}
      <ul className="mt-2 text-gray-600 text-lg">
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-6 text-gray-500">
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
        </a>
        <a href={socials.upwork} target="_blank" rel="noopener noreferrer">
          <img src={upworkIcon} alt="Upwork" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;
