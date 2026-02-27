import styles from "./CommentList.module.css";

interface CommentListProps {
  comments: { id: number; userNickname: string; content: string; createdAt: string }[];
}

const CommentList = ({ comments }: CommentListProps) => {
  if (comments.length === 0) {
    return <div className={styles.empty}>아직 작성된 댓글이 없어요</div>;
  }

  return (
    <div className={styles.list}>
      {comments.map((c) => (
        <div key={c.id} className={styles.item}>
          <div className={styles.top}>
            <span className={styles.nick}>{c.userNickname}</span>
            <span className={styles.date}>{c.createdAt}</span>
          </div>
          <p className={styles.content}>{c.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;