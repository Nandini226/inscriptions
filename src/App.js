import React from "react";
import Cards from './Cards';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import  { Component } from 'react';
import { BrowserRouter,  Switch, Link } from 'react-router-dom';
import Form1 from './Form1';

function App (props){
    return(
        
        <>
        
     <h1>Inscription</h1>
     <div className="layout">
                
     
      <Cards imgsrc='template1.jpg' title="Formal" />
      <Cards imgsrc='template2.jpg' title="Wooden" />
      <Cards imgsrc='template3.jpg' title="Wavy"/>
      <Cards imgsrc='template4.jpg' title="Simple"/>
      <Cards imgsrc='template5.jpg'title="Leafy" /></div>
      <div className="layout">
      <Cards imgsrc='template6.jpg' title="Invitation" />
      <Cards imgsrc='template7.jpg' title="Ancient"/>
      <Cards imgsrc='template8.jpg' title="Manucripts"/>
      <Cards imgsrc='template9.jpg' title="Feather"/>
      <Cards imgsrc='template10.jpg'title="Walk Out" /></div>
      <div className="layout">
      <Cards imgsrc='template11.jpg' title="Cloudy"/>
      <Cards imgsrc='template12.jpg' title="Certificate"/>
      <Cards imgsrc='template13.jpg' title="Clipy"/>
      <Cards imgsrc='template14.jpg' title="Graphical"/>
      <Cards imgsrc='template15.jpg'title="Heavens" />

      </div>
      
      
      
      </>
      
        
        
    );

}
export default App;