import { Component } from "react";
import './Compteur.css';

class Compteur extends Component 
{
    constructor(props) {
        super(props);
            this.state = {
                valeur : 0
            }
        }

    btnClickHandler(ajout) {
        this.setState({
        valeur : this.state.valeur+ajout
        }, () => {
            this.props.onValeurChange(ajout);
        })

    }

    render() {
        return (
            <div className = "competeur">
                <p>{this.state.valeur}</p>
                <button onClick={this.btnClickHandler.bind(this,1)}>+1</button>
                <button onClick={this.btnClickHandler.bind(this,-1)}>-1</button>
            </div>
        )
    }   
}

export default Compteur;