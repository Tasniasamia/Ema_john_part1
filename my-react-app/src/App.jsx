import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Shopingcart_sideContainer from './Component/Shopingcart_sideContainer/Shopingcart_sideContainer'

function App() {
const[step,setStep]=useState([]);
useEffect(()=>{
fetch('products.json')
.then(res=>res.json())
.then(data=>setStep(data))
},[])
  return (
    <div className="App">
     <Navbar></Navbar>
     <h1 className='bg-red-100'>Lorem ipsum dolor sit amet.</h1>
     {
      step.map(index=><Shopingcart_sideContainer {...index} key={index.id}></Shopingcart_sideContainer>)
     }
     
    </div>
  )
}

export default App
