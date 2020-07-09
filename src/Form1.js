import React from 'react';
import './Form.css';
import  { Component } from 'react';
import {  Link } from 'react-router-dom';    
import  { useState } from 'react';



function Form1 (props){
    const imgsrc = props.match.params.img;
    // alert( props.match.params.img);
    const [value, setValue] = useState('');
    const handleChange = event => setValue(event.target.value);
    return(
        <>
        <Link to="/inscription"><button class="but"> Go to Home</button></Link>
        <div>
      <label>
       <p>Write in the text box provided to see the text appearing on the template.</p>
       <p>Use the space bar , to align the text.</p>
        <input type="text" value={value} onChange={handleChange} className="align"/>
      </label>
 
      <div className="type">
        {value }
      </div>
      <img src={require("./"+ imgsrc)} className="pict" alt="pic" />
    </div>

            
        
        
        
    </>
        
        
        
    );


}
export default Form1;
