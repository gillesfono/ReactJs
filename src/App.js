import { Component } from "react";
import Compteur from "./Compteur";


class App extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
      compteurListe : [0],
      total : 0
    }
    this.ajoutCompteur = this.ajoutCompteur.bind(this);
  }

  ajoutCompteur(){
    this.setState({
      compteurListe:  [...this.state.compteurListe,0]
    })
  }

  mettreAjourTotal = (val) => {
    this.setState({
      total: this.state.total+val
    })
  }

  render() {
    return( <div>
      <div>
        <p>Total : {this.state.total}</p>
        <button onClick={this.ajoutCompteur}>Ajouter</button>
      </div>
      {
        this.state.compteurListe.map((e,index) => {
          return <Compteur key={"cpt"+index} onValeurChange={this.mettreAjourTotal}/>
        })
      }
      </div> 
    )
  }
}

export default App;
