import React from "react";

const MissionSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-20 bg-transparent">
      <div className="flex justify-center items-start -ml-10 space-x-[-4rem]">
        {/* Discover */}
        <div className="flex flex-col items-center w-72 text-center">
          <div className="w-80 h-80 bg-yellow-300/70 rounded-full flex justify-center items-center text-3xl font-semibold shadow-lg">
            <span>Discover</span>
          </div>
          <p className="mt-6 text-gray-700 text-base w-64">
            Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        {/* Mission */}
        <div className="flex flex-col items-center w-72 text-center -ml-16">
          <div className="w-80 h-80 bg-yellow-300/70 rounded-full flex justify-center items-center text-3xl font-semibold shadow-lg">
            <span>Mission</span>
          </div>
          <p className="mt-6 text-gray-700 text-base w-64">
            Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-center w-72 text-center -ml-16">
          <div className="w-80 h-80 bg-yellow-300/70 rounded-full flex justify-center items-center text-3xl font-semibold shadow-lg">
            <span>Vision</span>
          </div>
          <p className="mt-6 text-gray-700 text-base w-64">
            Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
