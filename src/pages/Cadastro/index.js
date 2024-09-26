import React, { Component } from "react";
import Layout from "../../components/Layout";
import firebase from "../../Firebase";

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      nome: "",
      sobrenome: "",
      nascimento: "",
    };
    this.gravar = this.gravar.bind(this);
  }

  async gravar() {
    for (const key in this.state) {
      if (this.state[key] === "") {
        alert("Preencha todos os campos");
        return;
      }
    }

    // TODO: Validar dados

    await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then(async (retorno) => {
        await firebase
          .firestore()
          .collection("usuarios")
          .doc(retorno.user.uid)
          .set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            nascimento: this.state.nascimento,
          });

        alert("Usuário cadastrado com sucesso");

        for (const key in this.state) {
          this.setState({ [key]: "" });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Layout>
        <h2>CADASTRO</h2>
        <div className="divCentralizada">
          <div className="containerCadastro">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={this.state.senha}
                onChange={(e) => this.setState({ senha: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={this.state.nome}
                onChange={(e) => this.setState({ nome: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="sobrenome">Sobrenome:</label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={this.state.sobrenome}
                onChange={(e) => this.setState({ sobrenome: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="nascimento">Data de Nascimento:</label>
              <input
                type="date"
                id="nascimento"
                name="nascimento"
                value={this.state.nascimento}
                onChange={(e) => this.setState({ nascimento: e.target.value })}
              />
            </div>
            <button onClick={this.gravar}>Cadastrar</button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Cadastro;
