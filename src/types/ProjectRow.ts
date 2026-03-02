export interface SkillRow {
  id: number;
  name: string;
  background_color: string | null;
  text_color: string | null;
}

export interface ProjectSkillRow {
  skills: SkillRow | SkillRow[] | null; // Supabase join 결과가 단일/배열로 올 수 있음
}

export interface ProjectDetailRow {
  id: number;
  summary: string;
}

export interface CommentRow {
  id: number;
  user_nickname: string;
  content: string;
  created_at: string;
}

export interface ProjectRowRaw {
  id: number;
  title: string;
  project_intro: string | null;
  member_count: number | null;
  start_date: string;
  end_date: string | null;
  service_link: string | null;
  repo_link?: string | null;

  slug: string;
  md_url: string | null;
  logo_url: string | null;

  project_details?: ProjectDetailRow[] | ProjectDetailRow | null;
  project_skills?: ProjectSkillRow[] | null;
  comments?: CommentRow[] | null;
  like_count?: number | null;
}
