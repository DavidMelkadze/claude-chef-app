import { useState } from 'react'
import logo from '../Images/image.png'

export default function Header() {
 
  return (
     <header>
        <img src={logo} />
        <h1>Chef Claude</h1>
     </header>
  )

}