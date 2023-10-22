import LoginCard from "../../src/components/login/loginCard";
import styles from "../../styles/Login.module.css";
export default function Register() {
  return (
    <div className={styles.background}>
      <LoginCard title={"Cadastro"}></LoginCard>
    </div>
  );
}
