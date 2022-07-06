import React from 'react';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

const SubmitButton = () => (
  <button
    type="submit"
    className="flex flex-row items-center px-12 mb-6 text-lg text-white transition-colors rounded-lg font-mulish md:px-24 focus:shadow-outline hover:bg-green-600 bg-secondary md:text-2xl"
  >
    Submit
    <ArrowNarrowRightIcon
      className="items-center w-6 h-16 ml-2"
      aria-hidden="true"
    />
  </button>
);

export default SubmitButton;
