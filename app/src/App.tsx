import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"
import { About } from "./Components/About"
import { Contact } from "./Components/Contact"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { Hero } from "./Components/Hero"
import { Projects } from "./Components/Projects"
import { Service } from "./Components/Services"
import { Skills } from "./Components/Skills"

function App() {
const [loading, setLoading] = useState(true)
const loaderRef = useRef(null)
useEffect(()=>{

  
   gsap.from(loaderRef.current,{
    opacity:0,
    scale:3
   }) 
  setLoading(false)
},[])

  return (<>
    {loading ?  <div>
     <div ref={loaderRef}
     >
      <h1>Jiya Keshwani</h1>
     </div>
      </div> : (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-500 selection:text-white ">
           <div className="fixed top-0 -z-10 h-full w-full "></div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
         <div className=" container mx-auto px-8">
         <Header/>
         <Hero/>
         <About/>
         <Skills/>
         <Service/>
         <Projects/>
       <Contact/>
       <Footer/>
         </div>
    
        </div>

      )
    }
    </>
  )
}

export default App
