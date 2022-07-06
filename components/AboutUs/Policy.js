import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import DownloadButton from '../Common/DownloadButton';

const PolicyCard = ({ children, buttonDescription, buttonHref }) => (
  <div className="grid items-center justify-center w-full py-8 my-5 transition duration-500 ease-in-out border-2 rounded-lg shadow-md sm:flex flex-column md:flex-row sm:p-6 xl:my-6">
    <div className="relative hidden w-8 h-8 p-2 md:grid place-items-center sm:h-12 sm:w-12">
      <Image
        src="/img/common/icon/pdf-icon.png"
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
    <div className="w-full px-6 md:pl-6 md:pr-12">
      <div className="pb-4 text-sm leading-relaxed xl:text-basee 2xl:text-2xl font-mulish-bold">
        <div className="mt-4">{children}</div>
      </div>
    </div>
    {buttonDescription[0] && (
      <DownloadButton href={buttonHref}>{buttonDescription[0]}</DownloadButton>
    )}
    {buttonDescription[1] && (
      <>
        <div className="ml-4" />
        <DownloadButton href={buttonHref}>
          {buttonDescription[1]}
        </DownloadButton>
      </>
    )}
  </div>
);

const Policy = () => {
  const [employees, setEmployees] = useState(true);
  const [vendors, setVendors] = useState(false);
  const handleClickEmployees = () => {
    setEmployees(true);
    setVendors(false);
  };
  const handleClickVendors = () => {
    setEmployees(false);
    setVendors(true);
  };
  return (
    <div className="h-full px-8 mb-10 bg-white mt-128 sm:px-12 xl:px-20 md:mb-24">
      <div className="flex flex-col place-content-between md:w-3/4 xl:w-1/2">
        <div className="mb-12 text-3xl lg:text-4xl xl:text-5xl font-mulish-bold">
          List of Policies
        </div>
        <div className="mb-12">
          <button
            type="button"
            onClick={() => handleClickEmployees()}
            className={`text-xl font-mulish-bold border rounded-xl w-80 h-44 mr-12 ${
              employees ? `bg-secondary text-white` : ''
            }`}
          >
            For Employees
          </button>
          <button
            type="button"
            onClick={() => handleClickVendors()}
            className={`text-xl font-mulish-bold border rounded-xl w-80 h-44 ${
              vendors ? `bg-secondary` : ''
            }`}
          >
            For Vendors
          </button>
        </div>
      </div>
      {employees && (
        <div>
          <PolicyCard
            buttonDescription={['View Policy Statement', 'View Policy']}
            buttonHref={['#', '#']}
          >
            Code of Conduct &amp; Business Ethics
          </PolicyCard>
          <PolicyCard
            buttonDescription={['View Policy Statement', 'View Policy']}
            buttonHref={['#', '#']}
          >
            Anti-Bribery &amp; Corruption
          </PolicyCard>
          <PolicyCard buttonDescription={['View Policy']} buttonHref={['#']}>
            Occupational Health &amp; Safety
          </PolicyCard>
          <PolicyCard buttonDescription={['View Policy']} buttonHref={['#']}>
            Gifts, Donations and Sponsorships Policy
          </PolicyCard>
        </div>
      )}
      {vendors && (
        <div>
          <PolicyCard buttonDescription={['View Policy']} buttonHref={['#']}>
            Vendors policy 1
          </PolicyCard>
          <PolicyCard
            buttonDescription={['View Policy Statement']}
            buttonHref={['#']}
          >
            Vendors policy 2
          </PolicyCard>
          <PolicyCard
            buttonDescription={['View Policy Statement', 'View Policy']}
            buttonHref={['#', '#']}
          >
            Vendors policy 3
          </PolicyCard>
        </div>
      )}
    </div>
  );
};

PolicyCard.propTypes = {
  children: PropTypes.string.isRequired,
  buttonDescription: PropTypes.string.isRequired,
  buttonHref: PropTypes.string.isRequired,
};

export default Policy;
