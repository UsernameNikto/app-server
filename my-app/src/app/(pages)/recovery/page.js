import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";
import { RecoveryForm } from "./components/RecoveryForm";

export const metadata = {
  title: 'Восстановление',
}

const Rec = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Menu />
      </div>

      <div>
        <RecoveryForm />
      </div>

      <div className={styles.center}>
          Восстановление
      </div>
    </main>
  );
}

export default Rec;