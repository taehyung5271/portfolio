import { supabase } from "./supabase";
import type { ProjectRowRaw } from "../Types/ProjectRow";

export const fetchProjects = async (): Promise<ProjectRowRaw[]> => {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
    id,
    title,
    project_intro,
    member_count,
    start_date,
    end_date,
    service_link,
    slug,
    md_url,
    logo_url,

    project_details (
      id,
      summary
    ),

    project_skills (
      skills (
        id,
        name,
        background_color,
        text_color
      )
    ),

    comments (
      id,
      user_nickname,
      content,
      created_at
    )
  `,
    )
    .order("start_date", { ascending: false });

  if (error) throw error;
  return (data ?? []) as unknown as ProjectRowRaw[];
};
