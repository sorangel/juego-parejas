import React, { Component } from "react";
import Header from "./Header";
import Tablero from "./Tablero";
import construirBaraja from "./Utils/construirBaraja";

import "./App.css";

const getEtadoInicial = () => {
  const baraja = construirBaraja();
  return {
    baraja,
    parejaSelecionada: [],
    parejaSeleccionada: [],
    estaComparando: false
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getEtadoInicial();
  }

  render() {
    return (
      <div className="Apps">
        <Header />
        <Tablero
          parejaSeleccionada={this.state.parejaSeleccionada}
          baraja={this.state.baraja}
          seleccionarCarta={carta => this.seleccionarCarta(carta)}
        />
      </div>
    );
  }

  seleccionarCarta(carta) {
    if (
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinada
    ) {
      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];

    this.setState({ parejaSeleccionada });

    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }

  compararPareja(parejaSeleccionada) {
    this.setState({ estaComparando: true });
    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.props.baraja;
      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map(carta => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }

          return { ...carta, fueAdivinada: true };
        });
      }
      this.verificarSiHayGanador(baraja);
      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        numeroDeIntentos: this.state.numeroDeIntentos + 1
      });
    }, 1000);
  }

  verificarSiHayGanador(baraja) {
    baraja.forEach(carta => (carta.fueAdivinada = true));
    if (baraja.filter(carta => !carta.fueAdivinada).length === 0) {
      alert(`ganaste en ${this.state.numeroDeIntentos}intentos!`);
    }
  }
}

export default App;
