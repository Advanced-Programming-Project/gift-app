import {StudentInternship} from "./StudentInternship";

export type Student = {
  id: number,
  promotion: string,
  lastname: string,
  firstname: string,
  email: string,
  studentInternship: StudentInternship[],

  [key: string]: string | number | StudentInternship[],
};
