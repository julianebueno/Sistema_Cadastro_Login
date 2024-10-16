import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      nascimento: "",
    };
  }

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged(async (usuario) => {
      if (usuario) {
        var uid = usuario.uid;
        await firebase
          .firestore()
          .collection("usuarios")
          .doc(uid)
          .get()
          .then((retorno) => {
            this.setState({
              nome: retorno.data().nome,
              sobrenome: retorno.data().sobrenome,
              nascimento: retorno.data().nascimento,
            });
          });
      }
    });
  }

  deslogar() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Usuário deslogado com sucesso");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Layout>
        <h2>PRINCIPAL</h2>
        <div className="divCentralizada">
          <p className="saudacaoPrincipal">Seja bem-vindo(a) à página principal!</p>
          <div className="containerPrincipal">
            {this.state.nome &&
              this.state.sobrenome &&
              this.state.nascimento && (
                <>
                  <p>
                    Você está logado como {this.state.nome}{" "}
                    {this.state.sobrenome}
                  </p>
                  <p>Nascimento: {this.state.nascimento}</p>
                  <button onClick={this.deslogar}>Deslogar</button>
                </>
              )}
            {!this.state.nome &&
              !this.state.sobrenome &&
              !this.state.nascimento && (
                <p>
                  Faça
                  <Link to="/cadastro"> Cadastro</Link> ou
                  <Link to="/login"> Login</Link> para acessar seus dados
                </p>
              )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Principal;
