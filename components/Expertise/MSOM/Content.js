import React from 'react';
import DownloadButton from '../../Common/DownloadButton';
import SubContent from '../../Common/SubContent';

const Content = () => (
  <>
    <div className="px-10 pt-16 pb-8 xl:p-20">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="sm:w-3/4">
          <div className="mb-6 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-mulish-bold lg:mb-12">
            Managed Services and Operations &amp; Maintenance
          </div>
          <div className="mb-8 text-sm text-justify lg:text-lg 2xl:text-xl font-mulish">
            Leveraging on our regional expertise and best practices from across
            our footprint, we provide end to end management of active and
            passive managed services to ensure high quality network and reliable
            network uptime allowing our customers to focus on their core
            business.
          </div>
        </div>
        <DownloadButton href="#">Download Leaflet</DownloadButton>
      </div>
    </div>
    <SubContent
      img="/img/expertise/solutions/solutions-ibs.png"
      title="In-Building Solutions (IBS)"
      RTL
      expertise
    >
      <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify mb-8">
        Through the use of next generation technology like drones and tapping
        into modern automation tools we have been able to achieve more proactive
        tower maintenance. By using predictive analytics, we can serve our
        customers more effectively by identifying and rectifying potential
        malfunctions before they occur, ensuring compliance in design, reducing
        manual errors and improving field staff efficiency.
      </div>
      <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify mb-8">
        As an independent infrastructure company, we also are also able to
        ensure the best deals for our customers through neutral engagement with
        property managers, logistics management, local authorities and various
        other stakeholders. Our Next Generation Operating Model will provide
        real time and efficient managed services, deliver insights with the use
        of advance data analytics as well as drive innovation to meet customer
        needs.
      </div>
      <div className="text-sm lg:text-lg 2xl:text-xl font-mulish text-justify mb-8">
        Our Next Generation Operating Model will provide real time and efficient
        managed services, deliver insights with the use of advance data
        analytics as well as drive innovation to meet customer needs.
      </div>
    </SubContent>
  </>
);

export default Content;
