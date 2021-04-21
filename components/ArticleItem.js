import styles from "../styles/Article.module.scss";
import Link from "next/Link";

//item still on home route
const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
