import React from "react";
import Layout from "../../components/Layout";

function Principal() {
  return (
    <>
      <Layout>
        <div className="divCentralizada">
          <h2>PRINCIPAL</h2>
          <p>Seja bem-vindo(a) à nossa página principal!</p>
          <p>Faça <a href="/login">Login</a> ou <a href="/cadastro">Cadastro</a> para acessar seus dados</p>
        </div>
      </Layout>
    </>
  );
}

export default Principal;
