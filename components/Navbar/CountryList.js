import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

const CountryList = ({ country, flag }) => (
  <li>
    <Link
      href={{
        pathname: `/microsite/${flag.split('-')[0]}`,
        query: {
          country,
          flag,
        },
      }}
      passHref
    >
      <a target="_blank" rel="noopener noreferrer">
        <button type="button" className="flex flex-row mt-7 p-1">
          <div className="relative left-0 w-6 h-4 mt-1">
            <Image
              src={`/img/microsite/icon/${flag}.png`}
              alt=""
              layout="fill"
              priority
            />
          </div>
          <div className="block w-max font-mulish-semibold px-5">
            edotco
            <span className="font-mulish-bold"> {country}</span>
          </div>
        </button>
      </a>
    </Link>
  </li>
);

CountryList.propTypes = {
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default CountryList;
