import LoginCard from "../../src/components/login/loginCard";
import styles from "../../styles/Login.module.css";
import Input from "../../src/components/input/input";
import Button from "../../src/components/button/button";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.background}>
      <LoginCard title={"Cadastre-se agora"}>
        <form className={styles.form}>
          <Input type="text" placeholder="Digite seu nome"></Input>
          <Input type="text" placeholder="Digite seu email"></Input>
          <Input type="password" placeholder="Digite sua senha"></Input>
          <Button>Cadastrar</Button>
          <Link href="/login">Já possui uma conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
