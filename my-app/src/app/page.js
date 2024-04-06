import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";

export const metadata = {
  title: 'Главная',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Menu />
      </div>
      <div className={styles.center}>
       Главная
      </div>
    </main>
  );
}
