import React,{useContext} from 'react'
import '../styles/friendslist.css'
import { FriendsContext } from '../contexts/FriendsContext'


function FriendsList() {
  const {friends} = useContext(FriendsContext);

  return (
    <div className='friends--list--container'>
         <h1 className="heading--one">FRIENDS LIST</h1>
        
        <ul className='friends--list'>
          {friends.map((friend)=>{
            return ( <li key={friend.id}>-{friend.name}-{friend.email}</li> ) 
          })}
        </ul>

    </div>
  )
}

export default FriendsList