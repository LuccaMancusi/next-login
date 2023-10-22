import styles from "./loginCard.module.css";

export default function LoginCard({ children, title }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      {children}
    </div>
  );
}
