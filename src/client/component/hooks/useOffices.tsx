/* istanbul ignore file */
// TODO: use MSW
import { useQuery } from "react-query";
import { GREENHOUSE_INTERCOM } from "../../../constants";

const fetchGreenhouseOffices = async () => {
  const res = await fetch(`${GREENHOUSE_INTERCOM}/offices`);
  return res.json();
}

export default function useOffices() {
  return useQuery("offices", fetchGreenhouseOffices);
}
