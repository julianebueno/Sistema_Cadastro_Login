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
      .then(() => {
        // if (!firebase.auth().currentUser.emailVerified) {
        //   alert("Usuário não está cadastrado");
        //   firebase.auth().signOut();
        //   return;
        // }
        alert("Usuário logado com sucesso");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/internal-error") {
          alert("Usuário não encontrado");
        } else if (error.code === "auth/invalid-email") {
          alert("Email inválido");
        } else { 
          alert("Erro ao logar usuário");
        }
      });
  }

  render() {
    return (
      <Layout>
        <h2>LOGIN</h2>
        <div className="divCentralizada">
          <div className="containerLogin">
            <div>
              <label>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div>
              <label>Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={this.state.senha}
                onChange={(e) => this.setState({ senha: e.target.value })}
              />
            </div>
            <button onClick={this.acessar}>Acessar</button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Login;
