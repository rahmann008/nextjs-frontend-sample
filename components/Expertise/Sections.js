import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Button from '../Common/Button';

const Sections = ({ icon, title, children, href, expertise }) => (
  <div className="flex flex-col mx-2 mb-12 sm:mx-4 lg:mx-12 2xl:mx-24">
    <div className="md:h-60">
      <div className="relative left-0 items-center justify-center w-6 h-6 my-2 md:w-8 md:h-8 lg:w-12 lg:h-12 md:my-4">
        <Image
          src={`/img/expertise/main/${icon}`}
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div
        className={`text-xl md:h-16 lg:h-14 2xl:text-2xl font-mulish-bold ${
          expertise ? 'mb-6 md:mb-0' : 'mb-6'
        }`}
      >
        {title}
      </div>
      <div
        className={`${
          expertise ? 'line-clamp-3' : 'line-clamp-2'
        } mb-4 font-mulish-semibold`}
      >
        {children}
      </div>
    </div>
    <div>
      <Button href={href}>Find Out More</Button>
    </div>
  </div>
);

Sections.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  expertise: PropTypes.bool,
};

Sections.defaultProps = {
  expertise: false,
};

export default Sections;
