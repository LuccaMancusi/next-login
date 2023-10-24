import LoginCard from "../../src/components/login/loginCard";
import styles from "../../styles/Login.module.css";
import Input from "../../src/components/input/input";
import Button from "../../src/components/button/button";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const [error, setError] = useState("");

  function formHandleEdit(event, name) {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (response.status !== 200) throw new Error(json);

      setCookie("Authorization", json);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.background}>
      <LoginCard title={"Entre com a sua conta"}>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <Input
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => {
              formHandleEdit(e, "email");
            }}
            value={formData.email}
            required
          ></Input>
          <Input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => {
              formHandleEdit(e, "password");
            }}
            required
            value={formData.password}
          ></Input>
          <Button>Entrar</Button>
          {error && <p className={styles.error}>{error}</p>}
          <Link href="/register">Não possui conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
