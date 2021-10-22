import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { formatOfficeName } from "../../utils";
import SearchBar from "../common/searchbar";
import JobListing from "./job-listing";
import useRolesForOffice from "./hooks/useRolesForOffice";
import { Department, Job, Departments, Offices } from "./types";

interface JobListingWrapperProps {
  offices: Offices
}

const formattedJobsWithMatched = (data: Departments, searchedText: string) => {
  const formattedListWithMatchedJobs = data?.map((department: Department) => {
    return {...department, jobs: department.jobs.filter((job: Job) =>
      job.title.toLowerCase().includes(searchedText.trim().toLowerCase())
    )}
  });
  const onlyMatchedJob = formattedListWithMatchedJobs.filter((department: Department) => department.jobs.length > 0);
  return onlyMatchedJob;
}

const JobListingWrapper: React.FC<JobListingWrapperProps> = ({ offices }) => {

  const [ jobList, setJobList] = useState<Departments>(offices[0].departments);
  const [ location, setLocation ] = useState<string | null>(null);
  const [ filteredJobList, setFilteredJobList ] = useState<Departments>([]);
  const [ searchedInput, setSearchedInput ] = useState<string>("");
  const [ locationId, setLocationId ] = useState<number>(offices[0].id);

  const onHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedValue = e.target.value;
    setSearchedInput(searchedValue);
    if (searchedValue === "") {
      setFilteredJobList(jobList);
    } else{
      const matchedJobs = formattedJobsWithMatched(jobList, searchedValue);
      setFilteredJobList(matchedJobs);
    }
  }

  const { isFetching, data, error } = useRolesForOffice(locationId);

  useEffect(() => {
    if (data && data.departments) {
      if (searchedInput.length > 1) {
        const matchedJobs = formattedJobsWithMatched(data.departments, searchedInput)
        setFilteredJobList(matchedJobs);
      }
      setJobList(data.departments)
    }
  }, [locationId, data, searchedInput])
  return (
    <div>
      <div className="bold-text roles-header">Open Roles</div>
      <div className="listing-filter">
        <ul className="listing-location" aria-label="listing-location">
        {
            offices.map(({id, name, location}) => {
              const officeName = formatOfficeName(name);
              return (
                id !== 0 &&
                <li key={id} className={classnames({
                    "active": id === locationId
                    })
                  }
                  onClick={() => {
                    setLocation(location);
                    setLocationId(id)}
                  }
                >
                  {officeName.toUpperCase()}
                </li> )
            })
          }
        </ul>
        <div>
          <SearchBar handleSearch={onHandleSearch} searchedValue={searchedInput}/>
        </div>
      </div>
      {
        error ? 
        <h3 className="center-div">Something went wrong. Please try again later</h3>
        :
        <JobListing
          jobList={searchedInput.length > 0 ? filteredJobList : jobList}
          location={location}
          isFetching={isFetching}
        />
      }
    </div>
  )
}

export default JobListingWrapper;