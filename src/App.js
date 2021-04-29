import React, {useState, useEffect} from "react"
import './App.css';

 function App(){
   
   return(
 <div className= "App">
      <div className="card">
        <h2 className="title"><i className = "fa fa-cloud" > </i>weather App</h2>
        <div className="search-form"/>
          <input type="text" placeholder="city Name"/>
      
          <button type="button" onClick>search</button>
        
        </div>
           <div className="main-container"/> 
              <h4>weather condition</h4>
             <div className="weather-icon">
             <i className="fa fa-sun"></i>
          <div>
          <h3>sunny</h3>
          <div className="temperature">
            <h1>25&deg;C</h1>
            </div>
            <div className="location">
              <h3><i className="fa fa-street-view"></i> lagos, Nigeria.</h3>
            </div>
            <div className="Temperature-range">
              <h6>Min:25&deg;C ||28&deg;C || Humidity</h6>

            </div>

       </div>
       </div>

      </div>
   )
 }
export default App
