import React from "react";
import './App.css';
export default function Decrementador({contador, setContador}) {
   function maisum(){
    let a = parseInt(contador);
    setContador(a-1);
   }
  return (
    <div>
    <button onClick={maisum}>
        Menos um minutinho
    </button>
    </div>
  );
}
