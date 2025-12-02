import React from "react";
import styles from "@/app/styles/components/header/_header.module.scss";
import NavLink from "@/app/components/header/NavLink";

const NAV_LINKS = [
  {
    title: "Accueil",
    slug: "accueil",
    url: "/",
  },
  {
    title: "Élèves",
    slug: "eleves",
    url: "/eleves",
  },
  {
    title: "Gestion",
    slug: "gestion",
    url: "/gestion",
  },
];
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.brand}>Brand</div>
        <nav className={styles.nav}>
          {NAV_LINKS?.map((navLink) => {
            return <NavLink navLink={navLink} key={navLink?.slug} />;
          })}
        </nav>
      </div>
    </div>
  );
};

export default Header;
