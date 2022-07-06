import React, { useState } from 'react';
import Image from 'next/image';
import LandownerForm from './LandownerForm';
import PublicForm from './PublicForm';
import SubContent from '../Common/SubContent';

const Informations = () => {
  const [contact, setContact] = useState(true);
  const [vendor, setVendor] = useState(false);
  const [landowner, setLandowner] = useState(false);

  const handleClick = type => {
    switch (type) {
      case 'Public':
        setContact(true);
        setVendor(false);
        setLandowner(false);
        break;
      case 'Vendor':
        setContact(false);
        setVendor(true);
        setLandowner(false);
        break;
      case 'Landowner':
        setContact(false);
        setVendor(false);
        setLandowner(true);
        break;
      default:
        setContact(true);
        setVendor(false);
        setLandowner(false);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center place-content-between">
        <button
          type="button"
          onClick={() => handleClick('Public')}
          className={`sm:text-xl font-mulish-bold border rounded-xl w-24 h-24 sm:w-32 md:w-56 md:h-36 xl:w-80 xl:h-44 mt-12 mr-2 md:mr-6 lg:mr-12 ${
            contact ? `bg-secondary text-white` : ''
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="relative left-0 items-center justify-center w-6 h-6 my-2 lg:w-12 lg:h-12 md:my-4">
              <Image
                src={`/img/contact-us/${
                  contact ? 'public-active.png' : 'public-passive.png'
                }`}
                alt=""
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            Public
          </div>
        </button>
        <button
          type="button"
          onClick={() => handleClick('Vendor')}
          className={`sm:text-xl font-mulish-bold border rounded-xl w-24 h-24 sm:w-32 md:w-56 md:h-36 xl:w-80 xl:h-44 mt-12 mr-2 md:mr-6 lg:mr-12 ${
            vendor ? `bg-secondary text-white` : ''
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="relative left-0 items-center justify-center w-6 h-6 my-2 lg:w-12 lg:h-12 md:my-4">
              <Image
                src={`/img/contact-us/${
                  vendor ? 'vendor-active.png' : 'vendor-passive.png'
                }`}
                alt=""
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            Vendor
          </div>
        </button>
        <button
          type="button"
          onClick={() => handleClick('Landowner')}
          className={`sm:text-xl font-mulish-bold border rounded-xl w-24 h-24 sm:w-32 md:w-56 md:h-36 xl:w-80 xl:h-44 mt-12 ${
            landowner ? `bg-secondary text-white` : ''
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="relative left-0 items-center justify-center w-6 h-6 my-2 lg:w-12 lg:h-12 md:my-4">
              <Image
                src={`/img/contact-us/${
                  landowner ? 'landowners-active.png' : 'landowners-passive.png'
                }`}
                alt=""
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            Landowner
          </div>
        </button>
      </div>
      {contact && (
        <div className="px-8 md:py-20 md:px-20 lg:py-24 lg:px-40">
          <div className="lg:w-7/12">
            <div className="my-12 text-3xl sm:text-5xl font-mulish-bold sm:mb-12">
              Reach out to us!
            </div>
            <div className="mb-6 sm:text-2xl font-mulish sm:mb-16">
              Have any questions? Or looking for more information about our
              services? Fill up this form so our team can reach out to you.
            </div>
          </div>
          <PublicForm />
        </div>
      )}
      {vendor && (
        <SubContent
          img="/img/contact-us/procurement-img.png"
          title="Procurement"
        >
          <div className="mb-8 text-sm text-justify lg:text-lg 2xl:text-xl font-mulish">
            edotco Group&amp;s Supply Chain Management (SCM) mission is to
            source for the right quality of products and services at the most
            optimum total cost of ownership for the group. We strive towards
            sourcing for products that meet our business needs which are
            environmentally sustainable. At edotco, we believe that our partners
            share the same passion in our journey of mutual success and growth
            towards enabling connectivity for the future. We cherish our
            relationship with vendors whose capabilities complement our own to
            achieve greater efficiencies towards innovation across the region.
          </div>
        </SubContent>
      )}
      {landowner && (
        <>
          <SubContent
            img="/img/contact-us/landowners-img.png"
            title="Landowners"
            RTL
          >
            <div className="mb-6 text-justify sm:text-2xl font-mulish sm:mb-16">
              At edotco, we build tower sites based on customer&apos;s
              requirements and needs, and we also work with commercial property
              owners to manage co-locations at the properties we manage.
            </div>
            <div className="mb-6 text-justify sm:text-2xl font-mulish sm:mb-16">
              We invite property owners to be part of edotco extended family in
              our journey towards better connectivity for the nations. If you
              are keen to explore opportunities with us, select your Country
              below and submit your application to us.
            </div>
          </SubContent>
          <div className="px-8 pb-16 md:px-20 xl:pt-20 xl:px-40">
            <div className="lg:w-7/12">
              <div className="mb-6 text-3xl sm:text-5xl font-mulish-bold sm:mb-12">
                Hi Landowners
              </div>
              <div className="mb-6 sm:text-2xl font-mulish sm:mb-16">
                If you own a property and would like to lease or sell it to
                edotco, please fill up the form below:
              </div>
            </div>
            <LandownerForm />
          </div>
        </>
      )}
    </>
  );
};

export default Informations;
