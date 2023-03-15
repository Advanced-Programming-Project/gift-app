import {Student} from "./Student";

export type AuthenticationResponse = {
  email: string,
  token: string
  studentList: Student[],
}
