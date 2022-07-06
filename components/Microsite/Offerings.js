import React from 'react';
import PropTypes from 'prop-types';
import Sections from '../Expertise/Sections';

const Offerings = ({
  GBT,
  RT,
  MN,
  SS,
  TS,
  IBS,
  BTS,
  SCS,
  ECHO,
  EAC,
  EAS,
  GE,
  POM,
  FL,
}) => (
  <div
    id="1"
    className="bg-grey flex flex-col justify-center items-center p-8 md:p-14 xl:p-20 xl:pt-32"
  >
    <div className="xl:w-1/2 text-center mb-12">
      <div className="text-3xl lg:text-4xl xl:text-5xl font-mulish-bold mb-4">
        Our Offerings
      </div>
      <div className="text-sm lg:text-lg 2xl:text-xl font-mulish-semibold">
        Our complementary offerings are designed to meet the changing needs of
        our customers and promote increased sharing of infrastructure assets.
      </div>
    </div>
    <div className="grid md:grid-cols-3">
      {GBT && (
        <Sections
          icon="towers-icon.png"
          title="Ground Based Towers"
          href="/expertise/towers"
        >
          Lattice configuration of conventional 3-legged (tubular) and 4-legged
          (angular) ground based towers that are suitable for higher capacity
          and macro coverage requirements.
        </Sections>
      )}
      {RT && (
        <Sections
          icon="towers-icon.png"
          title="Rooftops"
          href="/expertise/towers"
        >
          edotco has formed partnerships with property owners to create greater
          opportunities for increased network coverage.
        </Sections>
      )}
      {MN && (
        <Sections
          icon="towers-icon.png"
          title="Monopoles"
          href="/expertise/towers"
        >
          edotco’s special structures feature innovative solutions such as
          monopole, aesthetic monopoles, lamp pole and rapid assembly pole
        </Sections>
      )}
      {SS && (
        <Sections
          icon="towers-icon.png"
          title="Special Structures"
          href="/expertise/towers"
        >
          edotco&apos;s special structures feature innovative solutions such as
          monopole, aesthetic monopoles, lamp pole and rapid assembly pole, with
          the goals of reducing visual impact to the environment and at the same
          time offering coverage support in urban areas.
        </Sections>
      )}
      {TS && (
        <Sections
          icon="towers-icon.png"
          title="Temporary Structures"
          href="/expertise/towers"
        >
          Infrastructure that is portable on trucks, allowing fast and easy
          installation in restricted areas. COWs are strategically used for the
          rapid cellular network expansion
        </Sections>
      )}
      {IBS && (
        <Sections
          icon="solutions-icon.png"
          title="In-Building Solutions (IBS)"
          href="/expertise/solutions"
        >
          An end-to-end solution with a special focus on system design to
          enhance coverage within a building. Built on a foundation of quality
          and reliability, edotco’s customised In-Building Solutions offer
          customers a high level of network performance with low total cost of
          ownership.
        </Sections>
      )}
      {BTS && (
        <Sections
          icon="solutions-icon.png"
          title="Base Tranceiver Stations (BTS) Hotel"
          href="/expertise/solutions"
        >
          The High Speed Mobility Solution aggregates fixed and wireless
          traffic…
        </Sections>
      )}
      {SCS && (
        <Sections
          icon="solutions-icon.png"
          title="Small Cell Solutions"
          href="/expertise/solutions"
        >
          The smart small cell solution creates a network of exceptionally
          low-cost, plug-and-play, open access, indoor…
        </Sections>
      )}
      {ECHO && (
        <Sections
          icon="solutions-icon.png"
          title="echo"
          href="/expertise/solutions"
        >
          edotco&apos;s special structures feature innovative solutions such as
          monopole, aesthetic monopoles, lamp pole and rapid assembly pole, with
          the goals of reducing visual impact to the environment and at the same
          time offering coverage support in urban areas.
        </Sections>
      )}
      {EAC && (
        <Sections
          icon="energy-icon.png"
          title="Energy Ala Carte"
          href="/expertise/energy"
        >
          edotco&apos;s special structures feature innovative solutions such as
          monopole, aesthetic monopoles, lamp pole and rapid assembly pole, with
          the goals of reducing visual impact to the environment and at the same
          time offering coverage support in urban areas.
        </Sections>
      )}
      {EAS && (
        <Sections
          icon="energy-icon.png"
          title="Energy As a Service"
          href="/expertise/energy"
        >
          edotco&apos;s special structures feature innovative solutions such as
          monopole, aesthetic monopoles, lamp pole and rapid assembly pole, with
          the goals of reducing visual impact to the environment and at the same
          time offering coverage support in urban areas.
        </Sections>
      )}
      {GE && (
        <Sections
          icon="energy-icon.png"
          title="Green Energy"
          href="/expertise/energy"
        >
          Giving our customers the flexibility to choose and to deploy and
          manage various components within the ener…
        </Sections>
      )}
      {POM && (
        <Sections
          icon="msom-icon.png"
          title="Passive Operations and Maintenance"
          href="/expertise/msom"
        >
          Through the use of next generation technology like drones and tapping
          into…
        </Sections>
      )}
      {FL && (
        <Sections
          icon="fibre-icon.png"
          title="Fibre Leasing"
          href="/expertise/fibre"
        >
          With the growing demand for data usage and to support 5G and future
          technologies, fibre connectivity is of…
        </Sections>
      )}
    </div>
  </div>
);

Offerings.propTypes = {
  GBT: PropTypes.bool.isRequired,
  RT: PropTypes.bool.isRequired,
  MN: PropTypes.bool.isRequired,
  SS: PropTypes.bool.isRequired,
  TS: PropTypes.bool.isRequired,
  IBS: PropTypes.bool.isRequired,
  BTS: PropTypes.bool.isRequired,
  SCS: PropTypes.bool.isRequired,
  ECHO: PropTypes.bool.isRequired,
  EAC: PropTypes.bool.isRequired,
  EAS: PropTypes.bool.isRequired,
  GE: PropTypes.bool.isRequired,
  POM: PropTypes.bool.isRequired,
  FL: PropTypes.bool.isRequired,
};

export default Offerings;
