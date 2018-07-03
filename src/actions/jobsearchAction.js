import { ADD_JOB_SEARCH } from "../constants/jobsearchType";

export const addJobSearch = jobsearch => ({
  type: ADD_JOB_SEARCH,
  payload: jobsearch
});
