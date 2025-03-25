import React, { useEffect, useState } from "react";
import { fetchJobs } from "../utils/api";
import JobList from "../components/JobList";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Home;
