import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ReportsPostPreview = ({ report }) => (
  <Link href="#" passHref>
    <div className="grid w-full py-8 my-5 transition duration-500 ease-in-out border-2 rounded-lg shadow-lg cursor-pointer xl:hover:-translate-y-1 xl:hover:scale-105 sm:flex flex-column md:flex-row sm:p-6 xl:my-6">
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
        <div className="pb-4 text-base leading-relaxed xl:text-lg 2xl:text-3xl font-mulish-bold">
          {report.attributes.title}
        </div>
        <div className="text-xs leading-loose text-justify xl:pb-1 md:text-sm lg:text-base 2xl:text-base line-clamp-4 md:line-clamp-2 font-mulish-semibold">
          {report.attributes.description}
        </div>
      </div>
      <Link href="#">
        <a className="grid mt-6 md:mt-0 place-items-center">
          <button
            type="button"
            className="flex flex-row p-1 px-3 text-green-600 border-green-600 rounded-lg md:mt-10 md:mb-3 md:px-5 md:py-2 border-3 font-mulish-bold"
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
              Download
            </span>
          </button>
        </a>
      </Link>
    </div>
  </Link>
);

ReportsPostPreview.propTypes = {
  report: PropTypes.object.isRequired,
};

export default ReportsPostPreview;
