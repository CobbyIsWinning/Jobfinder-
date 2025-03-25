import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../components/Jobdetails.css";

const API_URL = "http://localhost:5000/api/jobs"; 

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setJob(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job details", error);
        setError("Job not found");
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="Job-container">
    <div className="job-details">
      <h2 className="job-title" >{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Salary:</strong> {job.salary || "Not specified"}</p>
      <p><strong>Requirements:</strong> {job.requirements || "N/A"}</p>
      <p><strong>Posted on:</strong> {new Date(job.createdAt).toDateString()}</p>
      <Link to={`/apply/${id}`}>Apply Now</Link>
    </div>
    </div>
  );
};

export default JobDetails;
