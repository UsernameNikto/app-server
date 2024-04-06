"use client";
import axios from "axios";
import React, { useRef } from "react";
import { Toaster, toast } from "sonner";

export const RecoveryForm = () => {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const recoverPassword = async (e) => {
    e.preventDefault();

    const email = inputEmail.current.value;
    const newPassword = inputPassword.current.value;

    if (!email || !newPassword) {
      toast.error("Пожалуйста, заполните все поля.");
      return;
    }

    // Проверка длины имени пользователя (части перед @)
    const username = email.split('@')[0];
    if (username.length < 3) {
      toast.error("Ошибка восстановления пароля");
      return;
    }

    // Проверка наличия специальных символов в пароле
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

    // Проверка длины пароля
    const isPasswordValid = newPassword.length >= 6;

    if (!isPasswordValid || !hasSpecialChars) {
      toast.error("Пароль должен содержать не менее 6 символов и хотя бы один специальный символ.");
      return;
    }

    try {
      const response = await axios.post(
        "/api/recovery",
        { email, newPassword },
        { withCredentials: false }
      );

      if (response.data.success) {
        toast.success("Запрос на восстановление пароля отправлен (PS. Пароль восстановлен)");
      } else {
        toast.error(response.data.message || "Не удалось отправить запрос на восстановление пароля");
      }
    } catch (error) {
      console.error("Ошибка восстановления пароля:", error);
      toast.error("Не удалось отправить запрос на восстановление пароля. Пожалуйста, проверьте ваше интернет-соединение и повторите попытку.");
    }
  };

  return (
    <>
      <form
        onSubmit={recoverPassword}
        style={{
          borderRadius: "10px",
          backgroundColor: "rgba(240, 240, 240, 0.8)",
          padding: "20px",
          display: "inline-block",
        }}
      >
        <input
          ref={inputEmail}
          type="email"
          placeholder="Email"
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
          placeholder="Новый"
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
          Восстановить пароль
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "16px" }}>
       <a href="/login" style={{ color: "#007bff", textDecoration: "underline", }}>Войти аккаунт</a>
    </p>

      <Toaster position="bottom-center" expand={false} richColors />
    </>
  );
};






