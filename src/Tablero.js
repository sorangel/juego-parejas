import React, { Component } from "react";
import Carta from "./Carta";
import "./Tablero.css";

export default class Tablero extends Component {
  render() {
    return (
      <div className="tablero">
        {this.props.baraja.map((carta, key) => {
          const ref = this.props.parejaSeleccionada || [];

           //const estaSiendoComparada = this.props.parejaSelecionada.indexOf(carta) > -1;

         const estaSiendoComparada = ref.filter(
            c => c.icono === carta.icono
          );

          if(!!this.props.parejaSeleccionada)

          return (
            <Carta
              key={key}
              icono={carta.icono}
              estaSiendoComparada={!!estaSiendoComparada}
              seleccionarCarta={() => this.props.seleccionarCarta(carta)}
              fueAdivinada={carta.fueAdivinada}
            />
          );
        })}
      </div>
    );
  }
}
