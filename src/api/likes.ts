import { supabase } from "./supabase";

export interface LikeRequest {
  projectId: number;
  userKey: string;
}

export const fetchProjectLikeStatus = async ({ projectId, userKey }: LikeRequest) => {
  const { data, error } = await supabase
    .from("project_likes")
    .select("id")
    .eq("project_id", projectId)
    .eq("user_key", userKey)
    .maybeSingle();

  if (error) throw error;
  return Boolean(data);
};

export const createProjectLike = async ({ projectId, userKey }: LikeRequest) => {
  const { error } = await supabase.from("project_likes").insert({ project_id: projectId, user_key: userKey });
  if (error) {
    // Supabase returns conflict error when UNIQUE constraint hits, ignore it
    if (error.message.includes("duplicate") || error.code === "23505") {
      return;
    }
    throw error;
  }
};

export const deleteProjectLike = async ({ projectId, userKey }: LikeRequest) => {
  const { error } = await supabase
    .from("project_likes")
    .delete()
    .eq("project_id", projectId)
    .eq("user_key", userKey);
  if (error) throw error;
};
