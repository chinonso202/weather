import axios from "axios";
import React, { useState, useEffect } from "react";
export default app;

const GitHub = () => {

            const [user, setUser] = useState([]);
            
          
            const url="https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=729d27782e2c2ed57146455e81758dbb"
            
             const getData = async (url) => {
              const res = await axios.get(url);
              setUser(res.data);
              console.log(response);
             

        }