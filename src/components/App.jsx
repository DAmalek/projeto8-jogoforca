import palavras from "./palavras";

import forca from './assets/forca0.png'

import "../css/reset.css"
import "../css/style.css"
import React from "react";


let arrP;
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function App() {
  const [clicked, setClicked] = React.useState(false)
  const [novaPalavra, setNovaPalavra] = React.useState("")
  
  function escolherPalavra(){
    
    let escolha = palavras[Math.floor(Math.random() * palavras.length)];
    
    escolha = ([...escolha])
    setNovaPalavra(escolha)
    console.log(novaPalavra)
  }

  function jogo(props){
    console.log(props)
  }
 
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="image">
            <img src={forca} alt="forca" />
          </div>
          <div className="lateral">
            <button onClick={()=>escolherPalavra()}>Escolher Palavra</button>
            <div className="resposta">
              <strong>{novaPalavra}</strong>
            </div>
          </div>
        </div>
        <div className="alfabeto">
          {alfabeto.map((value, index)=>(<button key={index} onClick={()=>jogo(value)}>{value}</button>))}
        </div>
        <div className="input">
          <h5>Ja sei a palavra!!</h5>
          <input type="text" />
          <button>Chutar</button>
        </div>
      </div>
    </>
  );

}





export default App;
