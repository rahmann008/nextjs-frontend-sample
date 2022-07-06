import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const YearButton = ({ year, clickedYear, onClick, awards }) => (
  <button
    type="button"
    onClick={onClick}
    className="md:mx-6 lg:mx-10 xl:mx-12 2xl:mx-20"
  >
    <div
      className={`flex ${
        awards ? 'flex-row mb-12 lg:mb-16 xl:mb-20 2xl:mb-24' : 'flex-col'
      } items-center justify-center`}
    >
      <div className="relative w-6 h-6">
        <Image
          src={`/img/media/icon/${
            year === clickedYear ? `year-selected.png` : `year-unselected.png`
          }`}
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div
        className={`${awards ? 'ml-6' : 'mt-6'} text-xl font-mulish-bold ${
          year === clickedYear ? 'text-primary' : 'text-black'
        }`}
      >
        {clickedYear}
      </div>
    </div>
  </button>
);

YearButton.propTypes = {
  year: PropTypes.string.isRequired,
  clickedYear: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  awards: PropTypes.bool.isRequired,
};

export default YearButton;
