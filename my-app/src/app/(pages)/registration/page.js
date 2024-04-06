import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";
import { RegistrationForm } from "./components/RegistrationForm";

export const metadata = {
  title: 'Регистрация',
}

const Reg = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Menu />
      </div>

      <div>
        <RegistrationForm />
      </div>

      <div className={styles.center}>
          Регистрация
      </div>
    </main>
  );
}

export default Reg;