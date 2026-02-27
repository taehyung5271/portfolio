import type { CareerDescription } from "./CareerDescription";
import type { Company } from "./Company";
import type { Skill } from "./Skill";

export type CareerUI = {
  id: number;
  position: string | null;
  startDate: string;
  endDate: string | null;
  company: Company | null;
  descriptions: CareerDescription[];
  skills: Skill[];
};