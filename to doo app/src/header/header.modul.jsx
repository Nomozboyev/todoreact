import { useRef } from "react";
import {v4 as uuid} from 'uuid'
export function Header({setallToDo}){

    let inputRef= useRef()
    let renderToDo=(evt)=>{
        evt.preventDefault()
        let textToDo=inputRef.current.value;
        let newToDo={
            id:uuid(),
            nameToDo:textToDo
        }
       setallToDo((prev)=>[...prev,newToDo])
       inputRef.current.value=null
    }
    
return  <>
<div className="container">
<h1 className="heading m-4 text-center">Too Doo</h1>
<div className="row">
    <form className=" w-50 mx-auto  mb-5 d-sm-flex jsForm  col-sm-6 col-md-8 col-lg-10 " onSubmit={renderToDo}>
        <input ref={inputRef} type="text" className="form-control jsInput" placeholder="Ma'lumotni kiriting " required autoFocus/>
      <button className="btn btn-success ms-2 col-sm-6 col-md-4 col-lg-2 ">Create</button>
  </form>
   </div>
</div>
</>
}