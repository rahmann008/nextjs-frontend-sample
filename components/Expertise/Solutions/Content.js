import React, { useState } from 'react';
import DownloadButton from '../../Common/DownloadButton';
import SubContent from '../../Common/SubContent';

const Content = () => {
  const [ground, setGround] = useState(true);
  const [rooftop, setRooftop] = useState(false);
  const [monopole, setMonopole] = useState(false);
  const [special, setSpecial] = useState(false);

  const handleClick = type => {
    switch (type) {
      case 'Ground':
        setGround(true);
        setRooftop(false);
        setMonopole(false);
        setSpecial(false);
        break;
      case 'Rooftop':
        setGround(false);
        setRooftop(true);
        setMonopole(false);
        setSpecial(false);
        break;
      case 'Monopole':
        setGround(false);
        setRooftop(false);
        setMonopole(true);
        setSpecial(false);
        break;
      case 'Special':
        setGround(false);
        setRooftop(false);
        setMonopole(false);
        setSpecial(true);
        break;
      default:
        setGround(true);
        setRooftop(false);
        setMonopole(false);
        setSpecial(false);
    }
  };

  return (
    <>
      <div className="px-10 pt-16 pb-8 xl:p-20">
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="sm:w-3/4">
            <div className="mb-6 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-mulish-bold lg:mb-12">
              Solutions
            </div>
            <div className="mb-8 text-sm text-justify lg:text-lg 2xl:text-xl font-mulish">
              A wide range of configurable options and accessories allow our
              towers to be customised to meet your needs and provide solutions
              not offered by other tower or mast systems.
            </div>
          </div>
          <DownloadButton href="#">Download Leaflet</DownloadButton>
        </div>
        <div className="flex-col hidden sm:flex sm:flex-row">
          <div>
            <button
              type="button"
              onClick={() => handleClick('Ground')}
              className={`text-xs lg:text-sm xl:text-base absolute font-mulish-semibold ${
                ground ? 'border-b-4 border-primary' : ''
              }`}
            >
              In-Building Solutions (IBS)
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleClick('Rooftop')}
              className={`text-xs lg:text-sm xl:text-base absolute font-mulish-semibold ml-36 md:ml-44 lg:ml-52 xl:ml-64 ${
                rooftop ? 'border-b-4 border-primary' : ''
              }`}
            >
              Base Tranceiver Station (BTS) Hotel
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleClick('Monopole')}
              className={`text-xs lg:text-sm xl:text-base absolute font-mulish-semibold ml-56 md:ml-72 lg:ml-80 xl:ml-140 ${
                monopole ? 'border-b-4 border-primary' : ''
              }`}
            >
              Small Cell Solutions
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleClick('Special')}
              className={`text-xs lg:text-sm xl:text-base absolute font-mulish-semibold ml-80 md:ml-104 lg:ml-112 xl:ml-188 ${
                special ? 'border-b-4 border-primary' : ''
              }`}
            >
              Echo
            </button>
          </div>
        </div>
      </div>
      {ground && (
        <SubContent
          img="/img/expertise/towers/towers-img-gbt.png"
          title="Ground Based Towers"
          RTL
          expertise
        >
          <div className="mb-8 text-sm text-justify lg:text-lg 2xl:text-xl font-mulish">
            Lattice configuration of conventional 3-legged (tubular) and
            4-legged (angular) ground based towers that are suitable for higher
            capacity and macro coverage requirements.
          </div>
          <div className="mb-6 text-justify md:text-xl 2xl:text-2xl font-mulish-bold lg:mb-8">
            Services include:
          </div>
          <div className="mb-6 ml-6 text-justify md:text-lg 2xl:text-xl font-mulish lg:mb-8">
            <ul className="list-disc">
              <li>Specifications1</li>
              <li>Specifications2</li>
              <li>Specifications3</li>
              <li>Specifications4</li>
            </ul>
          </div>
        </SubContent>
      )}
      {rooftop && (
        <SubContent
          img="/img/expertise/towers/towers-img-r.png"
          title="Rooftops"
          RTL
          expertise
        >
          <div className="mb-8 text-sm text-justify lg:text-lg 2xl:text-xl font-mulish">
            edotco has formed partnerships with property owners to create
            greater opportunities for increased network coverage. We support our
            customers&apops; needs to provide coverage in densely populated
            areas through innovative rooftop tower solutions.
          </div>
          <div className="mb-6 text-justify md:text-xl 2xl:text-2xl font-mulish-bold lg:mb-8">
            Services include:
          </div>
          <div className="mb-6 ml-6 text-justify md:text-lg 2xl:text-xl font-mulish lg:mb-8">
            <ul className="list-disc">
              <li>Specifications1</li>
              <li>Specifications2</li>
              <li>Specifications3</li>
              <li>Specifications4</li>
            </ul>
          </div>
        </SubContent>
      )}
      {monopole && (
        <SubContent
          img="/img/expertise/towers/towers-img-m.png"
          title="Monopoles"
          RTL
          expertise
        >
          <div className="mb-8 text-sm text-justify lg:text-lg 2xl:text-xl font-mulish">
            With its hollow tubular or polygonal tubes, these poles can be
            custom-designed for a variety of single or multi-user
            configurations. Flange joint or slip in joint assembly designs are
            available and it comes in a wide variety of finishes to meet local
            aesthetic and zoning requirements. Its slim design makes it ideal to
            deploy in populated areas.
          </div>
          <div className="mb-6 text-justify md:text-xl 2xl:text-2xl font-mulish-bold lg:mb-8">
            Services include:
          </div>
          <div className="mb-6 ml-6 text-justify md:text-lg 2xl:text-xl font-mulish lg:mb-8">
            <ul className="list-disc">
              <li>Specifications1</li>
              <li>Specifications2</li>
              <li>Specifications3</li>
              <li>Specifications4</li>
            </ul>
          </div>
        </SubContent>
      )}
      {special && (
        <SubContent
          img="/img/expertise/towers/towers-img-ss.png"
          title="Special Structures"
          RTL
          expertise
        >
          <div className="mb-8 text-sm text-justify lg:text-lg 2xl:text-xl font-mulish">
            edotco’s special structures feature innovative solutions such as
            monopole, aesthetic monopoles, lamp pole and rapid assembly pole,
            with the goals of reducing visual impact to the environment and at
            the same time offering coverage support in urban areas. edotco also
            step forward by offering sustainable solutions such as bamboo
            structures and carbon fibre structures which are built using
            sustainable materials. These innovations reinforced edotco’s
            foothold at the forefront of sustainable and green engineering.
          </div>
          <div className="mb-6 text-justify md:text-xl 2xl:text-2xl font-mulish-bold lg:mb-8">
            Services include:
          </div>
          <div className="mb-6 ml-6 text-justify md:text-lg 2xl:text-xl font-mulish lg:mb-8">
            <ul className="list-disc">
              <li>Specifications1</li>
              <li>Specifications2</li>
              <li>Specifications3</li>
              <li>Specifications4</li>
            </ul>
          </div>
        </SubContent>
      )}
    </>
  );
};

export default Content;
