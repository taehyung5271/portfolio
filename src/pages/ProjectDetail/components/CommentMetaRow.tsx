import styles from "./CommentMetaRow.module.css";

interface Props {
  commentCount: number;
  likeCount: number;
  liked?: boolean;
  isLoading?: boolean;
  onToggleLike?: () => void;
}

const CommentMetaRow = ({
  commentCount,
  likeCount,
  liked,
  isLoading,
  onToggleLike,
}: Props) => {
  return (
    <div className={styles.row}>
      <div className={styles.item}>💬 댓글 {commentCount}개</div>
      <div className={[styles.item, liked ? styles.likeWrapperActive : styles.likeWrapper].join(" ")}>
        <button
          className={[styles.likeButton, liked ? styles.liked : ""].join(" ")}
          type="button"
          onClick={onToggleLike}
          disabled={isLoading}
          aria-pressed={liked ? "true" : "false"}
        >
          <span aria-hidden>❤️ </span>
          <span>{likeCount}개</span>
        </button>
      </div>
    </div>
  );
};

export default CommentMetaRow;
