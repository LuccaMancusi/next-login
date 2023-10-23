import { useState } from "react";
import LoginCard from "../../src/components/login/loginCard";
import styles from "../../styles/Login.module.css";
import Input from "../../src/components/input/input";
import Button from "../../src/components/button/button";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      console.log(response.status);
      if (response.status !== 201) throw new Error(json);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.background}>
      <LoginCard title={"Cadastre-se agora"}>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <Input
            type="text"
            placeholder="Digite seu nome"
            required
            value={formData.name}
            onChange={(e) => {
              handleFormEdit(e, "name");
            }}
          ></Input>
          <Input
            type="email"
            placeholder="Digite seu email"
            required
            value={formData.email}
            onChange={(e) => {
              handleFormEdit(e, "email");
            }}
          ></Input>
          <Input
            type="password"
            placeholder="Digite sua senha"
            required
            value={formData.password}
            onChange={(e) => {
              handleFormEdit(e, "password");
            }}
          ></Input>
          <Button>Cadastrar</Button>
          {error && <p className={styles.error}>{error}</p>}
          <Link href="/login">Já possui uma conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
