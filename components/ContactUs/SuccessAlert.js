import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircleIcon, XIcon } from '@heroicons/react/outline';

const SuccessAlert = ({ callback }) => (
  <div className="fixed z-20 top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center">
    <div
      className="p-2 flex flex-row items-center relative w-80 sm:w-full pr-8 sm:pr-16 bg-green-500 text-white rounded-lg"
      role="alert"
    >
      <CheckCircleIcon
        className="items-center h-28 lg:h-20 xl:h-16 2xl:h-12 mr-2"
        aria-hidden="true"
      />
      <p className="font-mulish text-sm p-2 sm:text-base text-justify">
        Thank you for reaching out to us! We will get back to your enquiry as
        soon as possible
      </p>
      <span className="absolute inset-y-0 right-0 flex items-center ">
        <button type="button" onClick={() => callback(false)}>
          <XIcon className="items-center w-6 h-16 mr-2" aria-hidden="true" />
        </button>
      </span>
    </div>
  </div>
);

SuccessAlert.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default SuccessAlert;
