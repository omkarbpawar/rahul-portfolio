import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import RahulImg from "../Assets/rahul.webp";
import OmkarImg from "../Assets/omkar.jpeg";

const teamMembers = [
  {
    name: "Rahul Kumar Sahoo",
    roles: ["Data Scientist", "Cloud Architect", "DevOps Engineer", "Data Engineer"],
    image: RahulImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/rahulkumar-sahoo/",
      github: "https://github.com/LilMonk",
      upwork: "https://www.upwork.com/freelancers/~01669f7ede78a55c28",
    },
  },
  {
    name: "Omkar Balbhim Pawar",
    roles: ["Project Manager", "UI/UX Designer", "Full Stack Developer"],
    image: OmkarImg,
    socials: {
      linkedin: "www.linkedin.com/in/omkar-pawar-b40952204",
      github: "",
      upwork: "",
    },
  },
];

interface TeamProps {
  id?: string;
}

const Team: React.FC<TeamProps> = ({ id }) => {
  return (
    <section id={id} className="bg-[#FBF9F4] py-20 px-6 md:px-10 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Team</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              roles={member.roles}
              image={member.image}
              socials={member.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
