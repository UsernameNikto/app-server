import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";

export const metadata = {
  title: 'Кабинет',
}
 

export default function Kabinet() {
  return (
    <main className={styles.main}>
    <div className={styles.description}>
        <Menu />
      </div>

    <div className={styles.center}>
       Кабинет
    </div>
  </main>
  );
}
