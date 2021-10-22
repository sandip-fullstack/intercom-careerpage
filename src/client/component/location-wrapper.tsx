import React from "react";
import { OFFICE_MAPPER } from "../../constants";
import { formatOfficeName } from "../../utils";
import Card from "../common/card";
import OfficeLocation from "./office-location";
import OfficeLocationHeader from "./office-location-header";
import { Offices } from "./types";

interface LocationWrapperProps {
  offices: Offices
}

const LocationWrapper: React.FC<LocationWrapperProps> = ({ offices }) => {
  return (
    <div>
      <Card>
        <OfficeLocationHeader/>
        <ul className="content" aria-label="location-content">
          {
            offices.map(({id, name}) => {
              const officeName = formatOfficeName(name);
              return (
                id !== 0 &&
                <li key={id}>
                  <OfficeLocation 
                    assetURL={OFFICE_MAPPER[officeName]?.assetURL}
                    name={officeName}
                    description={OFFICE_MAPPER[officeName]?.description}
                    imageAlt={OFFICE_MAPPER[officeName]?.imageAlt}
                  />
                </li>)
            })
          }
        </ul>
      </Card>
    </div>
  )
}

export default LocationWrapper;