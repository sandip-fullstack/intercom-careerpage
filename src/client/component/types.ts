export type Compliance = {
  type: string;
  requires_consent: boolean;
  retention_period: null;
}

export type Job = {
  absolute_url: string;
  data_compliance: Array<Compliance>;
  internal_job_id: number;
  location: {
    name: string;
  };
  metadata: null;
  id: string;
  updated_at: string;
  requisition_id: null;
  title: string
}

export type Jobs = Array<Job>;

export type Department = {
  id: number,
  name: string;
  parent_id: number;
  child_ids: Array<number>;
  jobs: Jobs
}

export type Departments = Array<Department>;

export type Office = {
  id: number;
  name: string;
  location: string;
  parent_id: null;
  child_ids: Array<number>;
  departments: Departments;
}

export type Offices = Array<Office>;
