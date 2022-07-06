import React from 'react';
import StatementCard from './StatementCard';

const Statements = () => (
  <>
    <div className="px-10 pb-8 sm:pb-12 sm:px-20 lg:pb-24 lg:px-44">
      <StatementCard
        title="Statement on Unauthorised Mention of edotco"
        date="4 · Apr · 2022"
      >
        <p>
          It has come to our attention that an individual alleging to be an
          employee and consultant of edotco Global in Malaysia had organised
          business meetings under the names “name of project” or “another name
          of project”.
        </p>
        <br />
        <p>
          We wish to alert members of the public that this is a scam, and the
          individual does not represent edotco Global&apos; interests whether as
          an employee or a consultant. Relevant authorities have been informed
          of this matter and investigations are currently ongoing.
        </p>
        <br />
        <p>
          Please be informed that edotco&apos; official corporate and business
          information in Malaysia is published only via the following official
          platforms: <br />• Official website: https://edotcogroup.com/ <br />
          • Facebook Account: edotco Group <br />• Twitter Account: @edotcoGroup{' '}
          <br />• LinkedIn Account: edotco Group
        </p>
        <br />
        <p>
          Meanwhile, edotco&apos; authorised employees only conduct official
          written business communication via our enterprise email with the
          domain name “@edotcogroup.com”.
        </p>
        <br />
        <p>
          Should you need verification on any information received about edotco
          Group, please kindly contact our personnel: Name: Name of Employee
          Phone number: +60 12 345 6789 Email: nameofemployee@edotcogroup.com
        </p>
      </StatementCard>
      <StatementCard title="Online Investment Scam" date="4 · Apr · 2022" />
      <StatementCard
        title="Identity Fraud Against An edotco Employee"
        date="4 · Apr · 2022"
      />
      <StatementCard title="Another Scam Notice" date="4 · Apr · 2022" />
      <StatementCard title="Another Scam Notice" date="4 · Apr · 2022" />
      <StatementCard title="Another Scam Notice" date="4 · Apr · 2022" />
      <StatementCard title="Another Scam Notice" date="4 · Apr · 2022" />
      <StatementCard title="Another Scam Notice" date="4 · Apr · 2022" />
    </div>
  </>
);

export default Statements;
