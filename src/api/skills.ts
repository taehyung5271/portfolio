import { supabase } from "./supabase";
import type { SkillRow } from "../types/SkillRow";

export const fetchSkills = async (): Promise<SkillRow[]> => {
  const { data, error } = await supabase
    .from("skills")
    .select(`
      id,
      name,
      category,
      background_color,
      text_color,
      created_at,
      updated_at
    `)
    .order("category", { ascending: true })
    .order("name", { ascending: true });

  if (error) throw error;
  return (data ?? []) as SkillRow[];
};