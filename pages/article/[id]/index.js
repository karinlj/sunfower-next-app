//import { useRouter } from "next/router";
import Link from "next/Link";
import Meta from "../../../components/Meta";
import styles from "../../../styles/SingleArticle.module.scss";

const Article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Meta title={article.title} />
      <div className={styles.card}>
        <h1 className={styles.heading}>{article.title} </h1>
        <p className={styles.content}>{article.body}</p>
        <Link href="/">
          <a className={styles.link}> Go back</a>
        </Link>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  console.log("article", article);
  return {
    props: {
      article,
    },
  };
};

//getting paths to all the posts
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  console.log("articles", articles);

  //   const ids = articles.map((article) => {
  //     return article.id;
  //   });
  //get all ids
  const ids = articles.map((article) => article.id);
  console.log("ids", ids);

  //return an o/bject for all ids like: paths:{{id:1}, {id:2}, {id:3}}
  const paths = ids.map((id) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return {
    paths: paths,
    //return 404
    fallback: false,
  };
};

//getServerSideProps()
//feching on every request (slower)
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   console.log("article", article);
//   return {
//     props: {
//       article,
//     },
//   };
// };
export default Article;
