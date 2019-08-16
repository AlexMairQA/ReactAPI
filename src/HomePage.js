import React, {Component} from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import DisplayCatFact from './DisplayCatFact.js'
import Axios from 'axios';

export default class HomePage extends Component{

state={catFacts:""}

    
    componentDidMount(){
        

        Axios.get('https://cat-fact.herokuapp.com/facts')
        .then(
           response=>{
               let {all}=response.data;
               console.log(all[0]);
               let foo=parseInt(Math.random()*200);
               this.setState({catFacts : all[foo]});
               
           
        })


    }

    newFact=()=>{


    }
    render(){
        return(
            <div>
            <Header headLine="Cat Facts"/>
            <div>
                <DisplayCatFact catFact={this.state.catFacts.text} />
                <br/>


                </div>
                
                <Footer footerText="Cat Facts"/>
                </div>

        )
    }
}