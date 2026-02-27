import { supabase } from "./supabase";

export interface CreateCommentInput {
  projectId: number;
  userNickname: string;
  content: string;
}

export const createComment = async ({ projectId, userNickname, content }: CreateCommentInput) => {
  const { error } = await supabase.from("comments").insert([
    {
      project_id: projectId,
      user_nickname: userNickname,
      content,
    },
  ]);

  if (error) throw error;
};