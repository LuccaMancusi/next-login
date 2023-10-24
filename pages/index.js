import { getCookie } from "cookies-next";
import { verifyToken } from "../services/user";

export default function Home() {
  return <div>Página Segura - Perfil do Usuário</div>;
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("Authorization", { req, res });
    if (!token) throw new Error("Token inválido");

    verifyToken(token);

    return {
      props: {},
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
};
