import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const JobDetails = useLoaderData();
  return (
    <div className="job-details">
      <p> <b>Job Title: </b> {JobDetails.title} </p>
      <p> <b>Salary: </b> {JobDetails.salary} </p>
      <p> <b>Job Location: </b> {JobDetails.location} </p>
      <p> <b>Description: </b> {JobDetails.title} </p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:5000/jobs/" + id);
  if (!res.ok) {
    throw new Error(`Job not found`);
  }
  return res.json();
};
