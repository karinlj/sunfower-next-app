import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Sunflower Next.js App</span>
      </h1>
      <p className={styles.description}>
        Keeping up to date with the latest web technologies.
      </p>
    </div>
  );
};

export default Header;
