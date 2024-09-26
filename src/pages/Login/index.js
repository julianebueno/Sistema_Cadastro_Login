import React, { Component } from "react";
import Layout from "../../components/Layout";
import firebase from "../../Firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
    };
    this.acessar = this.acessar.bind(this);
  }

  async acessar() {
    for (const key in this.state) {
      if (this.state[key] === "") {
        alert("Preencha todos os campos");
        return;
      }
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then((retorno) => {
        if (!retorno.user.emailVerified) {
          alert("Email não cadastrado");
          return;
        }
        alert("Usuário logado com sucesso");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Layout>
        <div className="divCentralizada">
          <h2>LOGIN</h2>
          {/* <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", width: "300px" }}
        > */}
          <label>
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              id="senha"
              name="senha"
              value={this.state.senha}
              onChange={(e) => this.setState({ senha: e.target.value })}
            />
          </label>
          <button onClick={this.acessar}>Acessar</button>
          {/* </form> */}
        </div>
      </Layout>
    );
  }
}

export default Login;
