import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();


  return (
    <div>
      <div className='head'>
        <h1>Job Details</h1>
      </div>
      <div className='jobDetails-container'>
        <div className='details-container'>
          <p>Job Description: {job.job_description}</p>
          <p>Job Responsibility:</p>
          <p>Educational Requirements:</p>
          <p>Experiences:</p>
        </div>
        <div className='sidebar'>
          <div className='details-sidebar'>
            <h3>Job Details</h3>
            <hr />
            <p>Salary</p>
            <p>Job Title: {job.job_title}</p>
            <h3>Contact Information</h3>
            <hr />
            <p>Phone :</p>
            <p>Email : </p>
            <p>Address</p>
          </div>
          <button className="applybtn">Apply Now</button>
        </div>

      </div>
    </div>
  );
};

export default JobDetails;