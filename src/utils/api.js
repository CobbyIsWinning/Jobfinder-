import axios from "axios";

const API_URL = "https://jobfinder-nodefiles.onrender.com/api/jobs"; 

export const fetchJobs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs", error);
    return [];
  }
};
 