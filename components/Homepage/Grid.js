import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Grid = ({ title, body, children }) => (
  <div className="relative z-10 flex items-center justify-center px-5 text-center text-white border hover:bg-secondary group">
    <div className="flex flex-col items-center justify-center w-full h-24 group-hover:opacity-0 group-hover:hidden lg:h-40 xl:h-104">
      <div className="mb-4 text-4xl xl:text-5xl font-mulish-bold">{title}</div>
      <div className="text-xl xl:text-2xl font-mulish-semibold">{body}</div>
    </div>
    <div className="flex-col items-center justify-center hidden w-full h-24 lg:h-40 xl:h-104 group-hover:flex">
      <div className="hidden mb-4 text-2xl md:block lg:text-3xl xl:text-5xl font-mulish-bold">
        {title}
      </div>
      <div className="hidden text-sm md:block lg:text-base xl:text-2xl font-mulish-semibold">
        {body}
      </div>
      <div className="hidden w-full my-4 border-b-2 md:block" />
      <div className="z-10 text-base sm:text-xs lg:text-sm xl:text-xl font-mulish-semibold">
        {children}
      </div>
      <div className="absolute bottom-0 transform -translate-x-1/2 opacity-50 left-1/2 translate-y-1/4 w-96 h-96">
        <Image
          src="/img/common/bg/semicircle-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  </div>
);

Grid.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Grid;
