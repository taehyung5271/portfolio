import type { SkillCategory } from "./SkillRow";

export interface SkillUI {
  id: number;
  name: string;
  category: SkillCategory;
  bgColor: string;
  txtColor: string;
}