import styles from "../styles/Layout.module.scss";
import Nav from "./Nav";
import Header from "./Header";
import Meta from "./Meta";

//gets imported into app.js to surround all components and pages
//why not directly in app.js??
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
