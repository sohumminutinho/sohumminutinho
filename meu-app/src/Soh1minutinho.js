import React from "react";
import './App.css';
export default function Soh1minutinho({contador, horas}) {
  return (
    <div className="center">
      {contador==0 && horas==0?<p>Calma pessoal</p>:<p></p>}
      {horas>0?<p>Só {horas} horinhas pessoal </p>:<p></p>}
      {contador==1?<p>Só {contador} minutinho</p>:<p></p>}
      {contador>1?<p>Só {contador} minutinhos</p>:<p></p>}
    </div>
  );
}

