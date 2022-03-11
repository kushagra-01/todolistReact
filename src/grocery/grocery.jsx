import { useState,useEffect } from "react";
import { Groceinput} from "./groce.input";
import { Grocelist } from "./groceList";

import axios from "axios";

export const Groce =()=>{


const [groce,setGroce]=useState([])
const [page,Setpage] =useState(1)

    useEffect(()=>{
        getData()
    },[page])

    const getData = () =>{

        axios.get(`http://localhost:3001/Grocery?_limit=2&_page=${page}`).then(res=>{


            setGroce(res.data);
           
        })
    }


    const deleteGroce=(id)=>{

        

    const remove = groce.filter((todo)=>{return todo.id !== id})

    axios.delete(`http://localhost:3001/Grocery/${id}`).then(()=>{
        getData();
    })

    setGroce([...remove])

    
    }

   
return(
    <div>
        <Groceinput getData={getData}/>
        {groce.map((e)=>{return (
        <>
          <Grocelist key={e.id} panther={e} deleteGroce={deleteGroce}/>
        </>
        )
           
        })}

        <br />    <br />    <br />    <br />    <br />    <br />    <br />

             <button onClick={(()=>{Setpage(page+1)})}>Next</button>
            <button onClick={(()=>{Setpage(page-1)})}>previous</button>
    </div>
)

}
