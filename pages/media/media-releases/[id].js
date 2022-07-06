import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'next-share';
import PropTypes from 'prop-types';
import MediaReleasesPostPreview from '../../../components/Media/MediaReleases/MediaReleasesPostPreview';
import RelatedMedia from '../../../components/Media/RelatedMedia';
import Feedback from '../../../components/Common/Feedback';
import Banner from '../../../components/Common/Banner';
import { md } from '../../../utils/markdown';

const MediaReleasePage = ({ mediaRelease, mediaReleases }) => {
  const htmlContent = md.render(mediaRelease.data.attributes.content);
  const modifiedHtmlContent = htmlContent.replace(/(?:\r\n|\r|\n)/g, '<br />');
  const coverImage = `${process.env.STRAPI_API_URL}${mediaRelease.data.attributes.cover_image.data.attributes.url}`;
  const d = new Date(mediaRelease.data.attributes.publishedAt);
  const date = d.toDateString().slice(4);
  const [latestMediaReleases, setLatestMediaReleases] = useState(false);
  const data = Array.from(latestMediaReleases);

  useEffect(() => {
    setLatestMediaReleases(mediaReleases.data.slice(0, 2));
  }, [mediaReleases]);

  const renderMediaReleasesPostPreviews = () =>
    data.map(mediaRelease => (
      <MediaReleasesPostPreview
        mediaRelease={mediaRelease}
        key={mediaRelease.id}
      />
    ));

  return (
    <>
      <Banner
        subpage={['Media', 'In The News', mediaRelease.data.attributes.title]}
        href={['/media', '/media/media-releases', '#']}
      />
      <div className="absolute flex items-center w-full h-96">
        <Image
          src="/img/media/bg/article-details-bg.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="px-8 py-8 bg-grey md:py-16 lg:py-24 sm:px-10 md:px-20 lg:px-32 xl:px-52 ">
        <div className="relative mt-3 text-gray-200 duration-500 lg:hover:-translate-x-6 font-mulish md:font-mulish-semibold">
          <Link href="/media/media-releases">
            <a className="flex flex-row items-center mb-2">
              <ArrowNarrowLeftIcon className="w-12 h-12 pr-2" />
              Back to In The News
            </a>
          </Link>
        </div>
        <div className="relative bg-white shadow-md rounded-xl">
          <div className="mb-6 overflow-hidden text-center sm:mb-20 rounded-xl">
            <Image
              src={coverImage}
              alt="Cover image of media release"
              objectFit="cover"
              width={1750}
              height={1000}
              unoptimized
            />
          </div>
          <div className="mx-6 mb-10 text-xl text-center sm:text-4xl md:text-5xl xl:text-6xl font-mulish-bold">
            {mediaRelease.data.attributes.title}
          </div>
          <div className="mx-2 mb-12 text-xs text-center sm:text-base sm:mx-12 md:mx-20 md:text-lg lg:mb-20 lg:text-xl xl:text-2xl font-mulish-semibold">
            <span className="mx-2 sm:mx-4 lg:mx-6">
              {mediaRelease.data.attributes.country}
            </span>
            &bull;
            <span className="mx-2 sm:mx-4 lg:mx-6">{date}</span>
            &bull;
            <span className="mx-2 sm:mx-4 lg:mx-6">
              {mediaRelease.data.attributes.duration} mins read
            </span>
          </div>
          <div className="absolute flex flex-col items-center justify-center ml-12 font-mulish-semibold">
            <div className="mb-4">Share on</div>
            <div className="mb-2">
              <FacebookShareButton
                url={`${process.env.NEXT_API_URL}/media/media-releases/${mediaRelease.data.id}`}
                quote={mediaRelease.data.attributes.title}
              >
                <div className="relative w-4 h-5 xl:h-8 xl:w-8">
                  <Image
                    src="/img/media/icon/facebook-passive.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </FacebookShareButton>
            </div>
            <div className="mb-2">
              <TwitterShareButton
                url={`${process.env.NEXT_API_URL}/media/media-releases/${mediaRelease.data.id}`}
                title={mediaRelease.data.attributes.title}
              >
                <div className="relative w-4 h-5 xl:h-8 xl:w-8">
                  <Image
                    src="/img/common/icon/twitter-passive.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </TwitterShareButton>
            </div>
            <div className="mb-2">
              <LinkedinShareButton
                url={`${process.env.NEXT_API_URL}/media/media-releases/${mediaRelease.data.id}`}
              >
                <div className="relative w-4 h-5 xl:h-8 xl:w-8">
                  <Image
                    src="/img/media/icon/linkedin-passive.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </LinkedinShareButton>
            </div>
          </div>
          <div className="px-6 pb-12 text-sm leading-relaxed text-justify md:text-lg sm:px-20 md:px-20 lg:px-32 xl:px-40 xl:text-xl font-mulish">
            <section
              dangerouslySetInnerHTML={{ __html: modifiedHtmlContent }}
            />
          </div>
        </div>
        <div className="relative mt-3 text-black duration-500 md:font-mulish-semibold lg:hover:-translate-x-6 font-mulish ">
          <Link href="/media/media-releases">
            <a className="flex flex-row items-center">
              <ArrowNarrowLeftIcon className="w-12 h-12 pr-2" />
              Back to In The News
            </a>
          </Link>
        </div>
        <div>
          <div className="mt-16 mb-12 text-4xl lg:text-5xl xl:text-6xl font-mulish-bold">
            Related Articles
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-x-10 xl:gap-x-20">
            {renderMediaReleasesPostPreviews()}
          </div>
        </div>
      </div>
      <RelatedMedia
        tileHeader={['Content Hub', 'Success Stories', 'Reports']}
        tileDescription={[
          'Browse through our articles and podcast lorempisum nec viverraeleifend lacus, vitae sit amet blandit dolor',
          'Browse through our reports loremipsum nec viverra eleifend lacusvitae sit amet blandit dolor',
        ]}
        tileHref={['/media/content-hubs', '/media/reports']}
        tileImage={[
          '/img/media/content-hubs/content-hub.png',
          '/img/media/reports/reports-img.png',
        ]}
      />
      <Feedback />
    </>
  );
};

MediaReleasePage.propTypes = {
  mediaRelease: PropTypes.object.isRequired,
  mediaReleases: PropTypes.object.isRequired,
};

export default MediaReleasePage;

export async function getStaticProps({ params }) {
  const allPromises = [];
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/media-releases/${params.id}?populate=cover_image`
    )
  );
  allPromises.push(
    axios.get(`${process.env.STRAPI_API_URL}/api/media-releases`)
  );
  const [postRes, postResAll] = await Promise.all(allPromises);

  return {
    props: {
      mediaRelease: postRes.data,
      mediaReleases: postResAll.data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const postRes = await axios.get(
    `${process.env.STRAPI_API_URL}/api/media-releases?populate=cover_image`
  );
  const paths = postRes.data.data.map(mediaRelease => ({
    params: { id: mediaRelease.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
