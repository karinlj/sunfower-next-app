import Meta from "../components/Meta";
//installed sass and just renamed the css file to scss
import styles from "../styles/Home.module.scss";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  console.log("articles", articles);
  return (
    <div>
      <Meta title="Home" />
      <h1 className={styles.heading}>Welcome</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

//hämtar här och skickar datan som props till komponenter
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
