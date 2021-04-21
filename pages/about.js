import Meta from "../components/Meta";
import styles from "../styles/About.module.scss";
const about = () => {
  return (
    <div>
      <Meta title="About" />
      <h1 className={styles.heading}>About</h1>
      <div className={styles.card}>
        <p className={styles.description}>
          A Nexj.js application with module.scss for exploring the techniques
          with SSR: Server Side Rendering, SSG: Static Site Generation and
          automatically scoped scss.
        </p>
      </div>
    </div>
  );
};

export default about;
