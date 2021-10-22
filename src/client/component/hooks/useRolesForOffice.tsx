/* istanbul ignore file */
// TODO: use MSW
import { useQuery } from "react-query";
import { CACHE_TIME, GREENHOUSE_INTERCOM } from "../../../constants";

const fetchJobsForAnOffice = async (locationId: number | null) => {
  const res = await fetch(`${GREENHOUSE_INTERCOM}/offices/${locationId}`);
  return res.json();
}

export default function useRolesForOffice(locationId: number | null) {
  return useQuery(["jobs", locationId], () => fetchJobsForAnOffice(locationId), {
    staleTime: Infinity, cacheTime: CACHE_TIME
  });
}
