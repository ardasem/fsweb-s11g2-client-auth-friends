import React,{useState} from 'react'
import { createContext } from 'react'


export const LoginContext = createContext();

function LoginProvider({children}) {
    const [loginData,setLoginData] = useState({})

    const loginFunc = (loginCreds)=>{
        const newState = [loginCreds]
        setLoginData(newState);
    }
  return (
 
     <LoginContext.Provider value={{loginData,setLoginData}}>
        {children}
     </LoginContext.Provider>

  )
}

export default LoginProvider;