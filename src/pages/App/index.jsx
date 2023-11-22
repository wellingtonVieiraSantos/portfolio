import NavBar from "../../components/NavBar"
import About from '../../components/About'
import Portfolio from '../../components/Portfolio'
import Landing from '../../components/Landing'
import Contact from "../../components/Contact"
import RespMenu from "../../components/RespMenu"

import { SlArrowUp } from "react-icons/sl";

import { useEffect, useRef, useState } from "react"

const App = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isCopy, setIsCopy] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const text = useRef(null)

  useEffect(()=>{
    const scroll = () => {
      if(window.scrollY > 300) setShowButton(true)
      else setShowButton(false)
    }
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  })

  const handleMenu = () => {
    setIsOpen(prevState => !prevState)
    console.log('testando');
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text.current.textContent)
    console.log(text.current.textContent);
    setIsCopy(true)
    setTimeout(() => {
      setIsCopy(false)
    }, 2000);
  }

  const handleScroll = () =>{
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }

  return (
    <div className=" bg-slate-900 flex flex-col">
      <NavBar handleMenu={handleMenu} isOpen={isOpen}/>
      {isOpen ?
        <RespMenu handleMenu={handleMenu}/> :
        <main className="flex flex-col">
          <Landing/>
          <About/>
          <Portfolio/>
          <Contact handleCopy={handleCopy} text={text} isCopy={isCopy}/>
          <div className='h-10 bg-slate-900 flex justify-center items-center text-sm text-slate-200'>Created by Ton</div>
          {showButton &&
            <button onClick={handleScroll} className="bg-transparent w-12 h-12 rounded-full fixed right-3 bottom-4 text-secondary border
            lg:right-10 lg:bottom-10 flex items-center justify-center">
              <SlArrowUp  className="text-2xl"/>
          </button>
          }
        </main>
      }
    </div>
  )
}

export default App
