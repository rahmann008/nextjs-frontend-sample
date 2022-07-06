import React, { useState } from 'react';
import Image from 'next/image';
import teamList from '../../teamList.json';

const MeetOurTeam = () => {
  const [directors, setDirectors] = useState(true);
  const [executive, setExecutive] = useState(false);

  const handleClickDirectors = () => {
    setDirectors(true);
    setExecutive(false);
  };

  const handleClickExecutive = () => {
    setDirectors(false);
    setExecutive(true);
  };
  return (
    <div>
      <div className="h-full bg-grey">
        <div className="flex flex-col px-8 pt-20 sm:px-12 xl:px-20 place-content-between md:w-3/4 xl:w-1/2">
          <div className="mb-6 text-3xl lg:text-4xl xl:text-5xl font-mulish-bold">
            Meet Our Team
          </div>
          <div className="flex flex-row mb-24">
            <button
              type="button"
              onClick={() => handleClickDirectors()}
              className={`absolute font-mulish-semibold mr-12 ${
                directors ? 'border-b-4 border-secondary' : ''
              }`}
            >
              Board of Directors
            </button>
            <button
              type="button"
              onClick={() => handleClickExecutive()}
              className={`absolute font-mulish-semibold ml-64 ${
                executive ? 'border-b-4 border-secondary' : ''
              }`}
            >
              Executive Leadership
            </button>
            <button
              type="button"
              className="absolute mr-12 ml-128 font-mulish-semibold"
            >
              Country &amp; Business Leadership
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 p-24 gap-y-44">
          {teamList.map(team => {
            if (
              team.category ===
              (directors ? 'Board of Directors' : 'Executive Leadership')
            ) {
              return (
                <div className="flex justify-center">
                  <div className="w-7/12 text-center">
                    <div
                      className={`relative ${
                        directors ? 'w-72 h-72' : 'w-96 h-72'
                      }`}
                    >
                      <Image
                        src={team.image}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                    <div className="h-12 my-4 text-xl text-primary font-mulish-bold">
                      {team.name}
                    </div>
                    <div className="text-sm leading-loose font-mulish-bold h-36">
                      {team.position.map(position => (
                        <div key={position.id}>{position}</div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="relative h-12 text-white border bg-secondary font-mulish-bold rounded-xl w-44"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
