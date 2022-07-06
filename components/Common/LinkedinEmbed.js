import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';

const LinkedinEmbed = ({ linkedins, postId }) => {
  const coverImage = `${process.env.STRAPI_API_URL}${
    linkedins.data[postId - 1].attributes.cover_image.data.attributes.url
  }`;
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="z-10 mt-12 mb-6 bg-grey w-72 sm:w-128 md:w-164 xl:w-96 xl:mt-0 xl:mb-0 xl:mx-4 2xl:mx-8 rounded-xl">
        <div className="px-6 pt-6 xl:px-12 xl:pt-8">
          <div className="flex flex-row justify-between">
            <div className="mb-4 text-xs text-gray-500 capitalize font-mulish-extrabold">
              {moment(
                linkedins.data[postId - 1].attributes.publishedAt
              ).fromNow()}
            </div>
            <a
              href="https://www.linkedin.com/company/e-co-group-sdn-bhd/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="relative w-6 h-6">
                <Image
                  src="/img/homepage/linkedin-icon-blue.png"
                  alt=""
                  layout="fill"
                  priority
                />
              </div>
            </a>
          </div>
          <div className="leading-loose">
            <div className="text-xs text-justify font-mulish-bold sm:text-base line-clamp-3 sm:text-left xl:text-justify ">
              {linkedins.data[postId - 1].attributes.caption}
            </div>
          </div>
          <a
            href={linkedins.data[postId - 1].attributes.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <div className="flex flex-row items-center justify-start text-xs duration-500 lg:hover:translate-x-6 md:text-sm xl:text-base font-mulish-semibold text-emerald-600">
              View Full Post
              <ArrowCircleRightIcon className="w-4 h-4 ml-1  sm:ml-2 sm:h-5 sm:w-5" />
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center p-0 m-0">
          <div className="relative w-full h-72 sm:h-80 md:h-96">
            <Image
              src={coverImage}
              alt=""
              layout="fill"
              objectFit="cover"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

LinkedinEmbed.propTypes = {
  linkedins: PropTypes.object.isRequired,
  postId: PropTypes.number.isRequired,
};

export default LinkedinEmbed;
