import React, {Component} from "react";
import FlipCard from "react-flipcard-2";
import "./carta.css"

export default class Carta extends Component {
    render() {
        return (
            <div className="carta" onClick={this.props.seleccionarCarta}>
                <FlipCard
                flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
                disabled={true}
                >
                    <div className="portada"></div>
                    <div className="contenido">
                        <i className={`fa ${this.props.icono} fa-x5`}></i>
                    </div>
                    </FlipCard>


            </div>
        );
    }

}