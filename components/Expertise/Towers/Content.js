import React, { useState } from 'react';
import DownloadButton from '../../Common/DownloadButton';
import SubContent from '../../Common/SubContent';

const Content = () => {
  const [ground, setGround] = useState(true);
  const [rooftop, setRooftop] = useState(false);
  const [monopole, setMonopole] = useState(false);
  const [special, setSpecial] = useState(false);
  const [temporary, setTemporary] = useState(false);

  const handleClick = type => {
    switch (type) {
      case 'Ground':
        setGround(true);
        setRooftop(false);
        setMonopole(false);
        setSpecial(false);
        setTemporary(false);
        break;
      case 'Rooftop':
        setGround(false);
        setRooftop(true);
        setMonopole(false);
        setSpecial(false);
        setTemporary(false);
        break;
      case 'Monopole':
        setGround(false);
        setRooftop(false);
        setMonopole(true);
        setSpecial(false);
        setTemporary(false);
        break;
      case 'Special':
        setGround(false);
        setRooftop(false);
        setMonopole(false);
        setSpecial(true);
        setTemporary(false);
        break;
      case 'Temporary':
        setGround(false);
        setRooftop(false);
        setMonopole(false);
        setSpecial(false);
        setTemporary(true);
        break;
      default:
        setGround(true);
        setRooftop(false);
        setMonopole(false);
        setSpecial(false);
        setTemporary(false);
    }
  };

  return (
    <>
      <div className="px-10 pt-16 pb-8 xl:p-20">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="sm:w-3/4">
            <div className="mb-6 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-mulish-bold lg:mb-12">
              Towers
            </div>
            <div className="mb-8 text-sm text-justify lg:text-lg 2xl:text-xl font-mulish">
              Our array of towers and innovative solutions are catered to meet
              the growing needs for quick market coverage with optimal network
              facilities.
            </div>
          </div>
          <DownloadButton href="#">Download Leaflet</DownloadButton>
        </div>
        <div className="hidden sm:flex flex-col sm:flex-row">
          <div>
            <button
              type="button"
              onClick={() => handleClick('Ground')}
              className={`text-xs lg:text-sm xl:text-base absolute font-mulish-semibold ${
                ground ? 'border-b-4 border-primary' : ''
              }`}
            >
              Ground Based Towers
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
              Rooftops
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleClick('Monopole')}
              className={`text-xs lg:text-sm xl:text-base absolute font-mulish-semibold ml-56 md:ml-72 lg:ml-80 xl:ml-116 ${
                monopole ? 'border-b-4 border-primary' : ''
              }`}
            >
              Monopoles
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleClick('Special')}
              className={`text-xs lg:text-sm xl:text-base absolute font-mulish-semibold ml-80 md:ml-104 lg:ml-112 xl:ml-168 ${
                special ? 'border-b-4 border-primary' : ''
              }`}
            >
              Special Structures
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleClick('Temporary')}
              className={`text-xs lg:text-sm xl:text-base absolute font-mulish-semibold ml-112 md:ml-148 lg:ml-156 xl:ml-220 ${
                temporary ? 'border-b-4 border-primary' : ''
              }`}
            >
              Temporary Structures
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
          <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify mb-8">
            Lattice configuration of conventional 3-legged (tubular) and
            4-legged (angular) ground based towers that are suitable for higher
            capacity and macro coverage requirements.
          </div>
          <div className="md:text-xl 2xl:text-2xl font-mulish-bold text-justify mb-6 lg:mb-8">
            Services include:
          </div>
          <div className="md:text-lg 2xl:text-xl font-mulish text-justify mb-6 lg:mb-8 ml-6">
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
          <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify mb-8">
            edotco has formed partnerships with property owners to create
            greater opportunities for increased network coverage. We support our
            customers&apops; needs to provide coverage in densely populated
            areas through innovative rooftop tower solutions.
          </div>
          <div className="md:text-xl 2xl:text-2xl font-mulish-bold text-justify mb-6 lg:mb-8">
            Services include:
          </div>
          <div className="md:text-lg 2xl:text-xl font-mulish text-justify mb-6 lg:mb-8 ml-6">
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
          <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify mb-8">
            With its hollow tubular or polygonal tubes, these poles can be
            custom-designed for a variety of single or multi-user
            configurations. Flange joint or slip in joint assembly designs are
            available and it comes in a wide variety of finishes to meet local
            aesthetic and zoning requirements. Its slim design makes it ideal to
            deploy in populated areas.
          </div>
          <div className="md:text-xl 2xl:text-2xl font-mulish-bold text-justify mb-6 lg:mb-8">
            Services include:
          </div>
          <div className="md:text-lg 2xl:text-xl font-mulish text-justify mb-6 lg:mb-8 ml-6">
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
          <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify mb-8">
            edotco&apos;s special structures feature innovative solutions such
            as monopole, aesthetic monopoles, lamp pole and rapid assembly pole,
            with the goals of reducing visual impact to the environment and at
            the same time offering coverage support in urban areas. edotco also
            step forward by offering sustainable solutions such as bamboo
            structures and carbon fibre structures which are built using
            sustainable materials. These innovations reinforced edotco&apos;s
            foothold at the forefront of sustainable and green engineering.
          </div>
          <div className="md:text-xl 2xl:text-2xl font-mulish-bold text-justify mb-6 lg:mb-8">
            Services include:
          </div>
          <div className="md:text-lg 2xl:text-xl font-mulish text-justify mb-6 lg:mb-8 ml-6">
            <ul className="list-disc">
              <li>Specifications1</li>
              <li>Specifications2</li>
              <li>Specifications3</li>
              <li>Specifications4</li>
            </ul>
          </div>
        </SubContent>
      )}
      {temporary && (
        <SubContent
          img="/img/expertise/towers/towers-img-ts.png"
          title="Temporary Structures"
          RTL
          expertise
        >
          <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify mb-8">
            Infrastructure that is portable on trucks, allowing fast and easy
            installation in restricted areas. COWs are strategically used for
            the rapid cellular network expansion, putting into service
            point-to-point radio connections to support sudden increase of
            mobile traffic in case of special events or emergencies. Designed to
            be a temporary solution, COWs require neither civil works nor
            foundations.
          </div>
          <div className="md:text-xl 2xl:text-2xl font-mulish-bold text-justify mb-6 lg:mb-8">
            Services include:
          </div>
          <div className="md:text-lg 2xl:text-xl font-mulish text-justify mb-6 lg:mb-8 ml-6">
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
