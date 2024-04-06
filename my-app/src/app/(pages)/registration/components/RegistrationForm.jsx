// "use client";
// import axios from "axios";
// import React, { useRef } from "react";
// import { Toaster, toast } from "sonner";

// export const RegistrationForm = () => {
//   const inputLogin = useRef();
//   const inputPassword = useRef();
//   const inputEmail = useRef();
//   const confirmPassword = useRef();

//   const registerUser = async () => {
//     const login = inputLogin.current.value;
//     const password = inputPassword.current.value;
//     const email = inputEmail.current.value;
//     const confirmedPassword = confirmPassword.current.value;

//     try {
//       const response = await axios.post("/api/registration", { login, password, email, confirmedPassword });
//       if (response.data.success) {
//         toast.success("Регистрация прошла успешно");
//       } else {
//         toast.error(response.data.error || "Ошибка при регистрации");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       toast.error("Ошибка при регистрации");
//     }
//   };

//   return (
//     <>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           registerUser();
//         }}
//         style={{
//           borderRadius: "10px",
//           backgroundColor: "rgba(240, 240, 240, 0.8)",
//           padding: "20px",
//           display: "inline-block",
//         }}
//       >
//         <input
//           ref={inputLogin}
//           type="text"
//           placeholder="Логин"
//           style={inputStyle}
//         />
//         <input
//           ref={inputPassword}
//           type="password"
//           placeholder="Пароль"
//           style={inputStyle}
//         />
//         <input
//           ref={confirmPassword}
//           type="password"
//           placeholder="Подтвердите пароль"
//           style={inputStyle}
//         />
//         <input
//           ref={inputEmail}
//           type="email"
//           placeholder="Email"
//           style={inputStyle}
//         />
//         <button
//           type="submit"
//           style={buttonStyle}
//         >
//           Зарегистрироваться
//         </button>
//       </form>

//       <Toaster position="bottom-center" expand={false} richColors />
//     </>
//   );
// };

// const inputStyle = {
//   marginBottom: "10px",
//   width: "100%",
//   padding: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
// };

// const buttonStyle = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: "5px",
//   border: "none",
//   backgroundColor: "#007bff",
//   color: "#fff",
// };


"use client";
import axios from "axios";
import React, { useRef } from "react";
import { Toaster, toast } from "sonner";

export const RegistrationForm = () => {
  const inputLogin = useRef();
  const inputPassword = useRef();
  const inputEmail = useRef();
  const confirmPassword = useRef();

  const registerUser = async () => {
    const login = inputLogin.current.value.trim();
    const password = inputPassword.current.value.trim();
    const email = inputEmail.current.value.trim();
    const confirmedPassword = confirmPassword.current.value.trim();

    // Проверка на пустые значения
    if (!login || !password || !email || !confirmedPassword) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    // Проверка на совпадение паролей
    if (password !== confirmedPassword) {
      toast.error("Пароли не совпадают");
      return;
    }

    // Проверка на валидность email-адреса
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Неверный формат email-адреса");
      return;
    }

    try {
      const response = await axios.post("/api/registration", { login, password, email, confirmedPassword });
      if (response.data.success) {
        toast.success("Регистрация прошла успешно");
      } else {
        toast.error(response.data.error || "Ошибка при регистрации");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Ошибка при регистрации");
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerUser();
        }}
        style={{
          borderRadius: "10px",
          backgroundColor: "rgba(240, 240, 240, 0.8)",
          padding: "20px",
          display: "inline-block",
        }}
      >
        <input
          ref={inputLogin}
          type="text"
          placeholder="Логин"
          style={inputStyle}
        />
        <input
          ref={inputPassword}
          type="password"
          placeholder="Пароль"
          style={inputStyle}
        />
        <input
          ref={confirmPassword}
          type="password"
          placeholder="Подтвердите пароль"
          style={inputStyle}
        />
        <input
          ref={inputEmail}
          type="email"
          placeholder="Email"
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
        >
          Зарегистрироваться
        </button>
      </form>
      
      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "16px" }}>
      Есть аккаунт? <a href="/login" style={{ color: "#007bff", textDecoration: "underline", }}>Войти</a>
    </p>


      <Toaster position="bottom-center" expand={false} richColors />
    </>
  );
};

const inputStyle = {
  marginBottom: "10px",
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
};






