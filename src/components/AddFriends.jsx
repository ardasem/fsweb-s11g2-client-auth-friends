import React from 'react'
import Header from '../layout/Header'
import Form from './Form'
import { useContext } from 'react'
import { FriendsContext } from '../contexts/FriendsContext'

function AddFriends() {
  const {addFriend} = useContext(FriendsContext)
  return (
    <div>
      <Header />
      <Form Heading={'ADD FRIEND'} InputOneHeading={'FRIEND NAME'} InputTwoHeading={'FRIEND EMAIL'} ButtonFunction={'addFriend'}/>
    </div>
  )
}

export default AddFriends