import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import ContentCard from '../ContentCard';

const ButtonLink = ({ handleClick, state, title, imgActive, imgPassive }) => (
  <button
    type="button"
    onClick={handleClick}
    className={`${
      state ? 'bg-secondary' : ''
    } w-32 h-28 mx-1 sm:mx-3 text-xs border md:text-base lg:text-xl font-mulish-bold rounded-xl sm:w-36 sm:h-32 md:w-52 md:h-36 lg:w-60 lg:h-40 xl:w-72 xl:h-44 lg:mx-6`}
  >
    <div
      className={`${
        state ? 'text-white' : 'text-black'
      } flex flex-col justify-center items-center`}
    >
      <div className="relative left-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 justify-center items-center my-2 md:my-4">
        <Image
          src={`${state ? imgActive : imgPassive}`}
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      {title}
    </div>
  </button>
);

const Contents = () => {
  const [global, setGlobal] = useState(true);
  const [malaysia, setMalaysia] = useState(false);
  const [vendorsGlobal, setVendorsGlobal] = useState(false);
  const [landlords, setLandlords] = useState(false);
  const [privacy, setPrivacy] = useState(true);
  const [visitors, setVisitors] = useState(false);
  const [vendorsMalaysia, setVendorsMalaysa] = useState(true);
  const [cookies, setCookies] = useState(false);

  const handleClick = type => {
    switch (type) {
      case 'global':
        setGlobal(true);
        setMalaysia(false);
        setPrivacy(true);
        setVisitors(false);
        setVendorsGlobal(false);
        setCookies(false);
        break;
      case 'malaysia':
        setGlobal(false);
        setMalaysia(true);
        setVendorsMalaysa(true);
        setLandlords(false);
        break;
      case 'privacy':
        setPrivacy(true);
        setVisitors(false);
        setVendorsGlobal(false);
        setCookies(false);
        break;
      case 'visitors':
        setPrivacy(false);
        setVisitors(true);
        setVendorsGlobal(false);
        setCookies(false);
        break;
      case 'vendorsGlobal':
        setPrivacy(false);
        setVisitors(false);
        setVendorsGlobal(true);
        setCookies(false);
        break;
      case 'cookies':
        setPrivacy(false);
        setVisitors(false);
        setVendorsGlobal(false);
        setCookies(true);
        break;
      case 'vendorsMalaysia':
        setVendorsMalaysa(true);
        setLandlords(false);
        break;
      case 'landlords':
        setVendorsMalaysa(false);
        setLandlords(true);
        break;
      default:
        setGlobal(true);
        setMalaysia(false);
        setPrivacy(true);
        setVisitors(false);
        setVendorsGlobal(false);
        setCookies(false);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center place-content-between mb-12">
        <ButtonLink
          handleClick={() => handleClick('global')}
          state={global}
          title="edotco Global"
          imgActive="/img/microsite/icon/global-white.png"
          imgPassive="/img/microsite/icon/global-black.png"
        />
        <ButtonLink
          handleClick={() => handleClick('malaysia')}
          state={malaysia}
          title="edotco Malaysia"
          imgActive="/img/microsite/icon/malaysia-flag.png"
          imgPassive="/img/microsite/icon/malaysia-flag.png"
        />
      </div>
      {global && (
        <div className="flex flex-row items-center justify-center place-content-between mb-12">
          <button
            type="button"
            onClick={() => handleClick('privacy')}
            className={`text-xs lg:text-sm xl:text-base relative font-mulish-semibold mx-2 md:mx-8 ${
              privacy
                ? 'rounded border-b-4 border-primary'
                : 'border-b-4 border-transparent'
            }`}
          >
            Privacy Notices
          </button>
          <button
            type="button"
            onClick={() => handleClick('visitors')}
            className={`text-xs lg:text-sm xl:text-base relative font-mulish-semibold mx-2 md:mx-8 ${
              visitors
                ? 'rounded border-b-4 border-primary'
                : 'border-b-4 border-transparent'
            }`}
          >
            For Visitors
          </button>
          <button
            type="button"
            onClick={() => handleClick('vendorsGlobal')}
            className={`text-xs lg:text-sm xl:text-base relative font-mulish-semibold mx-2 md:mx-8 ${
              vendorsGlobal
                ? 'rounded border-b-4 border-primary'
                : 'border-b-4 border-transparent'
            }`}
          >
            For Vendors
          </button>
          <button
            type="button"
            onClick={() => handleClick('cookies')}
            className={`text-xs lg:text-sm xl:text-base relative font-mulish-semibold mx-2 md:mx-8 ${
              cookies
                ? 'rounded border-b-4 border-primary'
                : 'border-b-4 border-transparent'
            }`}
          >
            Cookies Notice
          </button>
        </div>
      )}
      {malaysia && (
        <div className="flex flex-row items-center justify-center place-content-between mb-12">
          <button
            type="button"
            onClick={() => handleClick('vendorsMalaysia')}
            className={`text-xs lg:text-sm xl:text-base relative font-mulish-semibold mx-4 md:mx-8 ${
              vendorsMalaysia
                ? 'rounded border-b-4 border-primary'
                : 'border-b-4 border-transparent'
            }`}
          >
            For Vendors
          </button>
          <button
            type="button"
            onClick={() => handleClick('landlords')}
            className={`text-xs lg:text-sm xl:text-base relative font-mulish-semibold mx-4 md:mx-8 ${
              landlords
                ? 'rounded border-b-4 border-primary'
                : 'border-b-4 border-transparent'
            }`}
          >
            For Landlords
          </button>
        </div>
      )}
      {global && privacy && (
        <div className="mt-24 px-10 pb-8 sm:pb-12 sm:px-20 lg:pb-24 lg:px-44">
          <ContentCard title="Privacy Notice for Employees" privacy>
            <p>
              edotco Group Sdn Bhd, together with its subsidiaries (collectively
              referred to as “edotco”, “us” or “we” or “our”) are committed to
              protecting its employees&apos; personal data. In edotco, we take
              Privacy seriously and all our activities are underpinned by our
              T.R.U.S.T principles of being Transparent, respecting your Rights,
              in our Use of your personal data, through robust cyber Security
              practices and we take due care when Transfer of data is required.
              This Employee Privacy Notice (“Privacy Notice”) is aimed to
              explain how we handle and protect our employees&apos; personal
              data and what are our data protection obligations along with your
              rights are. “Employee” for the purpose of this Privacy Notice
              shall include both permanent and contractual employees and
              Personal data (hereinafter referred to as &lsquo;data&rsquo;)
              refers to any information about an identifiable individual.
            </p>
            <br />
            <p className="font-mulish-bold">1. What data do we collect?</p>
            <br />
            <p>
              edotco may collect your data and in certain scenarios, data of
              your family members in electronic and/or physical form, depending
              upon the requirement. Such data may be stored at edotco and
              third-party premises within IT Systems (HR Management system,
              e-mail, database, hard drives), document warehouses etc. Your data
              that we collect includes, but is not limited to:
            </p>
            <br />
            <p>
              • Identification data – such as your name, gender, photograph,
              date of birth, Employee identification number and biometric data.
              <br />• Contact details – such as your home address, telephone
              number, email addresses, beneficiaries and emergency contact
              details. <br />• Employment details – such as your job title,
              office location, hire date, employment contracts, performance and
              disciplinary records, grievance procedures, and sickness and
              holiday records. <br />• Educational and professional background –
              such as your academic and professional qualifications, education,
              CV or résumé, reference letters and interview notes, and criminal
              records data (only for vetting purposes, where permissible and in
              accordance with applicable laws). <br />• National identifiers –
              such as your social security number, national ID or passport,
              immigration status and documentation, visas and insurance numbers.
              • Mandatory policy acknowledgements (such as pay wage notice
              acknowledgement forms). <br />• Wage and payroll information,
              including but not limited to social security and national
              insurance numbers and direct deposit information. <br />• Benefit
              information and any forms related to applications for or changes
              to Employee health and welfare benefits (including short-term and
              long-term disability, medical and dental care). <br />• Spouse
              &amp; dependent information – such as name, age and gender. <br />
              • Financial information – such as banking details, tax
              information, payroll information, withholdings, salary, benefits,
              expenses, allowances, and stock and equity grants. <br />• IT
              information – information required to provide access to
              edotco&apos;s IT systems and networks, such as IP addresses, log
              files, login information, and software/hardware inventories.{' '}
              <br />• Security information -- such as access card usage (to
              enter edotco&apos;s offices) and closed-circuit televisions
              (“CCTV”) footage. • Other information that we may collect during
              times of crisis such as an outbreak of war/disease or a disaster.{' '}
              <br />• Medical information – such as reports in respect of your
              fitness to work, prepared by a healthcare professional.
            </p>
            <br />
            <p>
              With your consent, we may also collect sensitive personal data
              attributes such as race, ethnicity, sexual orientation, health
              information, disability information, etc. to help us understand
              the diversity of our workforce, conduct background verifications,
              conduct preemployment health checks, etc. If you provide us with
              data of other individuals, it is your responsibility to obtain
              consent from that individual prior to providing their data to us.
            </p>
            <br />
            <p className="font-mulish-bold">2. How do we collect your data?</p>
            <br />
            <p>
              Primarily, we collect your data directly from you. We may also
              collect your data from third parties such as Background
              verification vendors, hospitals/clinics, etc. We may also capture
              your data such as CCTV footage and other information during the
              course of your employment with us.
            </p>
            <br />
            <p className="font-mulish-bold">3. Who can access your data?</p>
            <br />
            <p>Following persons/entities can access your data:</p>
            <br />
            <p>
              • internal functions/teams of edotco and those of its affiliated
              entities, under the terms of your employment relationship with us,
              or <br />• third parties, for legal or business purposes, or
              <br />• recipients in other countries, for legal or business
              purposes.
            </p>
            <br />
            <p>
              These other countries may have different data protection laws than
              the laws of your home country. Rest assured, edotco only transfers
              Employee Data to another country (including to a company within
              the edotco Group) in accordance with Personal Data Protection Act
              2010 and edotco&apos;s Data Privacy Policy. purposes.
            </p>
            <br />
            <p className="font-mulish-bold">4. How do we use your data?</p>
            <br />
            <p>
              Your data may be utilized for various purposes, including but not
              limited to:
            </p>
            <br />
            <p>
              • career progression and personal development <br />•
              administration and management of salary and employment benefits
              <br />• short term and long-term incentive plan <br />• employment
              and industrial relations disputes, including but not limited to
              litigation <br />• corporate exercises undertaken by the Group
              <br />• management of performance <br />• application of work
              permits and immigration requirements <br />• loans, insurance and
              medical purposes <br />• disciplinary actions or terminations
              <br />• ensure health and safety in the workplace <br />•
              accounting, financial reporting and business planning <br />•
              security monitoring purposes <br />• organize team-building
              activities and other edotco-hosted events <br />• other legitimate
              purposes reasonably required for day-to-day operations <br />•
              internal or external investigations <br />• research, salary
              surveys and for audit purpose <br />• comply with reasons as
              stated in your contract of employment with us.
            </p>
            <br />
            <p>
              We may also use your data for other lawful purposes that may arise
              and other legal requirements such as responding to notices,
              defending against claims, etc.
            </p>
            <br />
            <p className="font-mulish-bold">
              5. What are the legal bases for processing your data?
            </p>
            <br />
            <p>
              We process your data only under any of the following legal basis:
            </p>
            <br />
            <p>
              • where we have your consent to do so; or <br />• where we need
              the data to carry out our employment contract with you; or <br />•
              where we need the data to comply with our legal obligations or
              exercise rights in the field of employment.
            </p>
            <br />
            <p className="font-mulish-bold">
              6. Who do we disclose your data to?
            </p>
            <br />
            <p>
              We disclose your data to the below mentioned categories of third
              parties for carrying out few of the processing activities listed
              under the section &lsquo;How do we use your data&rsquo;:
            </p>
            <br />
            <p>
              • companies within the edotco Group <br />• third party payroll
              processors <br />• background verification vendors <br />• any
              other third-party organizations providing administration or other
              services <br />• any third-party organizations involved in any
              corporate exercises undertaken by edotco <br />• any regulatory or
              governmental authority or authorized bodies having jurisdiction
              over edotco
            </p>
            <br />
            <p>
              In the event we consider it necessary or appropriate for the
              purpose, we may transfer personal data to a third party service or
              product providers within or outside the country in which we are
              established, which shall be done under conditions of
              confidentiality and similar levels of security safeguards.
            </p>
            <br />
            <p className="font-mulish-bold">7. How do we protect your data?</p>
            <br />
            <p>
              We shall keep and process your data in a secure manner. We
              endeavor, where practicable to process your data in a safe
              environment by preventing any unauthorized or unlawful processing
              of data or accidental loss or destruction of, or damage to such
              data. We have implemented various physical, technical and
              administrative security measures to protect the confidentiality,
              integrity and availability of your data.
            </p>
            <br />
            <p className="font-mulish-bold">
              8. How long do we retain your data?
            </p>
            <br />
            <p>
              We shall retain your personal data for as long as it is required
              for business, tax or legal purposes. Post that, we take measures
              to securely dispose your data.
            </p>
            <br />
            <p className="font-mulish-bold">9. Know your Rights</p>
            <br />
            <p>
              During and post your employment with us, as applicable, you may
              choose to exercise any of the following rights available to you:
            </p>
            <br />
            <p>
              • Right to access and obtain a copy of your data on request.
              <br />• Right to update / modify your data. <br />• Right to
              withdraw your consent where the processing is based on your
              consent.
            </p>
            <br />
            <p>
              To exercise your rights, you can reach out to us through the
              details under &lsquo;Contact Us&rsquo; section given below.
            </p>
            <br />
            <p className="font-mulish-bold">10. Know your responsibilities</p>
            <br />
            <p>
              It is your obligation to furnish to us with data which are true
              and accurate. Your failure or refusal to provide data when
              requested, may hinder our ability to:
            </p>
            <br />
            <p>
              • process the data for the purpose(s) stated herein; and <br />•
              administer the rights and obligations under our employment
              relationship efficiently.
            </p>
            <br />
            <p className="font-mulish-bold">
              11. By submitting your data to us, you acknowledge that:
            </p>
            <br />
            <p>
              • You have read and understood this Privacy Notice and agree to
              the use of your data as set out herein. <br />• All your
              representations are true and correct to the best of your
              knowledge, and you have not knowingly omitted any related
              information of adverse nature.
            </p>
            <br />
            <p className="font-mulish-bold">12. Contact Us</p>
            <br />
            <p>
              If you have any questions or complaints about this notice, our
              privacy and information handling practices, or would like to
              exercise your rights as data subjects, kindly reach out to us via
              email:{' '}
              <span className="text-secondary">privacy@edotcogroup.com.</span>
            </p>
            <br />
            <p className="font-mulish-bold">
              13. Updates to the Privacy Notice
            </p>
            <br />
            <p>
              edotco reserves the right to amend, modify, vary or update this
              Privacy Notice, at its sole discretion from time to time, as and
              when the need arises. The most recently published Privacy Notice
              shall prevail over any of its previous versions. edotco has no
              obligation to inform you of any variations and you are encouraged
              to check this Privacy Notice from time to time to stay informed of
              any changes. You agree to adhere to the terms of the Privacy
              Notice including any variations.
            </p>
            <br />
            <p className="font-mulish-bold">14. Version Info</p>
            <br />
            <p>
              This notice was published on 15th October 2020 and last updated on
              23rd September 2020.
            </p>
            <br />
          </ContentCard>
        </div>
      )}
      {global && visitors && (
        <div className="mt-24 px-10 pb-8 sm:pb-12 sm:px-20 lg:pb-24 lg:px-44">
          <ContentCard title="Privacy Notice for Visitors" privacy>
            <p>
              Dear guest, we thank you for visiting edotco Group Sdn Bhd and its
              subsidiaries (together referred to as “edotco”, “us” or “we” or
              “our”) and trusting us with your personal data. In edotco, we take
              Privacy seriously and all our activities are underpinned by our
              T.R.U.S.T principles of being Transparent, respecting your Rights,
              in our Use of your personal data, through robust cyber Security
              practices and we take due care when Transfer of data is required.
              This Privacy Notice (“Notice”) expresses our commitment to respect
              and protect your personal data and treat privacy as an integral
              part of our business and we do not view this as an obligation, but
              rather as a commitment to maintain your confidence and trust. The
              Notice describes types of personal data we collect, how we may use
              such data and whom we may share it with. “Personal Data” in this
              regard means information about you that we may require to
              facilitate your visit in an efficient manner.
            </p>
            <br />
            <p className="font-mulish-bold">1. Personal data we collect</p>
            <br />
            <p>
              We obtain basic personal data from you in our Visitors database
              and/or visitor log book, which includes but is not limited to:
            </p>
            <br />
            <p>
              • Contact information (such as name, company name, address, email
              address and telephone number) <br />• Identification information
              (such as passport identification number, tax registration number
              or social security number, driver&apos;s license, date of birth){' '}
              <br />• Race and Region <br />• Reason for visit <br />• Date and
              Time <br />• Photograph <br />• Biometrics and facial recognition{' '}
              <br />• Security notes (special instructions and access
              restrictions) and times swiped in and out of the building <br />•
              Video footage which shall be recorded on our CCTV system installed
              on Company premises.
            </p>
            <br />
            <p>
              The collected data will be used for recording and controlling
              access into the Company premises and security.
            </p>
            <br />
            <p className="font-mulish-bold">
              2. Purpose for processing personal data
            </p>
            <br />
            <p>
              Your personal data may be collected, used or otherwise processed
              by us for, amongst others, for the following purposes:
            </p>
            <br />
            <p>
              • To maintain and report Internal records; <br />• Statutory /
              legal requirement; <br />• To facilitate access in case of
              recurring visits <br />• To facilitate your visit in an efficient
              manner <br />• To ensure that physical security of people (staff,
              visitors and contractors) and items along with security of
              confidential information located/accessible in our Company
              premises is maintained. This is done to prevent loss, frauds,
              thefts, injuries, terrorism and other events of such kind in the
              Company&apos;s premises <br />• Where we are required by law to
              hold certain records, then we collect and hold those records to
              comply with that legal obligation. The above shall hereinafter be
              referred to as the “Purposes”.
            </p>
            <br />
            <p className="font-mulish-bold">3. Data Sharing</p>
            <br />
            <p>
              We do not routinely share/transfer your personal data with any
              external organizations or third parties. However, where and
              whenever we share/transfer your personal data, we shall do so in
              accordance with applicable data privacy laws and unless required
              or permitted by law.
            </p>
            <br />
            <p className="font-mulish-bold">4. Security</p>
            <br />
            <p>
              We endeavor to collect and process your personal data in a safe
              environment by preventing any unauthorized or unlawful processing
              of personal data or accidental loss or destruction of, or damage
              to such personal data. We have implemented various physical,
              technical and administrative security measures to protect your
              personal data and our network from unauthorized access.
            </p>
            <br />
            <p className="font-mulish-bold">5. Retention</p>
            <br />
            <p>
              Your personal data that has been collected will be retained as
              long as required to meet the purposes mentioned above. The
              retention period for storage of personal data is based on the
              requirements of applicable laws. However, in the absence of any
              relevant laws, personal data will be stored where it is required
              for business purposes.
            </p>
            <br />
            <p className="font-mulish-bold">6. Your Rights</p>
            <br />
            <p>
              We respect your rights and privacy. We endeavor to protect the
              confidentiality, integrity of your personal data by taking steps
              to ensure that your personal data is accurate and up-to-date. In
              compliance with our Data Privacy Policy, we assure you that you
              have right to access and correct your personal data. For
              exercising your rights, you can reach out to us through the
              details under Contact Us section given below.
            </p>
            <br />
            <p className="font-mulish-bold">7. Contact Us</p>
            <br />
            <p>
              If you have any questions or complaints about this notice, our
              privacy and information handling practices, or would like to
              exercise your rights as data subjects, kindly reach out to us via
              email:{' '}
              <span className="text-secondary">privacy@edotcogroup.com.</span>
            </p>
            <br />
            <p className="font-mulish-bold">8. Updates to the Privacy Notice</p>
            <br />
            <p>
              edotco reserves the right to update this privacy notice, as and
              when need arises. This notice shall prevail over any of its
              previous versions. We highly recommend that you check back here
              from time to time to stay informed of any changes.
            </p>
            <br />
            <p className="font-mulish-bold">9. Version Info</p>
            <br />
            <p>
              This notice was published on 15th October 2020 and last updated on
              25th August 2020.
            </p>
            <br />
          </ContentCard>
        </div>
      )}
      {global && vendorsGlobal && (
        <div className="mt-24 px-10 pb-8 sm:pb-12 sm:px-20 lg:pb-24 lg:px-44">
          <ContentCard title="Privacy Notice for Vendors" privacy>
            <p>
              edotco Group Sdn Bhd (together referred to as “edotco”, “us” or
              “we” or “our”), which in turn is a subsidiary of Axiata Group
              Berhad (“Axiata”). Respecting and protecting your Privacy is an
              integral part of our business and we do not view this as an
              obligation, but rather as a commitment to maintain your confidence
              and trust on us. In edotco, we take Privacy seriously and all our
              activities are underpinned by our T.R.U.S.T principles of being
              Transparent, respecting your Rights, in our Use of your personal
              data, through robust cyber Security practices and we take due care
              when Transfer of data is required.
            </p>
            <br />
            <p>
              This notice applies to your personal data which we collect,
              generate or use when you visit our website or enter into any
              discussion with us in relation to proposed provision of services,
              goods and/or supplies (“Proposed Transaction”).
            </p>
            <br />
            <p className="font-mulish-bold">
              1. Collection and use of your data
            </p>
            <br />
            <p>edotco may collect and use your personal data when:</p>
            <br />
            <p>
              • you contact us with any question
              <br />• you visit our website <br />• you submit any application
              through our website <br />• you contact us through various methods
              for the purposes of the Proposed Transaction <br />• you contact
              us for any other purpose(s).
            </p>
            <br />
            <p>
              The types of personal data that edotco may collect include, but
              are not limited to:
            </p>
            <br />
            <p>
              • contact information (such as name, address, email address,
              mobile number and telephone number) <br />• identification
              information (such as identity card or passport number, tax
              registration number or social security number, driver&apos;s
              license, date of birth etc.) <br />• banking information <br />•
              information required for the purposes of entering into and
              engaging in discussions relating to the Proposed Transaction.
            </p>
            <br />
            <p>
              edotco collects and uses your personal data with your knowledge
              and consent and typically when you:
            </p>
            <br />
            <p>
              • respond to communications from us (such as SMS, emails,
              questionnaires or surveys) <br />• interact with edotco&apos;s
              website, such as submitting an application form, completing survey
              form, use online services (if your browser has Internet cookies
              enabled, it can facilitate edotco&apos;s tracking of personal
              preferences, pages visited etc.) <br />• participate on
              edotco&apos;s social media pages such as Facebook etc. <br />•
              provide information for the purposes of the Proposed Transaction
              or any other affiliates or business dealings with edotco by which
              you have consented to provide your personal data. <br />• enter
              into and engage in discussions with us in respect of the Proposed
              Transaction <br />• enter into definitive agreement in respect of
              the Proposed Transaction.
            </p>
            <br />
            <p>
              Your personal data may be collected, used or otherwise processed
              by us for the following purposes:
            </p>
            <br />
            <p>
              • to enter into and engage in discussions relating to the Proposed
              Transaction with you <br />• process and manage the Proposed
              Transaction
              <br />• respond to your comments and inquiries <br />• to enforce
              any terms of the Proposed Transaction <br />• to provide you with
              communications relating to the Proposed Transaction.
            </p>
            <br />
            <p>
              If you give us information about another person, you confirm that
              the other person has appointed you to act on his/her behalf and
              has agreed that you can:
            </p>
            <br />
            <p>
              • give consent on his/her behalf to the processing of his/her
              personal information <br />• receive in his or her behalf any data
              protection notices <br />• warrant that you have obtained his/her
              consent for us to store his or her personal information or have
              the right to allow us to process his or her personal information.
            </p>
            <br />
            <p className="font-mulish-bold">2. Disclosure</p>
            <br />
            <p>
              We keep your personal data confidential and do not share it with
              non-affiliated companies, except: (a) to progress or facilitate
              the Proposed Transaction, (b) when we have your consent or (c)
              under the following circumstances:
            </p>
            <br />
            <p>
              • We may share your personal data to meet our legal and regulatory
              obligations. <br />• We may share your personal data to prevent
              and detect crime as per the law. <br />• When we believe it is
              necessary to share the information or enforce edotco&apos;s
              rights, usage terms, intellectual or physical property and for
              safety of edotco or associated parties. <br />• We may share your
              personal data if edotco is acquired by or merged with another
              company or for any legal claim, where edotco is required to do so.
            </p>
            <br />
            <p>
              We may disclose your personal data to the below classes of
              parties:
            </p>
            <br />
            <p>
              • with Axiata group companies, where necessary and within the
              limits of applicable law <br />• when we believe in good faith
              that disclosure is necessary to protect our rights, protect your
              security, investigate fraud or respond to a law enforcement
              request <br />• with edotco&apos;s service providers, field
              engineers, contractors who work on our behalf and who do not have
              an independent right to use the information to which they have
              access or that we disclose to them <br />• with our business
              partners for edotco&apos;s marketing activities, in such case no
              specific personally identifiable information is provided, as such
              information is generally aggregated <br />• with third parties for
              credit checks and fraud management <br />• with third parties for
              research and development purposes <br />• with our subsidiaries
              and affiliates.
            </p>
            <br />
            <p>
              We make sure that the above-mentioned parties maintain the
              confidentiality of your personal data and are restricted from
              using such information for any unauthorized purpose. edotco will
              ensure through formally executed contracts that these parties will
              provide an adequate level data protection as per the applicable
              data privacy laws and industry best practices.
            </p>
            <br />
            <p className="font-mulish-bold">3. Cross Border Data Transfer</p>
            <br />
            <p>
              With your consent or in accordance with the applicable laws, we
              may transfer your personal data across geographical borders to
              other entities. The transfer of personal data is carried out under
              our standard contracts with appropriate data protection clauses or
              data transfer agreements with similar obligations for the parties
              receiving this information to protect the security and
              confidentiality of your personal data.
            </p>
            <br />
            <p className="font-mulish-bold">4. Data Retention</p>
            <br />
            <p>
              We shall retain your personal data for as long as it is required
              for business, tax or legal purposes. Post that, we shall take
              measures to securely dispose your data.
            </p>
            <br />
            <p className="font-mulish-bold">5. Security</p>
            <br />
            <p>
              We endeavor, where practicable, to process your personal data in a
              safe environment by preventing any unauthorized or unlawful
              processing of personal data or accidental loss or destruction of,
              or damage to such information. We have implemented various
              physical, technical and administrative security measures to
              protect your personal data and our network from unauthorized
              access. Some of these measures include:
            </p>
            <br />
            <p>
              • encryption of data in transit or at rest <br />• strict
              adherence to privacy and security practices <br />• periodic
              security assessment and reviews to upgrade our practices <br />•
              restriction of access to such data to personnel who have a need to
              know such data.
            </p>
            <br />
            <p className="font-mulish-bold">6. Exercise your Rights</p>
            <br />
            <p>
              We respect your rights and privacy by taking steps to ensure that
              your personal data is accurate and up-to-date. In compliance with
              the Personal Data Protection Act 2010, we assure you that:
            </p>
            <br />
            <p>
              • you have the right to know what personal data we have about you
              <br />• you have the right to request a copy of your personal data
              <br />• you have the right to correct your personal data to ensure
              it is accurate, complete and up-to-date
              <br />• you have the right to withdraw your consent from our
              processing of your personal data
              <br />• you can also ask us to restrict how we use your personal
              data where it is likely to cause damage or distress
              <br />• you have a right to prevent processing of your personal
              data where it is so conducted or is going to be conducted for
              purposes of direct marketing.
            </p>
            <br />
            <p>
              For exercising your rights, you can reach out to us through the
              details under &lsquo;Contact Us&rsquo; section given below.
            </p>
            <br />
            <p className="font-mulish-bold">
              7. Communication Preferences and Choices
            </p>
            <br />
            <p>
              You may request us to stop sending promotional e-mails or other
              edotco communications, if any, by contacting us on the below
              mentioned contact details. These choices do not apply to the
              receipt of mandatory communications that are considered as part of
              the Proposed Transaction, unless the Proposed Transaction has been
              completed or terminated.
            </p>
            <br />
            <p className="font-mulish-bold">
              8. Consequences of not providing Personal Data
            </p>
            <br />
            <p>
              For you to enter into or engage in discussions relating to the
              Proposed Transaction, we may require collection of certain
              personal data about you and failure to provide such information
              may:
            </p>
            <br />
            <p>
              • result in us being unable to process your application
              <br />• result in us being unable to respond to your application
              <br />• limit or prevent access to certain features on our
              website/weblinks
              <br />• result in us being unable to enter into and engage in
              discussions relating to the Proposed Transaction with you.
            </p>
            <br />
            <p className="font-mulish-bold">
              9. By submitting your personal data to us, you acknowledge that:
            </p>
            <br />
            <p>
              i. You have read and understood this Privacy Notice and agree to
              the use of your personal data as set out herein. <br />
              ii. All your representations are true and correct to the best of
              your knowledge, and you have not knowingly omitted any relevant
              information which may be have an adverse effect.
            </p>
            <br />
            <p className="font-mulish-bold">10. Contact Us</p>
            <br />
            <p>
              If you have any questions or complaints about this notice, our
              privacy and information handling practices, or would like to
              exercise your rights as data subjects, kindly reach out to our
              Data Privacy Officer via email:{' '}
              <span className="text-secondary">privacy@edotcogroup.com.</span>
            </p>
            <br />
            <p className="font-mulish-bold">
              11. Updates to the Privacy Notice
            </p>
            <br />
            <p>
              edotco reserves the right to amend, modify, vary or update this
              Privacy Notice, at its sole discretion from time to time, as and
              when the need arises. The most recently published Privacy Notice
              shall prevail over any of its previous versions. edotco has no
              obligation to inform you of any variations and you are encouraged
              to check this Privacy Notice from time to time to stay informed of
              any changes. You agree to adhere to the terms of the Privacy
              Notice including any variations.
            </p>
            <br />
            <p className="font-mulish-bold">12. Version Info</p>
            <br />
            <p>
              This notice was published on 15th October 2020 and last updated on
              25th August 2020.
            </p>
            <br />
          </ContentCard>
        </div>
      )}
      {global && cookies && (
        <div className="mt-24 px-10 pb-8 sm:pb-12 sm:px-20 lg:pb-24 lg:px-44">
          <ContentCard title="Cookies Notice" privacy>
            <p className="font-mulish-bold">What are cookies?</p>
            <br />
            <p>
              A cookie is a small file that can be placed on your device that
              allows us to recognize and remember you. It is sent to your
              browser and stored on your computer&apos;s hard drive or tablet or
              mobile device. When you visit our sites, we may collect
              information from you automatically through cookies and other
              tracking technologies.
            </p>
            <br />
            <p className="font-mulish-bold">What are web beacons?</p>
            <br />
            <p>
              Web Beacon is a transparent graphic image placed on
              websites/e-mails to monitor user activity. Web beacons are similar
              to cookies and are often used in combination with cookies.
            </p>
            <br />
            <p className="font-mulish-bold">What do we use cookies for?</p>
            <br />
            <p>
              Like most providers of online services, we use cookies to provide,
              secure and improve our services, including by remembering your
              preferences, recognizing you when you visit our website and
              personalizing and tailoring ads to your interests. To accomplish
              these purposes, we also may link information from cookies with
              other personal information we hold about you.
            </p>
            <br />
            <p className="font-mulish-bold">
              What are the different types of cookies?
            </p>
            <br />
            <p className="font-mulish-semibold">First-party cookies</p>
            <p>
              First-party cookies are placed on your device directly by us. For
              example, we use first-party cookies to adapt our website to your
              browser&apos;s language preferences and to better understand your
              use of our website.
            </p>
            <br />
            <p className="font-mulish-semibold">Third-party cookies</p>
            <p>
              Third-party cookies are placed on your device by our partners and
              service providers. For example, we use third-party cookies to
              measure user numbers on our website or to enable you to share
              content with others across social media platforms.
            </p>
            <br />
            <p className="font-mulish-semibold">Session cookies</p>
            <p>
              Session cookies are used for a variety of reasons, including to
              learn more about your use of our website during one single browser
              session and to help you to use our website more efficiently.
              Session cookies last only until you close your browser.
            </p>
            <br />
            <p className="font-mulish-semibold">Persistent cookies</p>
            <p>
              Persistent cookies are primarily used to help you quickly sign-in
              to our website again and for analytical purposes. Persistent
              cookies have a longer lifespan and aren&apos;t automatically
              deleted when you close your browser.
            </p>
            <br />
            <p className="font-mulish-bold">
              Based on functionality, cookies can be classified as below:
            </p>
            <br />
            <div className="flex justify-center items-center">
              <table className="table-auto shadow-lg">
                <thead className="border border-primary bg-primary text-white">
                  <tr>
                    <th className="p-4">Functionality</th>
                    <th className="border-r h-full" aria-label="divider" />
                    <th className="p-4">Description</th>
                  </tr>
                </thead>
                <tbody className="border bg-grey">
                  <tr className="border-t h-full" />
                  <tr>
                    <td className="font-mulish-semibold p-6">
                      Necessary cookies
                    </td>
                    <td className="border-r h-full" />
                    <td className="p-6">
                      These cookies are strictly necessary to provide you with
                      services available through our website and to use some of
                      its features, such as access to secure areas.
                    </td>
                  </tr>
                  <tr className="border-t h-full" />
                  <tr>
                    <td className="font-mulish-semibold p-6">
                      Analytics cookies
                    </td>
                    <td className="border-r h-full" />
                    <td className="p-6">
                      These cookies help us understand how our website is being
                      used, how effective marketing campaigns are, and help us
                      customize and improve our websites for you.
                    </td>
                  </tr>
                  <tr className="border-t h-full" />
                  <tr>
                    <td className="font-mulish-semibold p-6">
                      Marketing cookies
                    </td>
                    <td className="border-r h-full" />
                    <td className="p-6">
                      These cookies record your visit to our website, the pages
                      you have visited (including, in the case of interest-based
                      advertising, the pages of other websites) and the links
                      you have followed. We will use this information to make
                      our website and the advertising displayed on it more
                      relevant to your interests. We may also share this
                      information with third parties for this purpose. Without
                      these cookies, you will be able to use and enjoy all the
                      features of our website but the ads you see will not be
                      tailored to your preferences.
                    </td>
                  </tr>
                  <tr className="border-t h-full" />
                  <tr>
                    <td className="font-mulish-semibold p-6">
                      Analytics cookies
                    </td>
                    <td className="border-r h-full" />
                    <td className="p-6">
                      Preference cookies enable a website to remember
                      information that changes the way the website behaves or
                      looks, like your preferred language or the region that you
                      are in.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <p>
              By using our website, you consent to the use of these cookies. If
              you do not wish to accept any cookies or certain types of
              cookies/web beacons, you can change your browser&apos;s settings
              to delete cookies that have already been set and to not accept new
              cookies.
            </p>
            <br />
            <p className="font-mulish-bold">Cookie preferences</p>
            <br />
            <p>
              Users can mostly control their cookie preferences by managing the
              browser settings. For more information about these controls and to
              exercise your cookie preferences, visit your browser or
              device&apos;s help material. Please however note, that, if you
              delete cookies or do not accept them, you might not be able to use
              all of the features we offer, you may not be able to store your
              preferences, and some of our pages might not get displayed
              properly.
            </p>
            <br />
            <p className="font-mulish-bold">Changes to this cookie policy</p>
            <br />
            <p>
              We may periodically update this policy to comply with privacy
              regulations, describe new website features, or to add and/or
              remove cookies that we use.
            </p>
            <br />
            <p className="font-mulish-bold">Other information</p>
            <br />
            <p>
              For more information on how Axiata manages your personal data
              received through the website, please read edotco&apos;s privacy
              notice at{' '}
              <a
                className="text-secondary"
                href="https://edotcogroup.com/privacy-policy/."
              >
                https://edotcogroup.com/privacy-policy/.
              </a>
            </p>
            <br />
            <p className="font-mulish-bold">How to contact us</p>
            <br />
            <p>
              If you have any questions or concerns about this policy or its
              implementation, please contact us at{' '}
              <span className="text-secondary">privacy@edotcogroup.com.</span>
            </p>
            <br />
          </ContentCard>
        </div>
      )}
      {malaysia && vendorsMalaysia && (
        <div className="mt-24 px-10 pb-8 sm:pb-12 sm:px-20 lg:pb-24 lg:px-44">
          <ContentCard
            title="Privacy Notice for Vendors (edotco Malaysia)"
            privacy
          >
            <p>
              edotco Group Sdn Bhd, together with its subsidiaries (collectively
              referred to as “edotco”, “us” or “we” or “our”) are edotco
              Malaysia Sdn Bhd is a subsidiary of edotco Group Sdn Bhd (together
              referred to as “edotco”, “us” or “we” or “our”), which in turn is
              a subsidiary of Axiata Group Berhad (“Axiata”).
            </p>
            <br />
            <p>
              Respecting and protecting your Privacy is an integral part of our
              business and we do not view this as an obligation, but rather as a
              commitment to maintain your confidence and trust on us. In edotco,
              we take Privacy seriously and all our activities are underpinned
              by our T.R.U.S.T principles of being Transparent, respecting your
              Rights, in our Use of your personal data, through robust cyber
              Security practices and we take due care when Transfer of data is
              required.
            </p>
            <br />
            <p>
              This notice applies to your personal data which we collect,
              generate or use when you visit our website or enter into any
              discussion with us in relation to proposed provision of services,
              goods and/or supplies (“Proposed Transaction”).
            </p>
            <br />
            <p className="font-mulish-bold">
              1. Collection and use of your data
            </p>
            <br />
            <p>edotco may collect and use your personal data when:</p>
            <br />
            <p>
              • you contact us with any question
              <br />• you visit our website <br />• you submit any application
              through our website <br />• you contact us through various methods
              for the purposes of the Proposed Transaction <br />• you contact
              us for any other purpose(s).
            </p>
            <br />
            <p>
              The types of personal data that edotco may collect include, but
              are not limited to:
            </p>
            <br />
            <p>
              • contact information (such as name, address, email address,
              mobile number and telephone number) <br />• identification
              information (such as identity card or passport number, tax
              registration number or social security number, driver&apos;s
              license, date of birth etc.) <br />• banking information <br />•
              information required for the purposes of entering into and
              engaging in discussions relating to the Proposed Transaction.
            </p>
            <br />
            <p>
              edotco collects and uses your personal data with your knowledge
              and consent and typically when you:
            </p>
            <br />
            <p>
              • respond to communications from us (such as SMS, emails,
              questionnaires or surveys) <br />• interact with edotco&apos;s
              website, such as submitting an application form, completing survey
              form, use online services (if your browser has Internet cookies
              enabled, it can facilitate edotco&apos;s tracking of personal
              preferences, pages visited etc.) <br />• participate on
              edotco&apos;s social media pages such as Facebook etc. <br />•
              provide information for the purposes of the Proposed Transaction
              or any other affiliates or business dealings with edotco by which
              you have consented to provide your personal data. <br />• enter
              into and engage in discussions with us in respect of the Proposed
              Transaction <br />• enter into definitive agreement in respect of
              the Proposed Transaction.
            </p>
            <br />
            <p>
              Your personal data may be collected, used or otherwise processed
              by us for the following purposes:
            </p>
            <br />
            <p>
              • to enter into and engage in discussions relating to the Proposed
              Transaction with you <br />• process and manage the Proposed
              Transaction
              <br />• respond to your comments and inquiries <br />• to enforce
              any terms of the Proposed Transaction <br />• to provide you with
              communications relating to the Proposed Transaction.
            </p>
            <br />
            <p>
              If you give us information about another person, you confirm that
              the other person has appointed you to act on his/her behalf and
              has agreed that you can:
            </p>
            <br />
            <p>
              • give consent on his/her behalf to the processing of his/her
              personal information <br />• receive in his or her behalf any data
              protection notices <br />• warrant that you have obtained his/her
              consent for us to store his or her personal information or have
              the right to allow us to process his or her personal information.
            </p>
            <br />
            <p className="font-mulish-bold">2. Disclosure</p>
            <br />
            <p>
              We keep your personal data confidential and do not share it with
              non-affiliated companies, except: (a) to progress or facilitate
              the Proposed Transaction, (b) when we have your consent or (c)
              under the following circumstances:
            </p>
            <br />
            <p>
              • We may share your personal data to meet our legal and regulatory
              obligations. <br />• We may share your personal data to prevent
              and detect crime as per the law. <br />• When we believe it is
              necessary to share the information or enforce edotco&apos;s
              rights, usage terms, intellectual or physical property and for
              safety of edotco or associated parties. <br />• We may share your
              personal data if edotco is acquired by or merged with another
              company or for any legal claim, where edotco is required to do so.
            </p>
            <br />
            <p>
              We may disclose your personal data to the below classes of
              parties:
            </p>
            <br />
            <p>
              • with Axiata group companies, where necessary and within the
              limits of applicable law <br />• when we believe in good faith
              that disclosure is necessary to protect our rights, protect your
              security, investigate fraud or respond to a law enforcement
              request <br />• with edotco&apos;s service providers, field
              engineers, contractors who work on our behalf and who do not have
              an independent right to use the information to which they have
              access or that we disclose to them <br />• with our business
              partners for edotco&apos;s marketing activities, in such case no
              specific personally identifiable information is provided, as such
              information is generally aggregated <br />• with third parties for
              credit checks and fraud management <br />• with third parties for
              research and development purposes <br />• with our subsidiaries
              and affiliates.
            </p>
            <br />
            <p>
              We make sure that the above-mentioned parties maintain the
              confidentiality of your personal data and are restricted from
              using such information for any unauthorized purpose. edotco will
              ensure through formally executed contracts that these parties will
              provide an adequate level data protection as per the applicable
              data privacy laws and industry best practices.
            </p>
            <br />
            <p className="font-mulish-bold">3. Cross Border Data Transfer</p>
            <br />
            <p>
              With your consent or in accordance with the applicable laws, we
              may transfer your personal data across geographical borders to
              other entities. The transfer of personal data is carried out under
              our standard contracts with appropriate data protection clauses or
              data transfer agreements with similar obligations for the parties
              receiving this information to protect the security and
              confidentiality of your personal data.
            </p>
            <br />
            <p className="font-mulish-bold">4. Data Retention</p>
            <br />
            <p>
              We shall retain your personal data for as long as it is required
              for business, tax or legal purposes. Post that, we shall take
              measures to securely dispose your data.
            </p>
            <br />
            <p className="font-mulish-bold">5. Security</p>
            <br />
            <p>
              We endeavor, where practicable, to process your personal data in a
              safe environment by preventing any unauthorized or unlawful
              processing of personal data or accidental loss or destruction of,
              or damage to such information. We have implemented various
              physical, technical and administrative security measures to
              protect your personal data and our network from unauthorized
              access. Some of these measures include:
            </p>
            <br />
            <p>
              • encryption of data in transit or at rest <br />• strict
              adherence to privacy and security practices <br />• periodic
              security assessment and reviews to upgrade our practices <br />•
              restriction of access to such data to personnel who have a need to
              know such data.
            </p>
            <br />
            <p className="font-mulish-bold">6. Exercise your Rights</p>
            <br />
            <p>
              We respect your rights and privacy by taking steps to ensure that
              your personal data is accurate and up-to-date. In compliance with
              the Personal Data Protection Act 2010, we assure you that:
            </p>
            <br />
            <p>
              • you have the right to know what personal data we have about you
              <br />• you have the right to request a copy of your personal data
              <br />• you have the right to correct your personal data to ensure
              it is accurate, complete and up-to-date
              <br />• you have the right to withdraw your consent from our
              processing of your personal data
              <br />• you can also ask us to restrict how we use your personal
              data where it is likely to cause damage or distress
              <br />• you have a right to prevent processing of your personal
              data where it is so conducted or is going to be conducted for
              purposes of direct marketing.
            </p>
            <br />
            <p>
              For exercising your rights, you can reach out to us through the
              details under &lsquo;Contact Us&rsquo; section given below.
            </p>
            <br />
            <p className="font-mulish-bold">
              7. Communication Preferences and Choices
            </p>
            <br />
            <p>
              You may request us to stop sending promotional e-mails or other
              edotco communications, if any, by contacting us on the below
              mentioned contact details. These choices do not apply to the
              receipt of mandatory communications that are considered as part of
              the Proposed Transaction, unless the Proposed Transaction has been
              completed or terminated.
            </p>
            <br />
            <p className="font-mulish-bold">
              8. Consequences of not providing Personal Data
            </p>
            <br />
            <p>
              For you to enter into or engage in discussions relating to the
              Proposed Transaction, we may require collection of certain
              personal data about you and failure to provide such information
              may:
            </p>
            <br />
            <p>
              • result in us being unable to process your application
              <br />• result in us being unable to respond to your application
              <br />• limit or prevent access to certain features on our
              website/weblinks
              <br />• result in us being unable to enter into and engage in
              discussions relating to the Proposed Transaction with you.
            </p>
            <br />
            <p className="font-mulish-bold">
              9. By submitting your personal data to us, you acknowledge that:
            </p>
            <br />
            <p>
              i. You have read and understood this Privacy Notice and agree to
              the use of your personal data as set out herein. <br />
              ii. All your representations are true and correct to the best of
              your knowledge, and you have not knowingly omitted any relevant
              information which may be have an adverse effect.
            </p>
            <br />
            <p className="font-mulish-bold">10. Contact Us</p>
            <br />
            <p>
              If you have any questions or complaints about this notice, our
              privacy and information handling practices, or would like to
              exercise your rights as data subjects, kindly reach out to our
              Data Privacy Officer via email:{' '}
              <span className="text-secondary">privacy@edotcogroup.com.</span>
            </p>
            <br />
            <p className="font-mulish-bold">
              11. Updates to the Privacy Notice
            </p>
            <br />
            <p>
              edotco reserves the right to amend, modify, vary or update this
              Privacy Notice, at its sole discretion from time to time, as and
              when the need arises. The most recently published Privacy Notice
              shall prevail over any of its previous versions. edotco has no
              obligation to inform you of any variations and you are encouraged
              to check this Privacy Notice from time to time to stay informed of
              any changes. You agree to adhere to the terms of the Privacy
              Notice including any variations.
            </p>
            <br />
            <p className="font-mulish-bold">12. Version Info</p>
            <br />
            <p>
              This notice was published on 15th October 2020 and last updated on
              25th August 2020.
            </p>
            <br />
          </ContentCard>
        </div>
      )}
      {malaysia && landlords && (
        <div className="mt-24 px-10 pb-8 sm:pb-12 sm:px-20 lg:pb-24 lg:px-44">
          <ContentCard
            title="Privacy Notice for Landlords (edotco Malaysia)
            "
            privacy
          >
            <p>
              edotco Malaysia Sdn Bhd is a subsidiary of edotco Group Sdn Bhd
              (together referred to as “edotco”, “us” or “we” or “our”), which
              in turn is a subsidiary of Axiata Group Berhad (“Axiata”).
              Respecting and protecting your Privacy is an integral part of our
              business and we do not view this as an obligation, but rather as a
              commitment to maintain your confidence and trust on us. In edotco,
              we take Privacy seriously and all our activities are underpinned
              by our T.R.U.S.T principles of being Transparent, respecting your
              Rights, in our Use of your personal data, through robust cyber
              Security practices and we take due care when Transfer of data is
              required.
            </p>
            <br />
            <p>
              This notice applies to your personal data which we collect,
              generate or use when you visit our website, submit any application
              through our website or enter into any discussion with us in
              relation to proposed acquisition of land, long term lease, tenancy
              agreement, license agreement, master access agreement and/or any
              other agreements by whatever name called which capture the rights
              to grant edotco to use the land or site for the purposes of
              construction, installation, operation and maintenance of
              telecommunication infrastructure (“Proposed Transaction”).
            </p>
            <br />
            <p className="font-mulish-bold">
              1. Collection and use of your data
            </p>
            <br />
            <p>edotco may collect and use your personal data when:</p>
            <br />
            <p>
              • you contact us with any question
              <br />• you visit our website <br />• you submit any application
              through our website <br />• you contact us through various methods
              for the purposes of the Proposed Transaction <br />• you contact
              us for any other purpose(s).
            </p>
            <br />
            <p>
              The types of personal data that edotco may collect include, but
              are not limited to:
            </p>
            <br />
            <p>
              • contact information (such as name, address, email address,
              mobile number and telephone number) <br />• identification
              information (such as identity card or passport number, tax
              registration number or social security number, driver&apos;s
              license, date of birth etc.) <br />• banking information <br />•
              information required for the purposes of entering into and
              engaging in discussions relating to the Proposed Transaction.
            </p>
            <br />
            <p>
              edotco collects and uses your personal data with your knowledge
              and consent and typically when you:
            </p>
            <br />
            <p>
              • respond to communications from us (such as SMS, emails,
              questionnaires or surveys) <br />• interact with edotco&apos;s
              website, such as submitting an application form, completing survey
              form, use online services (if your browser has Internet cookies
              enabled, it can facilitate edotco&apos;s tracking of personal
              preferences, pages visited etc.) <br />• participate on
              edotco&apos;s social media pages such as Facebook etc. <br />•
              provide information for the purposes of the Proposed Transaction
              or any other affiliates or business dealings with edotco by which
              you have consented to provide your personal data. <br />• enter
              into and engage in discussions with us in respect of the Proposed
              Transaction <br />• enter into definitive agreement in respect of
              the Proposed Transaction.
            </p>
            <br />
            <p>
              Your personal data may be collected, used or otherwise processed
              by us for the following purposes:
            </p>
            <br />
            <p>
              • to enter into and engage in discussions relating to the Proposed
              Transaction with you <br />• process and manage the Proposed
              Transaction
              <br />• respond to your comments and inquiries <br />• to enforce
              any terms of the Proposed Transaction <br />• to provide you with
              communications relating to the Proposed Transaction.
            </p>
            <br />
            <p>
              If you give us information about another person, you confirm that
              the other person has appointed you to act on his/her behalf and
              has agreed that you can:
            </p>
            <br />
            <p>
              • give consent on his/her behalf to the processing of his/her
              personal information <br />• receive in his or her behalf any data
              protection notices <br />• warrant that you have obtained his/her
              consent for us to store his or her personal information or have
              the right to allow us to process his or her personal information.
            </p>
            <br />
            <p className="font-mulish-bold">2. Disclosure</p>
            <br />
            <p>
              We keep your personal data confidential and do not share it with
              non-affiliated companies, except: (a) to progress or facilitate
              the Proposed Transaction, (b) when we have your consent or (c)
              under the following circumstances:
            </p>
            <br />
            <p>
              • We may share your personal data to meet our legal and regulatory
              obligations. <br />• We may share your personal data to prevent
              and detect crime as per the law. <br />• When we believe it is
              necessary to share the information or enforce edotco&apos;s
              rights, usage terms, intellectual or physical property and for
              safety of edotco or associated parties. <br />• We may share your
              personal data if edotco is acquired by or merged with another
              company or for any legal claim, where edotco is required to do so.
            </p>
            <br />
            <p>
              We may disclose your personal data to the below classes of
              parties:
            </p>
            <br />
            <p>
              • with Axiata group companies, where necessary and within the
              limits of applicable law <br />• when we believe in good faith
              that disclosure is necessary to protect our rights, protect your
              security, investigate fraud or respond to a law enforcement
              request <br />• with edotco&apos;s service providers, field
              engineers, contractors who work on our behalf and who do not have
              an independent right to use the information to which they have
              access or that we disclose to them <br />• with our business
              partners for edotco&apos;s marketing activities, in such case no
              specific personally identifiable information is provided, as such
              information is generally aggregated <br />• with third parties for
              credit checks and fraud management <br />• with third parties for
              research and development purposes <br />• with our subsidiaries
              and affiliates.
            </p>
            <br />
            <p>
              We make sure that the above-mentioned parties maintain the
              confidentiality of your personal data and are restricted from
              using such information for any unauthorized purpose. edotco will
              ensure through formally executed contracts that these parties will
              provide an adequate level data protection as per the applicable
              data privacy laws and industry best practices.
            </p>
            <br />
            <p className="font-mulish-bold">3. Cross Border Data Transfer</p>
            <br />
            <p>
              With your consent or in accordance with the applicable laws, we
              may transfer your personal data across geographical borders to
              other entities. The transfer of personal data is carried out under
              our standard contracts with appropriate data protection clauses or
              data transfer agreements with similar obligations for the parties
              receiving this information to protect the security and
              confidentiality of your personal data.
            </p>
            <br />
            <p className="font-mulish-bold">4. Data Retention</p>
            <br />
            <p>
              We shall retain your personal data for as long as it is required
              for business, tax or legal purposes. Post that, we shall take
              measures to securely dispose your data.
            </p>
            <br />
            <p className="font-mulish-bold">5. Security</p>
            <br />
            <p>
              We endeavor, where practicable, to process your personal data in a
              safe environment by preventing any unauthorized or unlawful
              processing of personal data or accidental loss or destruction of,
              or damage to such information. We have implemented various
              physical, technical and administrative security measures to
              protect your personal data and our network from unauthorized
              access. Some of these measures include:
            </p>
            <br />
            <p>
              • encryption of data in transit or at rest <br />• strict
              adherence to privacy and security practices <br />• periodic
              security assessment and reviews to upgrade our practices <br />•
              restriction of access to such data to personnel who have a need to
              know such data.
            </p>
            <br />
            <p className="font-mulish-bold">6. Exercise your Rights</p>
            <br />
            <p>
              We respect your rights and privacy by taking steps to ensure that
              your personal data is accurate and up-to-date. In compliance with
              the Personal Data Protection Act 2010, we assure you that:
            </p>
            <br />
            <p>
              • you have the right to know what personal data we have about you
              <br />• you have the right to request a copy of your personal data
              <br />• you have the right to correct your personal data to ensure
              it is accurate, complete and up-to-date
              <br />• you have the right to withdraw your consent from our
              processing of your personal data
              <br />• you can also ask us to restrict how we use your personal
              data where it is likely to cause damage or distress
              <br />• you have a right to prevent processing of your personal
              data where it is so conducted or is going to be conducted for
              purposes of direct marketing.
            </p>
            <br />
            <p>
              For exercising your rights, you can reach out to us through the
              details under &lsquo;Contact Us&rsquo; section given below.
            </p>
            <br />
            <p className="font-mulish-bold">
              7. Communication Preferences and Choices
            </p>
            <br />
            <p>
              You may request us to stop sending promotional e-mails or other
              edotco communications, if any, by contacting us on the below
              mentioned contact details. These choices do not apply to the
              receipt of mandatory communications that are considered as part of
              the Proposed Transaction, unless the Proposed Transaction has been
              completed or terminated.
            </p>
            <br />
            <p className="font-mulish-bold">
              8. Consequences of not providing Personal Data
            </p>
            <br />
            <p>
              For you to enter into or engage in discussions relating to the
              Proposed Transaction, we may require collection of certain
              personal data about you and failure to provide such information
              may:
            </p>
            <br />
            <p>
              • result in us being unable to process your application
              <br />• result in us being unable to respond to your application
              <br />• limit or prevent access to certain features on our
              website/weblinks
              <br />• result in us being unable to enter into and engage in
              discussions relating to the Proposed Transaction with you.
            </p>
            <br />
            <p className="font-mulish-bold">
              9. By submitting your personal data to us, you acknowledge that:
            </p>
            <br />
            <p>
              i. You have read and understood this Privacy Notice and agree to
              the use of your personal data as set out herein. <br />
              ii. All your representations are true and correct to the best of
              your knowledge, and you have not knowingly omitted any relevant
              information which may be have an adverse effect.
            </p>
            <br />
            <p className="font-mulish-bold">10. Contact Us</p>
            <br />
            <p>
              If you have any questions or complaints about this notice, our
              privacy and information handling practices, or would like to
              exercise your rights as data subjects, kindly reach out to our
              Data Privacy Officer via email:{' '}
              <span className="text-secondary">privacy@edotcogroup.com.</span>
            </p>
            <br />
            <p className="font-mulish-bold">
              11. Updates to the Privacy Notice
            </p>
            <br />
            <p>
              edotco reserves the right to amend, modify, vary or update this
              Privacy Notice, at its sole discretion from time to time, as and
              when the need arises. The most recently published Privacy Notice
              shall prevail over any of its previous versions. edotco has no
              obligation to inform you of any variations and you are encouraged
              to check this Privacy Notice from time to time to stay informed of
              any changes. You agree to adhere to the terms of the Privacy
              Notice including any variations.
            </p>
            <br />
            <p className="font-mulish-bold">12. Version Info</p>
            <br />
            <p>
              This notice was published on 15th October 2020 and last updated on
              25th August 2020.
            </p>
            <br />
          </ContentCard>
        </div>
      )}
    </>
  );
};

ButtonLink.propTypes = {
  handleClick: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  imgActive: PropTypes.string.isRequired,
  imgPassive: PropTypes.string.isRequired,
};

export default Contents;
