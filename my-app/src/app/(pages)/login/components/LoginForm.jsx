"use client";
import axios from "axios";
import React, { useRef } from "react";
import { Toaster, toast } from "sonner";

export const LoginForm = () => {
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);

  const changeLogin = (e) => {
    e.preventDefault();

    const login = inputLogin.current.value;
    const password = inputPassword.current.value;
    console.log(login, password);

    axios
      .post(
        "/api/login",
        { login, password },
        {
          withCredentials: false,
        }
      )
      .then(() => {
        toast.success("Авторизация пройдена");
      })
      .catch(() => {
        toast.error("Авторизация не пройдена");
      });
  };

  return (
    <>
      <form
        onSubmit={(e) => changeLogin(e)}
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
          placeholder="логин"
          style={{
            marginBottom: "10px",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          ref={inputPassword}
          type="password"
          placeholder="пароль"
          style={{
            marginBottom: "10px",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
          }}
        >
          Вход
        </button>
      </form>
      
      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "16px" }}>
      Еще нет аккаунта? <a href="/registration" style={{ color: "#007bff", textDecoration: "underline", }}>Зарегистрироваться</a>
    </p>
    <p style={{ textAlign: "center", marginTop: "20px", fontSize: "16px" }}>
      Забыли пароль? <a href="/recovery" style={{ color: "#007bff", textDecoration: "underline", }}>Восстановить</a>
    </p>


      <Toaster position="bottom-center" expand={false} richColors />
    </>
  );
};  