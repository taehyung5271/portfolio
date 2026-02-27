import { useState } from "react";
import styles from "./CommentForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../../../api/comments";

interface Props {
  projectId: number;
  slug: string;
}

const CommentForm = ({ projectId, slug }: Props) => {
  const qc = useQueryClient();
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const nicknameTrim = nickname.trim();
  const contentTrim = content.trim();

  const canSubmit = nickname.trim().length > 0 && content.trim().length > 0;

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () =>
      createComment({
        projectId,
        userNickname: nicknameTrim,
        content: contentTrim,
      }),
    onSuccess: async () => {
      setContent(""); // 닉넴은 유지
      //프로젝트 상세 다시 불러오기
      await qc.invalidateQueries({ queryKey: ["project", slug] });
    },
  });

  return (
    <div className={styles.wrap}>
      <div className={styles.nickRow}>
        <span className={styles.icon}>👤</span>
        <input
          className={styles.nickInput}
          placeholder="댓글 닉네임 (필수)"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={12}
          disabled={isPending}
        />
      </div>

      <textarea
        className={styles.textarea}
        placeholder="댓글 내용을 작성해주세요. (필수)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={500}
        disabled={isPending}
      />

      {isError && (
        <p style={{ marginTop: 8, color: "crimson", fontSize: 12 }}>
          {(error as Error).message}
        </p>
      )}

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.submit}
          onClick={() => mutate()}
          disabled={!canSubmit || isPending}
        >
          {isPending ? "작성 중..." : "댓글 작성하기"}
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
