import LoginCard from "../../src/components/login/loginCard";
import styles from "../../styles/Login.module.css";
import Input from "../../src/components/input/input";
import Button from "../../src/components/button/button";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.background}>
      <LoginCard title={"Entre com a sua conta"}>
        <form className={styles.form}>
          <Input type="text" placeholder="Digite seu email"></Input>
          <Input type="password" placeholder="Digite sua senha"></Input>
          <Button>Entrar</Button>
          <Link href="/register">Não possui conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
