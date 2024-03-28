import { useState } from 'react'


function App() {
  const [color, setColor] = useState("aqua")

  return (
    <>
<div className="w-full h-screen duration-200 text-bold text-center decoration-auto font-black text-white inline-block align-text-bottom flex flex-col justify-center items-center text-4xl" 
style={{backgroundColor: color}}
 > COLORS OF RAINBOW<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button
    onClick={()=>setColor("red")}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "red"}}
    >Red</button>
    <button
    onClick={()=>setColor("orange")}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "orange"}}
    >Orange</button>
    <button
    onClick={()=>setColor("yellow")}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "yellow"}}
    >Yellow</button>
    <button
    onClick={()=>setColor("green")}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "green"}}
    >Green</button>
    <button
    onClick={()=>setColor("blue")}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "blue"}}
    >Blue</button>
    <button
    onClick={()=>setColor("indigo")}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "indigo"}}
    >Indigo</button>
    <button
    onClick={()=>setColor("violet")}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "violet"}}
    >Violet</button>
  </div>
  </div>
  <img src="https://www.whitehill.herts.sch.uk/wp-content/uploads/2019/10/rainbow.jpg" alt="rainbow" width="500" height="300" />
</div>

</>
  )
}

export default App
