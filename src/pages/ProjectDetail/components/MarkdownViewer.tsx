import styles from "./MarkdownViewer.module.css";
import ReactMarkdown from "react-markdown";

interface MarkdownViewerProps {
  content: string;
}

const MarkdownViewer = ({ content }: MarkdownViewerProps) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.label}>md 파일</p>
      <div className={styles.box}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownViewer;