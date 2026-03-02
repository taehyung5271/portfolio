import styles from "./MarkdownViewer.module.css";
import ReactMarkdown from "react-markdown";

interface MarkdownViewerProps {
  content: string;
}

const stripFrontMatter = (source: string) => {
  if (!source) return source;
  const trimmed = source.trimStart();
  if (!trimmed.startsWith("---")) return source;
  const match = trimmed.match(/^---[\s\S]*?---\s*/);
  if (!match) return source;
  return trimmed.slice(match[0].length);
};

const MarkdownViewer = ({ content }: MarkdownViewerProps) => {
  const normalized = stripFrontMatter(content);
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.markdown}>
          <ReactMarkdown>{normalized}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownViewer;
