import { supabase } from "./supabase";
import type { CareerRowRaw } from "../types/CareerRowRaw";

export const fetchCareers = async (): Promise<CareerRowRaw[]> => {
  const { data, error } = await supabase
    .from("careers")
    .select(
      `
      id,
      position,
      start_date,
      end_date,
      companies:companies!careers_company_id_fkey (
        id,
        name,
        intro,
        logo_url
      ),
      career_descriptions (
        id,
        title,
        detail
      ),
      career_skills (
        skills (
          id,
          name,
          background_color,
          text_color
        )
      )
    `,
    )
    .order("start_date", { ascending: false });

  if (error) throw error;

  return (data ?? []) as unknown as CareerRowRaw[];
};
