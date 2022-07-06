import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { removeMd } from '../../../utils/markdown';
import RightArrow from '../../Common/RightArrow';

const MediaReleasesPostPreview = ({ mediaRelease }) => {
  const d = new Date(mediaRelease.attributes.publishedAt);
  const date = d.toDateString().slice(4);
  const plainText = removeMd(mediaRelease.attributes.content);
  return (
    <Link href={`/media/media-releases/${mediaRelease.id}`} passHref>
      <div className="my-4 transition duration-700 ease-in-out cursor-pointer lg:hover:-translate-y-1 lg:hover:scale-105 sm:my-0 sm:p-6 xl:my-6">
        <div className="pb-2 text-sm text-gray-500 uppercase sm:pb-4 md:text-base font-mulish-bold">
          {date}
        </div>
        <div className="pb-2 text-base sm:pb-4 sm:text-2xl lg:text-3xl xl:text-4xl font-mulish-bold">
          {mediaRelease.attributes.title}
        </div>
        <div className="mb-2 text-justify text-xssm:mb-4 xl:pb-1 md:text-sm xl:text-base line-clamp-2 font-mulish">
          {plainText}
        </div>
        <RightArrow>Read full article</RightArrow>
      </div>
    </Link>
  );
};

MediaReleasesPostPreview.propTypes = {
  mediaRelease: PropTypes.object.isRequired,
};

export default MediaReleasesPostPreview;
