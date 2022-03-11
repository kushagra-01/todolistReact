import {useState,useEffect} from "react"
const axios = require('axios');


export const Grocery = (e)=>{
    
    useEffect(()=>{
        getData()
    },[])

const [text,setText]= useState("")
const [Grocery,setGrocery]= useState([])
const getData = () =>{
    axios.get("http://localhost:3001/Grocery").then((res)=>{
        setGrocery(res.data ,res.id);
       
    })
}

    return(
        <div>
<input type="text" onChange={(e)=>{
    setText(e.target.value)
}} />
<button onClick={()=>{
fetch("http://localhost:3001/Grocery",{

method: "POST",
body:JSON.stringify({title:text,purchase:true}),
headers:{
    "content-type": "application/json"
},

})
.then(()=>{
    getData();
})

// axios.post('http://localhost:3001/Grocery')
// .then(response => this.setGrocery({title:text,purchase:true}));

}}> Save++++++++++++++++</button>

{Grocery.map((g)=>{return (<>
    <h1>{g.title}</h1>
    <button onClick={()=>{
const del = Grocery.filter((el)=>{return (
    el.g!==g
)})
setGrocery([...del])

// Grocery.filter((el)=>{
//     return( el.id !== id;
    
//     )
//     setGrocery(el.data)


           axios.delete(`http://localhost:3001/Grocery/${g.id}`).then((res)=>{
            setGrocery(res.data);
         
        }).then(()=>{
            getData();
        })
    }}>DELETE</button>
    
    </>
 
)})}


</div>


    )
}