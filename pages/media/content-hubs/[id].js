import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import ReactAudioPlayer from 'react-audio-player';
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'next-share';
import PropTypes from 'prop-types';
import RelatedMedia from '../../../components/Media/RelatedMedia';
import Feedback from '../../../components/Common/Feedback';
import Banner from '../../../components/Common/Banner';
import ContentHubsPostPreview from '../../../components/Media/ContentHubs/ContentHubsPostPreview';
import { md } from '../../../utils/markdown';

const ContentHubPage = ({ contentHub, contentHubs }) => {
  const htmlContent = md.render(contentHub.data.attributes.content);
  const modifiedHtmlContent = htmlContent.replace(/(?:\r\n|\r|\n)/g, '<br />');
  const coverImage = `${process.env.STRAPI_API_URL}${contentHub.data.attributes.cover_image.data.attributes.url}`;
  const audio =
    `${process.env.STRAPI_API_URL}${contentHub.data.attributes.audio.data?.attributes.url}` ===
    undefined
      ? `${process.env.STRAPI_API_URL}${contentHub.data.attributes.audio.data?.attributes.url}`
      : '';
  const [latestBlogPosts, setLatestBlogPosts] = useState(false);
  const data = Array.from(latestBlogPosts);

  useEffect(() => {
    setLatestBlogPosts(contentHubs.data.slice(0, 3));
  }, [contentHubs]);

  const renderContentHubsPostPreview = () =>
    data.map(contentHub => (
      <ContentHubsPostPreview contentHub={contentHub} key={contentHub.id} />
    ));

  return (
    <>
      <Banner
        subpage={['Media', 'Content Hub', contentHub.data.attributes.title]}
        href={['/media', '/media/content-hubs', '#']}
      />
      <div className="absolute flex items-center w-full h-128">
        <Image
          src="/img/media/bg/article-details-bg.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="px-8 py-8 bg-grey md:py-16 lg:py-24 sm:px-10 md:px-20 lg:px-40 xl:px-60 ">
        <div className="relative mt-3 text-gray-200 duration-500 lg:hover:-translate-x-6 font-mulish md:font-mulish-semibold">
          <Link href="/media/content-hubs">
            <a className="flex flex-row items-center mb-2">
              <ArrowNarrowLeftIcon className="w-12 h-12 pr-2" />
              Back to Content Hub
            </a>
          </Link>
        </div>
        <div className="relative bg-white shadow-md rounded-xl">
          <div className="mb-6 overflow-hidden text-center sm:mb-20 rounded-xl">
            <Image
              src={coverImage}
              alt="Cover image of article"
              objectFit="cover"
              width={1500}
              height={1000}
              unoptimized
            />
          </div>
          <div className="absolute font-mulish-semibold ml-12 mt-24 flex flex-col justify-center items-center">
            <div className="mb-4">Share on</div>
            <div className="mb-2">
              <FacebookShareButton
                // url={`${process.env.NEXT_API_URL}/media/contentHubs/${contentHub.data.id}`}
                url="https://edotcogroup.com/media/towerxchanges-top-20-tower-industry-executives-of-2020/"
                quote={contentHub.data.attributes.title}
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
                url={`${process.env.NEXT_API_URL}/media/content-hubs/${contentHub.data.id}`}
                title={contentHub.data.attributes.title}
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
                // url={`${process.env.NEXT_API_URL}/media/contentHubs/${contentHub.data.id}`}
                url="https://edotcogroup.com/media/towerxchanges-top-20-tower-industry-executives-of-2020/"
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
          <div className="mx-16 mb-10 text-xl text-center sm:text-4xl md:text-5xl xl:text-6xl font-mulish-bold">
            {contentHub.data.attributes.title}
          </div>
          <div className="mx-2 mb-12 text-xs text-center sm:text-base sm:mx-12 md:mx-20 md:text-lg lg:mb-20 lg:text-xl xl:text-2xl font-mulish-semibold">
            <span className="mx-2 sm:mx-4 lg:mx-6">
              {contentHub.data.attributes.country}
            </span>
            &bull;
            <span className="mx-2 sm:mx-4 lg:mx-6">
              {contentHub.data.attributes.type}
            </span>
            &bull;
            <span className="mx-2 sm:mx-4 lg:mx-6">
              {contentHub.data.attributes.topic}
            </span>
          </div>
          {audio && (
            <div className="grid pb-12 place-items-center">
              <ReactAudioPlayer src={audio} controls />
            </div>
          )}
          <div className="px-6 pb-12 text-sm leading-relaxed text-justify md:text-lg sm:px-20 md:px-20 lg:px-32 xl:px-40 xl:text-xl font-mulish">
            <section
              dangerouslySetInnerHTML={{ __html: modifiedHtmlContent }}
            />
          </div>
        </div>
        <div className="relative mt-3 text-black duration-500 lg:hover:-translate-x-6 font-mulish md:font-mulish-semibold">
          <Link href="/media/content-hubs">
            <a className="flex flex-row items-center mb-2">
              <ArrowNarrowLeftIcon className="w-12 h-12 pr-2" />
              Back to Content Hub
            </a>
          </Link>
        </div>
        <div>
          <div className="mt-16 mb-12 text-4xl lg:text-5xl xl:text-6xl font-mulish-bold">
            Related Products
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-16 md:gap-x-10 xl:gap-x-20">
            {renderContentHubsPostPreview()}
          </div>
        </div>
      </div>
      <RelatedMedia
        tileHeader={['In The News', 'Reports']}
        tileDescription={[
          "Browse through what's been happening throughout the years",
          'Browse through our reports loremipsum nec viverra eleifend lacusvitae sit amet blandit dolor',
        ]}
        tileHref={['/media/content-hubs', '/media/reports']}
        tileImage={[
          '/img/media/media-releases/in-the-news-img.png',
          '/img/media/reports/reports-img.png',
        ]}
      />
      <Feedback />
    </>
  );
};

ContentHubPage.propTypes = {
  contentHub: PropTypes.object.isRequired,
  contentHubs: PropTypes.object.isRequired,
};

export default ContentHubPage;

export async function getStaticProps({ params }) {
  const allPromises = [];
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/content-hubs/${params.id}?populate=audio&populate=cover_image`
    )
  );
  allPromises.push(
    axios.get(
      `${process.env.STRAPI_API_URL}/api/content-hubs?populate=audio&populate=cover_image`
    )
  );
  const [postRes, postResAll] = await Promise.all(allPromises);

  return {
    props: {
      contentHub: postRes.data,
      contentHubs: postResAll.data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const postRes = await axios.get(
    `${process.env.STRAPI_API_URL}/api/content-hubs?populate=audio&populate=cover_image`
  );
  const paths = postRes.data.data.map(contentHub => ({
    params: { id: contentHub.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
