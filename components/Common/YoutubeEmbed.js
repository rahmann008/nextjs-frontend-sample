import React from 'react';
import moment from 'moment';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({ youtubeMetadata, embedId }) => {
  console.log(youtubeMetadata);
  return (
    <div className="mb-24">
      <div className="p-10 relative lg:absolute right-0 z-10 w-full lg:w-1/2 bg-grey drop-shadow-2xl">
        <div className="flex flex-row">
          <div className="mb-4 lg:mb-10 font-mulish-bold text-xl sm:text-2xl lg:text-5xl">
            {youtubeMetadata.items[0].snippet.title}
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${youtubeMetadata.items[0].id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <div className="relative w-16 h-16">
              <Image
                src="/img/common/icon/youtube-icon.png"
                alt="Youtube Icon"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </a>
        </div>
        <div className="mb-4 lg:mb-10 font-mulish-semibold text-sm lg:text-xl">
          <span className="mr-2 sm:mr-3 lg:mr-4">
            {youtubeMetadata.items[0].statistics.viewCount} views
          </span>
          &bull;
          <span className="mx-2 sm:mx-3 lg:mx-4 ">
            {moment(youtubeMetadata.items[0].snippet.publishedAt).format(
              'MMM Do YYYY'
            )}
          </span>
        </div>
        <div className="font-mulish-semibold  text-sm lg:text-2xl text-justify line-clamp-2">
          {youtubeMetadata.items[0].snippet.description}
        </div>
        <a
          href={`https://www.youtube.com/watch?v=${youtubeMetadata.items[0].id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <div className="flex flex-row items-center justify-start text-sm duration-500 lg:hover:translate-x-6 md:text-base xl:text-xl font-mulish-semibold text-emerald-600">
            Watch more on Youtube
            <ArrowCircleRightIcon className=" w-4 h-4 ml-1 sm:ml-2 sm:h-5 sm:w-5" />
          </div>
        </a>
      </div>
      <div className="lg:pt-32 relative flex flex-row justify-start h-96 sm:h-128 md:h-160 lg:h-256">
        <iframe
          width="1500"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

YoutubeEmbed.propTypes = {
  youtubeMetadata: PropTypes.object.isRequired,
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
