import React from "react";

function Header() {
  return (
    <header>
      <a className="linkHeader" href="/">
        Principal
      </a>
      <a className="linkHeader" href="/cadastro">
        Cadastro
      </a>
      <a className="linkHeader" href="/login">
        Login
      </a>
    </header>
  );
}

export default Header;
