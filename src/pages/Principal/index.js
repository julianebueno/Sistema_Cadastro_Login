import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

function Principal() {
  return (
    <>
      <Layout>
        <div className="divCentralizada">
          <h2>PRINCIPAL</h2>
          <p>Seja bem-vindo(a) à nossa página principal!</p>
          <p>
            Faça
            <Link to="/cadastro"> Cadastro</Link> ou
            <Link to="/login"> Login</Link> para acessar seus dados
          </p>
        </div>
      </Layout>
    </>
  );
}

export default Principal;
