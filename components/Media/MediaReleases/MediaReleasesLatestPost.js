import React, { useState, useEffect } from 'react';
import { ArrowCircleDownIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import MediaReleasesPostPreview from './MediaReleasesPostPreview';
import { PAGINATION_INCREMENT } from '../../../utils/pagination';

const MediaReleasesLatestPost = ({ mediaReleases, country, year }) => {
  const [latestMediaReleases, setLatestMediaReleases] = useState(false);
  const [paginationNumber, setPaginationNumber] = useState(6);
  const [loadMoreItems, setLoadMoreItems] = useState(false); // default is initialState
  const data = Array.from(latestMediaReleases);

  const loadMore = () => {
    setPaginationNumber(paginationNumber + PAGINATION_INCREMENT);
    if (paginationNumber + PAGINATION_INCREMENT >= latestMediaReleases.length) {
      setLoadMoreItems(false);
    }
  };

  useEffect(() => {
    setLatestMediaReleases(
      mediaReleases.data.filter(
        mediaRelease =>
          (mediaRelease.attributes.country === country || country === 'All') &&
          mediaRelease.attributes.published_date.slice(0, 4).toString() === year
      )
    );
    setLoadMoreItems(
      data.length > 6 && paginationNumber <= data.length ? data.length : false
    );
  }, [mediaReleases, data.length, paginationNumber, country, year]);

  const renderMediaReleasesPostPreviews = () =>
    data
      .slice(0, paginationNumber)
      .map(mediaRelease => (
        <MediaReleasesPostPreview
          mediaRelease={mediaRelease}
          key={mediaRelease.id}
        />
      ));

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 px-8 sm:px-10 xl:px-12 sm:grid-cols-2 md:gap-x-10 xl:gap-x-20">
          {renderMediaReleasesPostPreviews()}
        </div>
        {loadMoreItems && (
          <button type="button" onClick={loadMore}>
            <div className="flex flex-col items-center justify-center mt-12 text-sm animate-bounce md:text-base xl:text-xl font-mulish-semibold text-emerald-600">
              <div className="mb-2">Load More</div>
              <div>
                <ArrowCircleDownIcon className="w-6 h-6 sm:h-8 sm:w-8 xl:h-10 xl:w-10 " />
              </div>
            </div>
          </button>
        )}
      </div>
    </>
  );
};

MediaReleasesLatestPost.propTypes = {
  mediaReleases: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MediaReleasesLatestPost;
