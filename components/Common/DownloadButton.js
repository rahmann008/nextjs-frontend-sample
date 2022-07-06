import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

const DownloadButton = ({ href, children }) => (
  <Link href={href}>
    <a className="grid mt-6 sm:mt-0 place-items-start whitespace-nowrap">
      <button
        type="button"
        className="flex flex-row p-1 px-3 text-green-600 border-green-600 rounded-lg md:px-5 md:py-2 border-3 font-mulish-bold"
      >
        <div className="relative flex items-center justify-center w-4 h-5 mr-4 xl:h-6 xl:w-6">
          <Image
            src="/img/common/icon/pdf-icon-small.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <span className="flex items-center justify-center h-6 text-xs xl:text-base">
          {children}
        </span>
      </button>
    </a>
  </Link>
);

DownloadButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default DownloadButton;
