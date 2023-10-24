import { getCookie } from "cookies-next";
import { verify } from "../services/user";

export default function Home() {
  return <div>Página Segura - Perfil do Usuário</div>;
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("Authorization", { req, res });
    return {
      props: {},
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};
