import React from "react";

interface MissionSectionProps {
  id: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({ id }) => {
  return (
    <section className="flex flex-col items-center py-20 bg-transparent">
      <div className="flex justify-center items-start space-x-[-3rem]">
        {/* Discover */}
        <div className="flex flex-col items-center w-80 text-center">
          <div className="w-80 h-80 bg-[#92B4EC]/70 rounded-full flex justify-center items-center text-3xl font-semibold shadow-lg">
            <span>Discover</span>
          </div>
          <p className="mt-6 text-gray-700 text-base w-40">
            Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        {/* Mission */}
        <div className="flex flex-col items-center w-80 text-center -ml-20">
          <div className="w-80 h-80 bg-[#92B4EC]/70 rounded-full flex justify-center items-center text-3xl font-semibold shadow-lg">
            <span>Mission</span>
          </div>
          <p className="mt-6 text-gray-700 text-base w-40">
            Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-center w-80 text-center -ml-20">
          <div className="w-80 h-80 bg-[#92B4EC]/70 rounded-full flex justify-center items-center text-3xl font-semibold shadow-lg">
            <span>Vision</span>
          </div>
          <p className="mt-6 text-gray-700 text-base w-40">
            Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
