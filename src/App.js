import  React, {Component} from 'react';
import './App.css';
import fruta from './assets/melancia-1.jpg'

class info extends Component {

state = {
    
     nome: "Brenda",
     idade: 18,
     comida: "Lasanha",
     musicas: ["Butter", "HOME", "Dynamite" ]
}

    render() {
       return(
           <div className = "info-box">
               <h1>Olá, meu nome é {this.state.nome}.</h1>
               <h2>tenho {this.state.idade} anos</h2>
               <h3>e minha comida favorita é {this.state.comida}.</h3>
               <h2>Minhas músicas preferidas são:</h2> 
              <ul>
                  <li>{this.state.musicas[0]}</li>
                  <li>{this.state.musicas[1]}</li>
                  <li>{this.state.musicas[2]}</li>   
              </ul>
             <h2>Minha fruta favorita!</h2>
              <img src={fruta}/>
           </div>
       );
    }
}

export default info 