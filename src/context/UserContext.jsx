import React, { createContext, use, useState } from 'react'

export const userDataContext=createContext()

const UserContext = ({children}) => {
  const [user,setUser]=useState({
    email:'',
    fullName:{
      firstname:'',
      lastName:""
    }
  })

  return (
    <userDataContext.Provider value={[user,setUser]}>
        {children}
    </userDataContext.Provider>
  )
}

export default UserContext