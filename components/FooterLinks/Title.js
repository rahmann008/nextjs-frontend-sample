import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Title = ({ title, children }) => (
  <>
    <div className="absolute left-0 w-24 h-24 sm:w-44 sm:h-44">
      <Image
        src="/img/common/bg/down-quarter-wave-pattern.png"
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
    <div className="flex flex-col items-center px-10 py-8 text-center sm:py-12 sm:px-20 lg:py-24 lg:px-40">
      <div className="text-2xl md:text-3xl lg:text-6xl font-mulish-bold mb-4 sm:mb-6">
        {title}
      </div>
      <div className="text-sm sm:text-xl lg:text-2xl font-mulish mb-6">
        {children}
      </div>
      <div className="relative w-6 h-6 lg:mt-12 sm:w-8 sm:h-8 lg:w-16 lg:h-16">
        <Image
          src="/img/expertise/main/seperator.png"
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  </>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Title;
