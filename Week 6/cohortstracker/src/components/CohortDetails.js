import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails() {
  const getHeaderStyle = (status) => {
    return {
      color: status === 'ongoing' ? 'green' : 'blue'
    };
  };

  return (
    <div>
      <h1>Cohorts Details</h1>
      
      <div className={styles.box}>
        <h3 style={getHeaderStyle('scheduled')}>INTADMDF10 -.NET FSD</h3>
        <dl>
          <dt>Started On</dt>
          <dd>22-Feb-2025</dd>
          <dt>Current Status</dt>
          <dd>Scheduled</dd>
          <dt>Coach</dt>
          <dd>Aathma</dd>
          <dt>Trainer</dt>
          <dd>Jojo Jose</dd>
        </dl>
      </div>

      <div className={styles.box}>
        <h3 style={getHeaderStyle('ongoing')}>ADM21JF014 -Java FSD</h3>
        <dl>
          <dt>Started On</dt>
          <dd>10-Sep-2024</dd>
          <dt>Current Status</dt>
          <dd>Ongoing</dd>
          <dt>Coach</dt>
          <dd>Apoorv</dd>
          <dt>Trainer</dt>
          <dd>Elisa Smith</dd>
        </dl>
      </div>

      <div className={styles.box}>
        <h3 style={getHeaderStyle('ongoing')}>CDBJF21025 -Java FSD</h3>
        <dl>
          <dt>Started On</dt>
          <dd>24-Dec-2021</dd>
          <dt>Current Status</dt>
          <dd>Ongoing</dd>
          <dt>Coach</dt>
          <dd>Aathma</dd>
          <dt>Trainer</dt>
          <dd>John Doe</dd>
        </dl>
      </div>
    </div>
  );
}

export default CohortDetails;
