import HeaderGeneric from "@/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";

const Register = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - Registro</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div>
          <HeaderGeneric
            logoUrl="/"
            btnUrl="/login"
            btnContent="Quero fazer parte"
          ></HeaderGeneric>
        </div>
      </main>
    </>
  );
};

export default Register;
