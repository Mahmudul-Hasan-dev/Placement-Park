import React from 'react';
import './Jobs.css'
import money from '../../images/icons/money.png';
import locationPic from "../../images/icons/Location.png";
import { Link, useLoaderData  } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const Jobs = (props) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,
        job_type,salary,job_description}= props.job
       
        
    
    return (
      
            <div className='jobs'>
            
            <img src={logo} alt="" />
            <p className='job-title' >{job_title}</p>
            <p className='company-name'>{company_name}</p>
            <p> 
                <span className='job-type'>{remote_or_onsite}</span> 
                &nbsp;&nbsp;
                <span className='job-type'>{job_type}</span>
            </p>
    
           <span className='items-inline'>
              <img src={locationPic} alt="" />  <p>{location}</p> &nbsp; &nbsp;
              <img src={money} alt="" />  <p>Salary : {salary}</p>
           </span>
          
          <button ><Link to= {`/job/${id}`} >View Details</Link> </button>
       
         
         
        </div>
      
       
    );
};

export default Jobs;