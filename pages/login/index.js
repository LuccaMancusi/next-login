import LoginCard from "../../src/components/login/loginCard";
import styles from "../../styles/Login.module.css";

export default function Login() {
  return (
    <div className={styles.background}>
      <LoginCard title={"Login"}></LoginCard>
    </div>
  );
}
