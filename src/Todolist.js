import React from 'react';
const Todolist = ({text,del})=>{
  return(
    <div>
      {text.map((item,index)=><div key={index}><h5 style={{color:'yellow'}}>{item} &nbsp;<button onClick={()=>del(index)}>delete</button></h5></div>)}
      </div>
  )
}
export default Todolist;
