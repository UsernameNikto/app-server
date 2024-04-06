import Link from "next/link";

export default function Menu() {
  return (
        <ul>
          <li><Link href={'/'}>Главная</Link></li>
          <li><Link href={'/kabinet'}>Кабинет</Link></li>
          <li><Link href={'/login'}>Авторизация</Link></li>
          <li><Link href={'/registration'}>Регистрация</Link></li>
          <li><Link href={'/recovery'}>Восстановление</Link></li>
        </ul>
  );
}