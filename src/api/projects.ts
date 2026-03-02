import { supabase } from "./supabase";
import type { ProjectRowRaw } from "../types/ProjectRow";

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
    repo_link,
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

// slug로 프로젝트 1개 + 관계 데이터(댓글/스킬/디테일) 가져오기
export const fetchProjectBySlug = async (slug: string): Promise<ProjectRowRaw> => {
  const { data, error } = await supabase
    .from("projects")
    .select(`
      id,
      title,
      project_intro,
      member_count,
      start_date,
      end_date,
      service_link,
      repo_link,
      slug,
      md_url,
      logo_url,
      like_count,

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
    `)
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  if (!data) throw new Error("프로젝트를 찾을 수 없습니다.");
  return data as ProjectRowRaw;
};
