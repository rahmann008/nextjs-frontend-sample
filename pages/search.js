import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Search = ({ mediaReleases }) => {
  const router = useRouter();
  const event = Object.keys(router.query).toString();
  const [latestMediaReleases, setLatestMediaReleases] = useState(false);
  const data = Array.from(latestMediaReleases);

  useEffect(() => {
    console.log(event);
    setLatestMediaReleases(
      mediaReleases.data.filter(mediaRelease =>
        mediaRelease.attributes.title
          .toLowerCase()
          .includes(event.toLowerCase())
      )
    );
  }, [mediaReleases, event]);

  // const renderMediaReleasesPostPreviews = () =>
  //   data
  //     .slice(0, paginationNumber)
  //     .map(mediaRelease => (
  //       <MediaReleasesPostPreview
  //         mediaRelease={mediaRelease}
  //         key={mediaRelease.id}
  //       />
  //     ));
  const MediaReleasesPostPreview = ({ mediaRelease }) => (
    <Link href={`/media/media-releases/${mediaRelease.id}`} passHref>
      <div className="border-y border-y-zinc-200 py-12 cursor-pointer">
        <div className="font-mulish-semibold text-gray-700 mb-2">
          Media - Media Release
        </div>
        <div className="font-mulish-extrabold text-2xl mb-2">
          {mediaRelease.attributes.title}
        </div>
        <div className="font-mulish-bold line-clamp-2">
          {mediaRelease.attributes.content}
        </div>
      </div>
    </Link>
  );

  const renderMediaReleasesPostPreviews = () =>
    data.map(mediaRelease => (
      <MediaReleasesPostPreview
        mediaRelease={mediaRelease}
        key={mediaRelease.id}
      />
    ));

  return (
    <div className="m-24">
      <div className="flex flex-row mb-12">
        <div className="font-mulish text-5xl">Search Results for &nbsp;</div>
        <div className="font-mulish-bold text-5xl text-primary">{`"${event}"`}</div>
      </div>

      {renderMediaReleasesPostPreviews(data)}
    </div>
  );
};

Search.propTypes = {
  mediaReleases: PropTypes.object.isRequired,
};

export default Search;

export async function getStaticProps() {
  const postRes = await axios.get(
    `${process.env.STRAPI_API_URL}/api/media-releases`
  );
  return {
    props: {
      mediaReleases: postRes.data,
    },
    revalidate: 10,
  };
}
