import React,{useState} from 'react'
import { createContext } from 'react'
import axios from 'axios';


export const LoginContext = createContext();

function LoginProvider({children,...rest}) {
    const [loginData,setLoginData] = useState({})

  const loginFunc = (loginCreds)=>{
        axios.post('http://localhost:9000/api/login', loginCreds)
      .then(function (response) {
        setLoginData(response);
        console.log(response)
        localStorage.setItem("token", response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
     
    }

  return (
 
     <LoginContext.Provider value={{loginData,setLoginData,loginFunc}}>
        {children}
     </LoginContext.Provider>

  )
}

export default LoginProvider;