import React from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';

const FindOutMore = () => (
  <div className="flex flex-row items-center float-right mt-6 text-lg duration-500 cursor-pointer lg:hover:translate-x-6 md:text-2xl font-mulish-extralight">
    Find out more
    <ArrowCircleRightIcon
      className="w-12 h-12 ml-2 md:w-16 md:h-16"
      aria-hidden="true"
    />
  </div>
);

export default FindOutMore;
