import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";
import { LoginForm } from "./components/LoginForm";

export const metadata = {
  title: 'Авторизация',
}

const Log = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Menu />
      </div>

      <div>
        <LoginForm />
      </div>

      <div className={styles.center}>
          Авторизация
      </div>
    </main>
  );
}

export default Log;
