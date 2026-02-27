import styles from "./CommentMetaRow.module.css";

interface Props {
  commentCount: number;
  likeCount: number;
}

const CommentMetaRow = ({ commentCount, likeCount }: Props) => {
  return (
    <div className={styles.row}>
      <div className={styles.item}>💬 댓글 {commentCount}개</div>
      <div className={styles.item}>❤️ 좋아요 {likeCount}개</div>
    </div>
  );
};

export default CommentMetaRow;