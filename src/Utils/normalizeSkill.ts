import type { SkillRow } from "../types/SkillRow";
import type { SkillUI } from "../types/SkillUI";

export const normalizeSkill = (s: SkillRow): SkillUI => ({
  id: s.id,
  name: s.name,
  category: s.category,
  bgColor: s.background_color ?? "#eee",
  txtColor: s.text_color ?? "#111",
});