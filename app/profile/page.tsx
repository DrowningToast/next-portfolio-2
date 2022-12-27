"use client";

import { NextPage } from "next";
import { ProfileInfo } from "../../components/constants";

const ProfilePage: NextPage = () => {
  return (
    <main className="bg-gradient-to-r from-blue-400 to-blue-600 w-full h-full md:px-12 md:pt-14 min-h-screen">
      <h1 className="font-sans-serif font-white text-white md:text-6xl font-bold mb-4">
        {`Hi I'm Gus`}
      </h1>
      <p className="font-sans text-white leading-4 md:text-xl">
        {`I’m currently studying first year in Information Technology at king
        mongkut's institute of technology ladkrabang. While I can do a fullstack
        work, I fell in love with building creative websites. I’m passionated in
        3D website and fullstack web application.`}
      </p>
      <div className="w-fit">
        {ProfileInfo.map((info, index) => {
          return (
            <div
              key={`profile-${index}`}
              className="flex text-white font-sans-serif items-center my-16 gap-x-2 w-auto"
            >
              {info.icon}
              <div className="flex flex-col">
                <h5 className="font-white md:text-xl">{info.top}</h5>
                <h2 className="md:text-3xl">{info.title}</h2>
                <h4 className="md:text-xl font-bold font-sans self-end transform translate-y-2 text-opacity-50">
                  {info.subtitle}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ProfilePage;
