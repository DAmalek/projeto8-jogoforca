import palavras from "./palavras";

import forca0 from './assets/forca0.png'
import forca1 from './assets/forca1.png'
import forca2 from './assets/forca2.png'
import forca3 from './assets/forca3.png'
import forca4 from './assets/forca4.png'
import forca5 from './assets/forca5.png'
import forca6  from './assets/forca6.png'

import "../css/reset.css"
import "../css/style.css"
import {useState} from "react";
import React from "react";


let escolha;
let forca = [forca0,forca1,forca2,forca3,forca4,forca5,forca6];
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function App() {
  const [pesquisa, setPesquisa] = useState("")
  const [desativar, setDesativar] = useState(true)
  const [palavraJogo, setPalavraJogo] = useState("")
  const [clicked, setClicked] = useState("")
  const [contador, setContador] = useState(0)
  
  console.log(clicked);
  console.log(palavraJogo);
  
  
  function escolherPalavra(){
    setContador(0);
    escolha = palavras[Math.floor(Math.random() * palavras.length)];
    escolha = ([...escolha])
    setPalavraJogo(escolha)
    setClicked(escolha.map(()=>" _ "))
    setDesativar(false)
  }
  
  function jogo(props){
    escolha = [...clicked]

    
    if(!palavraJogo.includes(props)){
      setContador(contador+1);
      
      if (contador >= 5){
        setPalavraJogo("");
        setDesativar(true);
         
      } 
      return
    } 
    
    palavraJogo.forEach((letra,index)=> {
      if (letra === props ){
        escolha[index] = letra
      }
      
    })
    const aux1 = escolha.join("");
    const aux2 = palavraJogo.join("");
    if (aux1 === aux2){
      setPalavraJogo("");      
      setDesativar(true);
    }

    setClicked(escolha);
    
  }

  function testeInput(){
    if (pesquisa === palavraJogo.join("")){
      setPalavraJogo("");      
      setDesativar(true);
      setClicked(palavraJogo)
      setPesquisa("")
      return
    }
    if (pesquisa !== palavraJogo.join("")){
      setPalavraJogo("");      
      setDesativar(true);
      setContador(6)
      setClicked(palavraJogo)
      setPesquisa("")
      return
    }

  }

  function LetraDoAlfabeto({value, jogo, desativarTodos, palavraJogo}){
    const [desativarClick, setDesativarClick] = useState(false)
    return(
      <button className={(desativarClick || desativarTodos) ? "desativado" : ""} onClick={(desativarClick || desativarTodos) ?  null: ()=>{
        if(!palavraJogo.includes(value)){
          setDesativarClick(true)
        }
        jogo(value)} }>{value}</button>
    )
  }
  
 
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="image">
            <img src={forca[contador]} alt="forca" />
          </div>
          <div className="lateral">
            <button onClick={() => escolherPalavra()}>Escolher Palavra</button>
            <div className="resposta">
              <strong>{clicked}</strong>
            </div>
          </div>
        </div>
        <div className="alfabeto">
          {alfabeto.map((value, index) => (
            <LetraDoAlfabeto
              key={index}
              value={value}
              jogo={jogo}
              desativarTodos={desativar}
              palavraJogo={palavraJogo}
            />
          ))}
        </div>
        <div className="input">
          <h5>Ja sei a palavra!!</h5>
          <input
            type="text"
            onChange={(event) => setPesquisa(event.target.value)}
          />
          <button onClick={()=>testeInput()}>Chutar</button>
        </div>
      </div>
    </>
  );

}





export default App;
