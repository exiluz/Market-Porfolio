import { ReactNode } from "react";
import Skill from "./skill";
import Project from "./project";

export default interface Experience {
  position: string;
  company: string;
  dateStart: string;
  dateEnd: string;
  description: ReactNode;
  skills: Array<Skill>;
  link: string;
  projects?: Array<Project>;
  snippet?: string;
}
