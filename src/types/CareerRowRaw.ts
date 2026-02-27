import type { CareerDescription } from "./CareerDescription";
import type { Company } from "./Company";
import type { Skill } from "./Skill"
export type CareerRowRaw = {
  id: number;
  position: string | null;
  start_date: string;
  end_date: string | null;
  companies: Company | Company[] | null;
  career_descriptions: CareerDescription[] | null;
  career_skills: { skills: Skill | Skill[] | null }[] | null;
};