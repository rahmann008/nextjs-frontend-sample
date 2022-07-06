import React from 'react';
import DownloadButton from '../../Common/DownloadButton';
import SubContent from '../../Common/SubContent';

const Content = () => (
  <>
    <div className="px-10 pt-16 pb-8 xl:px-20">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="sm:w-3/4">
          <div className="mb-6 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-mulish-bold lg:mb-12">
            Fibre
          </div>
          <div className="text-sm text-justify lg:text-lg 2xl:text-xl font-mulish">
            With the growing demand for data usage and to support 5G and future
            technologies, fibre connectivity is often becoming a necessity. We
            partner with various industry leaders to provide connectivity
            infrastructure with multi-tenant capabilities including fronthaul
            and backhaul fibre services.
          </div>
        </div>
        <DownloadButton href="#">Download Leaflet</DownloadButton>
      </div>
    </div>
    <SubContent
      img="/img/expertise/solutions/solutions-ibs.png"
      title="Fibre"
      RTL
      expertise
    >
      <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify mb-8">
        Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
        malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at
        vestibulum nisi. Nullam vehicula nisi velit.
      </div>
      <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify mb-8">
        Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
        malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at
        vestibulum nisi. Nullam vehicula nisi velit.
      </div>
    </SubContent>
  </>
);

export default Content;
