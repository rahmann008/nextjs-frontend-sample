import React, { useState } from 'react';
import Image from 'next/image';
import teamList from '../../teamList.json';

const Team = () => {
  const [executive, setExecutive] = useState(true);
  const [malaysiaLeaderships, setMalaysiaLeaderships] = useState(false);

  const handleClickExecutive = () => {
    setMalaysiaLeaderships(false);
    setExecutive(true);
  };

  const handleClickMalaysiaLeaderships = () => {
    setMalaysiaLeaderships(true);
    setExecutive(false);
  };
  return (
    <div id="4">
      <div className="h-full md:mb-24">
        <div className="flex flex-col px-8 pt-12 sm:pt-32 sm:px-12 xl:px-20 place-content-between md:w-3/4 xl:w-1/2">
          <div className="mb-6 text-3xl lg:text-4xl xl:text-5xl font-mulish-bold">
            Meet Our Team
          </div>
          <div className="flex flex-row mb-24">
            <button
              type="button"
              onClick={() => handleClickExecutive()}
              className={`absolute font-mulish-semibold sm:mr-12 text-sm sm:text-base ${
                executive ? 'border-b-4 border-secondary' : ''
              }`}
            >
              Executive Leaderships
            </button>
            <button
              type="button"
              onClick={() => handleClickMalaysiaLeaderships()}
              className={`absolute font-mulish-semibold ml-44 sm:ml-64 text-sm sm:text-base ${
                malaysiaLeaderships ? 'border-b-4 border-secondary' : ''
              }`}
            >
              Malaysia Leaderships
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:gap-y-8 2xl:p-24">
          {teamList.map(team => {
            if (
              team.category ===
              (executive ? 'Executive Leadership' : 'Malaysia Leaderships')
            ) {
              return (
                <div className="flex justify-center items-center">
                  <div className="text-center w-3/4 lg:w-7/12 mb-12 sm:mb-0">
                    <div className="relative items-center justify-center w-64 h-44 left-1/2 -translate-x-1/2">
                      <Image
                        src={team.image}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                    <div className="text-xl text-primary font-mulish-bold my-4">
                      {team.name}
                    </div>
                    <div className="text-sm font-mulish-bold leading-loose">
                      {team.position.map(position => (
                        <div key={position.id}>{position}</div>
                      ))}
                    </div>
                    {executive && (
                      <button
                        type="button"
                        className="relative border bg-secondary text-white font-mulish-bold rounded-xl w-44 h-12 my-6"
                      >
                        View Details
                      </button>
                    )}
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

export default Team;
