import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Apply = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Applying for Job ${id} with resume: ${resume.name}`);
  };

  return (
    <div>
      <h2>Apply for Job {id}</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Apply;
