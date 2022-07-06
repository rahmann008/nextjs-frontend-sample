import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const SubContent = ({ img, title, children, RTL, expertise }) => (
  <>
    <div
      className={`bg-white h-full flex flex-row ${
        RTL ? 'justify-start' : 'justify-end'
      } items-center`}
    >
      <div
        className={`relative z-10 w-full px-12 py-6 bg-white xl:absolute ${
          RTL ? 'xl:left-160 2xl:left-256' : 'xl:right-160 2xl:right-256'
        } xl:w-1/2 2xl:w-1/3 xl:drop-shadow-xl ${expertise ? 'xl:mt-96' : ''}`}
      >
        <div className="flex flex-col">
          <div className="w-10/12">
            <div className="text-3xl sm:text-5xl font-mulish-bold sm:mb-12">
              {title}
            </div>
          </div>
          {children}
        </div>
      </div>
      <div className="relative right-0 hidden xl:inline xl:w-296 xl:h-180">
        <Image src={img} alt="" layout="fill" objectFit="cover" priority />
      </div>
    </div>
  </>
);

SubContent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  RTL: PropTypes.bool,
  expertise: PropTypes.bool,
};

SubContent.defaultProps = {
  RTL: false,
  expertise: false,
};

export default SubContent;
