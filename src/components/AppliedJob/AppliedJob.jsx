import React from 'react';

const AppliedJob = (job) => {
    const { job_title } = job
    return (
        <div>
            <div className="head">
                <h1>Applied Job</h1>
            </div>
            <div>
                <h2>{job_title}</h2>
            </div>
        </div>
    );
};

export default AppliedJob;