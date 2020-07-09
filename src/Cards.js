import React from "react";
import './Cards.css';
import { Link} from 'react-router-dom';



  
 

class Cards extends React.Component {
    constructor(props) {
      super(props);
      
    }
    
    render() {
      return(
        
        
      <div className="cards">
            <div className="card">
              <img src={require("./"+ this.props.imgsrc)} className="pic" alt="picture" />
                       <div className="card_info">
                       <Link to={'/Form1/'+this.props.imgsrc} > <button class="colour">{this.props.title}</button></Link>
               </div>
              </div>
               </div>
            );
    }
  }
  
export default Cards;


  