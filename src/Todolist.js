import React from 'react';
const Todolist = ({text,del})=>{
  return(
    <div>
      {text.map((item,index)=><div key={index}><h5 style={{color:'yellow'}}>{item} &nbsp;<i className="fa fa-trash-o" onClick={()=>del(index)}>delete</i></h5></div>)}
      </div>
  )
}
export default Todolist;
