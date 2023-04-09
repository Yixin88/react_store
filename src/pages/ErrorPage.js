import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <main className='errorPage subpageMain'>
      <img className='dog' src={require("../assets/bulldog.png")} alt='errordog' />
      <h1>Oopsie! This page does not exist</h1>
      <NavLink to='/'>Back to home</NavLink>
    </main>
  )
}
