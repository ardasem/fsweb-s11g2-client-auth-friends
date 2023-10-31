import React,{useState} from 'react'
import { createContext } from 'react'
import {data} from '../data'

export const FriendsContext = createContext();

function FriendsProvider({children}) {
    const [friends,setFriends] = useState(data)

    const addFriend = (friendObject)=>{
        const newState = [...friends,friendObject]
        setFriends(newState);
    }
  return (
 
     <FriendsContext.Provider value={{friends,addFriend}}>
        {children}
     </FriendsContext.Provider>

  )
}

export default FriendsProvider;