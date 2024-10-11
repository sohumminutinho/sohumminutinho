import React from "react";
import './App.css';
export default function Incrementador({contador, setContador, horas, setHoras}) {
   function maisum(){
    let a = parseInt(contador);
    let b = parseInt(horas);
    a+=1;
    if(a==60){
      setHoras(b+1);
      a=0;
    }
    setContador(a);
    
   }
  return (
    <div>
    <button onClick={maisum}>
        Mais um minutinho
    </button>
    </div>
  );
}
