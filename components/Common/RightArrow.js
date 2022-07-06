import React from 'react';
import PropTypes from 'prop-types';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';

const RightArrow = ({ children }) => (
  <div className="flex flex-row items-center justify-start text-xs duration-500 cursor-pointer lg:hover:translate-x-6 md:text-sm xl:text-base font-mulish-semibold text-emerald-600">
    {children}
    <ArrowCircleRightIcon className="w-4 h-4 ml-1 sm:ml-2 sm:h-5 sm:w-5" />
  </div>
);

RightArrow.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RightArrow;
