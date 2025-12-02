import React from 'react'
import styles from "@/app/styles/components/global/_templatePage.module.scss"

const TemplatePage = ({page = "default", children}) => {
  return (
    <main className={styles.main}>
        {children}
    </main>
  )
}

export default TemplatePage