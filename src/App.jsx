
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color,setcolor]=useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-2000  " style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="  flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
          <button onClick={()=>setcolor("red")}className="border-gray-950 outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Red"}}>Red</button> 
          <button onClick={()=>setcolor("green")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}}>Green</button> 
          <button onClick={()=>setcolor("blue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button> 
          <button onClick={()=>setcolor("pink")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}}>Pink</button> 
          <button onClick={()=>setcolor("orange")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button> 
          <button onClick={()=>setcolor("skyblue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"skyblue"}}>Skyblue</button> 
          <button onClick={()=>setcolor("purple")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button> 
          <button onClick={()=>setcolor("tomato")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"tomato"}}>Tomato</button> 
          <button onClick={()=>setcolor("gold")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gold"}}>Gold</button> 
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
