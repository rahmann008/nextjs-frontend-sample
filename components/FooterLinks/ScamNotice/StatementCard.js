import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';

const StatementCard = ({ title, date, children }) => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={`${dropdown ? 'shadow-lg' : ''} mb-8`}>
      <div
        className={`flex flex-row justify-between border-2 border-gray-200 ${
          dropdown ? 'rounded-t-lg' : 'rounded-lg'
        } pl-6 pr-2 py-2`}
      >
        <div className="font-mulish-semibold md:text-xl lg:text-2xl items-center flex">
          {title}
        </div>
        <button type="button" onClick={() => handleClick()}>
          {dropdown ? (
            <MinusCircleIcon
              className="w-10 h-10 md:w-12 lg:w-16 md:h-12 lg:h-16 text-primary hover:text-secondary"
              aria-hidden="true"
            />
          ) : (
            <PlusCircleIcon
              className="w-10 h-10 md:w-12 lg:w-16 md:h-12 lg:h-16 text-secondary hover:text-primary"
              aria-hidden="true"
            />
          )}
        </button>
      </div>
      {dropdown && (
        <div className="border-b-2 border-x-2 border-gray-200 rounded-b-lg bg-grey p-6 text-sm md:text-lg lg:text-xl">
          <div className="font-mulish-bold mb-6">{date}</div>
          <div className="font-mulish">{children}</div>
        </div>
      )}
    </div>
  );
};

StatementCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default StatementCard;
