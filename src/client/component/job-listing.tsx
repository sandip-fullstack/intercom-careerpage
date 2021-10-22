import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Department, Departments, Job, Jobs } from "./types";
import Loader from "../common/loader";
import NoResults from "../common/no-results";

interface JobListingProps {
  jobList: Departments,
  location: string | null,
  isFetching?: boolean
}
interface JobSectionProps {
  job: Job,
  location: string | null
}

const FadeTransition = (props: any) => (
  <CSSTransition
    {...props}
    classNames="fade"
    timeout={{ enter: 800, exit: 800 }}
  />
);

const renderList = (jobListSet: Jobs) => {
  const list = jobListSet.map((job: Job) => {
    return (
      <FadeTransition
        key={job.id}
      >
      <JobSection job={job} location={job.location.name} key={job.id}/>
      </FadeTransition>
    )
  })
  return list;
}

const JobSection: React.FC<JobSectionProps> = ({ job, location }) => {
  return (
    <div className="job">
      <div className="job-title bold-text">
        <span>{job.title}</span>
      </div>
      <div className="job-location">{location}</div>
    </div>
  )
}

const renderJobCategory = (departments: Departments) => {
  const categoriesJob = departments.map((department: Department) => {
    return (
      department.jobs.length > 0 &&
      <div className="job-category" key={department.id}>
        <p className="category-title">{department.name}</p>
        <TransitionGroup>
        {
          renderList(department.jobs)
        }
        </TransitionGroup>
      </div>
    )
  })
  return categoriesJob;
}

const JobListing: React.FC<JobListingProps> = ({ jobList, isFetching }) => {
  if (isFetching) {
    return (
      <div className="flex-center">
        <Loader />
      </div>
    )
  }
  if(jobList?.length === 0) {
    return (<NoResults />)
  }
  return (
    <div className="listings" data-testid="listings">
      {
        renderJobCategory(jobList)
      }
    </div>
  )
}

export default JobListing;
