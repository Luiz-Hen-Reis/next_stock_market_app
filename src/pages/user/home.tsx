import { AuthContext } from 'contexts/AuthContext'
import React, { useContext } from 'react'

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>Home of {user.name}</div>
  )
}

