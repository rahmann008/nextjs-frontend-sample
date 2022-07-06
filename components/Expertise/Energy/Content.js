import React, { useState } from 'react';
import DownloadButton from '../../Common/DownloadButton';
import SubContent from '../../Common/SubContent';

const Content = () => {
  const [alc, setAlc] = useState(true);
  const [aas, setAas] = useState(false);
  const [ge, setGe] = useState(false);

  const handleClick = type => {
    switch (type) {
      case 'alc':
        setAlc(true);
        setAas(false);
        setGe(false);
        break;
      case 'aas':
        setAlc(false);
        setAas(true);
        setGe(false);
        break;
      case 'ge':
        setAlc(false);
        setAas(false);
        setGe(true);
        break;
      default:
        setAlc(true);
        setAas(false);
        setGe(false);
    }
  };

  return (
    <>
      <div className="px-10 pt-16 pb-8 xl:p-20">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="sm:w-3/4">
            <div className="mb-6 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-mulish-bold lg:mb-12">
              Energy
            </div>
            <div className="mb-8 text-sm text-justify lg:text-lg 2xl:text-xl font-mulish">
              We provide a suite of solutions to ensure energy supply that is
              both cost effective and environmentally conscious. Our customers
              can opt for a solution that best meets their needs to address
              specific pain points.
            </div>
          </div>
          <DownloadButton href="#">Download Leaflet</DownloadButton>
        </div>
        <div className="hidden sm:flex flex-col sm:flex-row">
          <div>
            <button
              type="button"
              onClick={() => handleClick('alc')}
              className={`text-xs lg:text-sm xl:text-base absolute font-mulish-semibold ${
                alc ? 'border-b-4 border-primary' : ''
              }`}
            >
              Energy Ala Carte
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleClick('aas')}
              className={`text-xs lg:text-sm xl:text-base absolute font-mulish-semibold ml-36 md:ml-44 lg:ml-52 xl:ml-64 ${
                aas ? 'border-b-4 border-primary' : ''
              }`}
            >
              Energy as a Service
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleClick('ge')}
              className={`text-xs lg:text-sm xl:text-base absolute font-mulish-semibold ml-56 md:ml-72 lg:ml-80 xl:ml-140 ${
                ge ? 'border-b-4 border-primary' : ''
              }`}
            >
              Green Energy
            </button>
          </div>
        </div>
      </div>
      {alc && (
        <SubContent
          img="/img/expertise/energy/energy-alacarte-img.png"
          title="Energy Ala Carte"
          RTL
          expertise
        >
          <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify mb-8">
            Giving our customers the flexibility to choose and to deploy and
            manage various components within the energy ecosystem that address
            their business needs, allowing customers to complement their
            existing assets while enjoying the benefits of end to end energy
            management solutions.
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
      {aas && (
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
      {ge && (
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
    </>
  );
};

export default Content;
