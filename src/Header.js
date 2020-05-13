import React, {Component} from "react";
import "./header.css";


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="titulo">React-Parejas</div>
                <div>
                    <button className="boton-reiciar">Reiniciar</button>
                </div>
                <div className="titulo">
                    intentos:
                </div>
            </header>
        );
    }

}