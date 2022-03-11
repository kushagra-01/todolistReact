const { useState } = require("react");
const axios = require('axios');

export const Groceinput =({getData})=>{
    const [Text,SetText] =useState([])
 

    return(
        <div>
            <input type="text" onChange={((e)=>{

              SetText(e.target.value)         

            })} required/>

          <button onClick={()=>{

axios.post('http://localhost:3001/Grocery',{title:Text,purchase:true})
.then(()=>{getData()})
            
            
          }}>add Grocery Data
          </button>
              

        </div>
    )
}