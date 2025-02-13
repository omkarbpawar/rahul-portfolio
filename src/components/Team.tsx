import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    name: "Rahul Kumar Sahoo",
    roles: ["Data Scientist", "Cloud Architect", "DevOps Engineer", "Data Engineer"],
    image: "/Assets/team/rahul.png",
    socials: {
      linkedin: "https://linkedin.com/in/rahul",
      github: "https://github.com/rahul",
      upwork: "https://www.upwork.com/rahul",
    },
  },
  {
    name: "Omkar Balbhim Pawar",
    roles: ["Project Manager", "UI/UX Designer", "Full Stack Developer"],
    image: "/Assets/team/omkar.png",
    socials: {
      linkedin: "https://linkedin.com/in/omkar",
      github: "https://github.com/omkar",
      upwork: "https://www.upwork.com/omkar",
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
