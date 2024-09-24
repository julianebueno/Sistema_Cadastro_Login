import React, { Component } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
