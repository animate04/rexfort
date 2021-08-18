import React from "react";
import "./NomeCompleto.css";

function NomeCompleto(props) {
  const { nomeCompleto, nomeSobrenome, className } = props;

  return (
    <div className={`nome-completo-2 ${className || ""}`}>
      <div className="nome-completo-3 manrope-semi-bold-black-14px">{nomeCompleto}</div>
      <div className="overlap-group-1">
        <div className="nome-sobrenome manrope-normal-silver-16px">{nomeSobrenome}</div>
      </div>
    </div>
  );
}

export default NomeCompleto;
