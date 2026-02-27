import type { CareerRowRaw } from "../Types/CareerRowRaw";
import type { CareerUI } from "../Types/CareerUI";

export const normalizeCareer = (row: CareerRowRaw): CareerUI => {
  // companies가 배열/객체 둘 다 올 수 있으니 방어
  const company =
    Array.isArray(row.companies)
      ? row.companies[0] ?? null
      : row.companies ?? null;

  // skills도 배열/객체 둘 다 올 수 있으니 방어
  const skills =
    row.career_skills?.flatMap((cs) => {
      const s = cs.skills;
      if (!s) return [];
      return Array.isArray(s) ? s : [s];
    }) ?? [];

  // 중복 제거
  const uniqueSkills = Array.from(
    new Map(skills.map((s) => [s.id, s])).values(),
  );

  return {
    id: row.id,
    position: row.position,
    startDate: row.start_date,
    endDate: row.end_date,
    company,
    descriptions: row.career_descriptions ?? [],
    skills: uniqueSkills,
  };
};