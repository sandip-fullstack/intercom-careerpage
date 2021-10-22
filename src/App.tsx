import React from "react";
import "./App.css";
import Header from "./client/component/header";
import HeroHeading from "./client/component/hero-heading";
import LocationWrapper from "./client/component/location-wrapper";
import JobListingWrapper from "./client/component/job-listing-wrapper";
import Loader from "./client/common/loader";
import useOffices from "./client/component/hooks/useOffices";

const App: React.FC = () => {
  const { isFetching, data, error } = useOffices();
  if (error) {
    return <h3>Error while loading</h3>
  }
  return (
    <main>
      <Header />
      <div className="main-app">
        <HeroHeading/>
        {
          isFetching ? <div className="flex-center"><Loader /></div> :
          <>
            <section className="section-cards">
              <LocationWrapper offices={data.offices}/>
            </section>
            <section className="main-wrapper">
              <JobListingWrapper offices={data.offices}/>
            </section>
          </>
        }
      </div>
    </main>
  );
};

export default App;
