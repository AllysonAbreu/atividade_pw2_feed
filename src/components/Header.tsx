import styles from './Header.module.css'

import sertaoCompPC from '../assets/image_4.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={sertaoCompPC} alt="SertaoComp logo"/>
      <strong>SertãoComp Feed</strong>
    </header>
  )
}