import NavBar from "../../components/NavBar"
import About from '../../components/About'
import Portfolio from '../../components/Portfolio'
import Landing from '../../components/Landing'
import Contact from "../../components/Contact"
import RespMenu from "../../components/RespMenu"

import { useRef, useState } from "react"

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isCopy, setIsCopy] = useState(false)

  const text = useRef('null')

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

  return (
    <div className=" bg-slate-950 flex flex-col">
      <NavBar handleMenu={handleMenu} isOpen={isOpen}/>
        {isOpen ?
          <RespMenu handleMenu={handleMenu}/> :
          <main className="flex flex-col">
            <Landing/>
            <About/>
            <Portfolio/>
            <Contact handleCopy={handleCopy} text={text} isCopy={isCopy}/>
            <div className='h-10 bg-slate-900 flex justify-center p-4 text-xs text-slate-300'>Created by Ton</div>
          </main>
        }
    </div>
  )
}

export default Home
