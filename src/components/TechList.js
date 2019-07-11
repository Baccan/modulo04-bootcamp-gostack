import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  // static defaultprops = {
  //   tech: "Oculto"
  // };

  // static propTypes = {}

  // estados para o componente
  state = {
    newTech: "",
    techs: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  /**
    componentDidUpdate(prevProps, prevState) {
      // this.props, this.state
    }
   */
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {}

  // Funções próprias, que não são do react, devem ser arrow functions
  // caso contrário, a função não teria acesso ao this do componente e estado
  handleInputChange = e => {
    // console.log(e.target.value);

    // caso utilizemos:
    /**
     this.state.newTech = e.target.value
     */
    // não funcionaria pois o state é imutável

    // para criar ou alterar estados no react, deve-se usar o setState()
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });

    // console.log(this.state.newTech);
  };

  handleDelete = tech => {
    // console.log(tech);

    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    // console.log(this.state);

    return (
      // div fragment <> </>
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
          {/* <TechItem /> */}
        </ul>
        {/* uma boa prática para inputs é passar o value com o estado, pois se o valor do estado sofrer alterações por outros motivos, ele também será alterado */}
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
