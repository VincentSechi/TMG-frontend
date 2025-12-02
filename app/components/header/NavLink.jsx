import React from 'react'
import styles from "@/app/styles/components/header/_navLink.module.scss"
import Link from 'next/link'
const NavLink = ({navLink}) => {
  return (
    <Link className={styles.navLink} href={navLink?.url}>{navLink?.title}</Link>
  )
}

export default NavLink