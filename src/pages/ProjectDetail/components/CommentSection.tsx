import styles from "./CommentSection.module.css";
import CommentMetaRow from "./CommentMetaRow";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
interface CommentUI {
    id: number;
    userNickname: string;
    content: string;
    createdAt: string;
}

interface CommentSectionProps {
  projectId: number;
  slug: string; 
  likeCount: number;
  commentCount: number;
  comments: CommentUI[];
  likedByMe?: boolean;
  onToggleLike?: () => void;
  isLikePending?: boolean;
}

const CommentSection = ({
  projectId,
  slug,
  likeCount,
  commentCount,
  comments,
  likedByMe,
  onToggleLike,
  isLikePending,
}: CommentSectionProps) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>댓글</h2>

      <div className={styles.card}>
        <CommentMetaRow
          likeCount={likeCount}
          commentCount={commentCount}
          liked={likedByMe}
          onToggleLike={onToggleLike}
          isLoading={isLikePending}
        />
        <CommentList comments={comments} />
        <CommentForm projectId={projectId} slug={slug} />
      </div>
    </div>
  );
};

export default CommentSection;
