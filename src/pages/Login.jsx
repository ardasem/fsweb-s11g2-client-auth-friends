import React from 'react'
import Header from '../layout/Header'
import Form from '../components/Form'

function Login() {
  return (
    <div>
        <Form Heading={'LOGIN'} InputOneHeading={'USERNAME'} InputTwoHeading={'PASSWORD'} ButtonFunction={'login'}/>
    </div>
  )
}

export default Login