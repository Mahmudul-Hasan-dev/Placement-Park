import React, { useEffect, useState } from 'react';
import Jobs from '../Jobs/Jobs';
import './FeaturedJob.css'
import { useLoaderData } from 'react-router-dom';

const FeaturedJob = () => {

   const jobs = useLoaderData();
   //  const [jobs, setJobs]= useState();
   //     useEffect(()=>{
   //         fetch('jobs.json')
   //         .then(res=> res.json())
   //         .then(data=> setJobs(data))
   //     },[])


   return (
      <div>
         <div className="title">
            <h2>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

         </div>
         <div className='featured-container'>
            {
               jobs.slice(0, 4).map(job => <Jobs
                  key={job.id}
                  job={job}
               > </Jobs>)
            }
         </div>
         <button className='allJobbtn'>See all Jobs</button>
      </div>
   );
};

export default FeaturedJob;