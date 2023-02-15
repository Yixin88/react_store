import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='errorPage'>
      <img className='dog' src={require("../assets/bulldog.png")} />
      <h1>Oopsie! This page does not excist</h1>
      <NavLink to='/'>Back to home</NavLink>
    </div>
  )
}
