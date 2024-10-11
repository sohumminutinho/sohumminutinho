import React from "react";
import './App.css';
import Incrementador from "./Incrementador";
import Soh1minutinho from "./Soh1minutinho";
import Decrementador from "./Decrementador";

function App() {
  const [contador, setContador] = React.useState(0);
  const [horas, setHoras] = React.useState(0);
  return (
    <div className="tudo">
      <Soh1minutinho contador={contador} horas={horas}/>
      <Incrementador contador={contador} setContador={setContador} setHoras={setHoras} horas={horas}/>
      {contador>0 && <Decrementador contador={contador} setContador={setContador}/>}

    </div>
  );
}

export default App;
