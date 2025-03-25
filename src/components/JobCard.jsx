import React from "react";
import { Link } from "react-router-dom";
import "./Jobcard.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.body}</p>
      <Link className="Details-button" to={`/job/${job._id}`}>View Details</Link>
    </div>
  );
};

export default JobCard;
