export type SkillCategory = "BACKEND" | "FRONTEND" | "DEV_OPS" | "LANGUAGE";

export interface SkillRow {
  id: number;
  name: string;
  category: SkillCategory;
  background_color: string | null;
  text_color: string | null;
  created_at?: string;
  updated_at?: string;
}