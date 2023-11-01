import React from "react";
import "../styles/form.css";
import { useContext,useState } from "react";
import { FriendsContext } from "../contexts/FriendsContext";
import { LoginContext } from "../contexts/LoginContext";

function Form({Heading,InputOneHeading,InputTwoHeading,ButtonFunction}) {

  const {addFriend,friends} = useContext(FriendsContext);
  const {loginFunc} = useContext(LoginContext);
  const [formState,setFormState] = useState({})

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(ButtonFunction==='addFriend'){
      console.log('addFriend');
      addFriend(formState);
    }else if(ButtonFunction==='login') {
      console.log('login');
      loginFunc(formState);
    }else{
      console.log('none')
    }
  }

  const handleChange =(e)=>{
    if(e.target.id==='input--one' && ButtonFunction==='addFriend'){
      setFormState({...formState,name:e.target.value.toUpperCase(),id:friends.length})
    }else if (e.target.id==='input--two' && ButtonFunction==='addFriend'){
      setFormState({...formState,email:e.target.value.toUpperCase()})
    }else if (e.target.id==='input--one' && ButtonFunction==='login'){
      setFormState({...formState,username:e.target.value})
    }else if(e.target.id==='input--two' && ButtonFunction==='login'){
      setFormState({...formState,password:e.target.value})
    }else{
      console.log('lol')
    }
  }

  return (
    <form className="form--container" action="">
      <h1 className="heading--one">{Heading}</h1>

      <div className="input--container">
       
      <div className="form--input--div">
          <label className="form--input--label">{InputOneHeading}</label>
          <input  id='input--one' className="form--input" type="text" onChange={handleChange} />
        </div>

        <div className="form--input--div">
          <label className="form--input--label">{InputTwoHeading}</label>
          <input id='input--two' className="form--input" type="password" onChange={handleChange}  />
        </div>
      </div>

      <button className="submit--button" onClick={(handleSubmit)}>SUBMIT</button>
    </form>
  );
}

export default Form;
