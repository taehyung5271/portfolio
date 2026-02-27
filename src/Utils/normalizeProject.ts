import type { ProjectRowRaw } from "../types/ProjectRow";
import type { ProjectUI } from "../types/ProjectUI";

export const normalizeProject = (row: ProjectRowRaw): ProjectUI => {
  const detailsArr = Array.isArray(row.project_details)
    ? row.project_details
    : row.project_details
      ? [row.project_details]
      : [];

  const descriptions = detailsArr
    .map((d) => d.summary)
    .filter((s): s is string => Boolean(s && s.trim()));

  const rawSkills =
    row.project_skills?.flatMap((ps) => {
      const s = ps.skills;
      if (!s) return [];
      return Array.isArray(s) ? s : [s];
    }) ?? [];

  const uniqueSkills = Array.from(new Map(rawSkills.map((s) => [s.id, s])).values());

  const comments =
    row.comments?.map((c) => ({
      id: c.id,
      userNickname: c.user_nickname,
      content: c.content,
      createdAt: c.created_at,
    })) ?? [];

  return {
    id: row.id,
    title: row.title,
    projectIntro: row.project_intro ?? "",
    memberCount: row.member_count ?? 0,
    startDate: row.start_date,
    endDate: row.end_date ?? undefined,
    serviceLink: row.service_link ?? undefined,

    slug: row.slug ,
    mdUrl: row.md_url ?? undefined,
    logoUrl: row.logo_url ?? undefined,

    descriptions,

    skills: uniqueSkills.map((s) => ({
      id: s.id,
      name: s.name,
      bgColor: s.background_color ?? "#eee",
      txtColor: s.text_color ?? "#111",
    })),

    comments,
  };
};