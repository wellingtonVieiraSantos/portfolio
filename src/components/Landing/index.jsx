import FadeUp from "../FadeUp"

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import perfil from '../../assets/perfil.png'

const Landing = () => {
  return (
    <section className="h-screen flex justify-around items-center p-4">
      <FadeUp>
        <div className="text-slate-100 cursor-default">
          <h1 className="text-3xl md:text-7xl xl:text-8xl font-bold">
            <p>Hi,</p>
            <p>i'm
              <span className="text-5xl md:text-8xl xl:text-9xl text-purple-500 hover:drop-shadow-main transition-all"> Ton</span>,
            </p>
            <p>web developer!</p>
          </h1>
          <p className="my-4 text-sm">React.js Programmer.</p>
          <div className="flex text-violet-500 gap-5">
            <a href="https://linkedin.com/in/wellingtonsantos2022/" target='_blank' rel='external'
              className="w-28 border border-violet-900 px-6 py-1 shadow-main shadow-violet-800 flex justify-center">
              <FaLinkedin className='text-3xl'/>
            </a>
            <a href="https://github.com/wellingtonVieiraSantos" target='_blank' rel='external'
              className="w-28 border border-violet-900 px-6 py-1 shadow-main shadow-violet-800 flex justify-center">
              <FaGithub className='text-3xl'/>
            </a>
          </div>
        </div>
      </FadeUp>
      <div className="hidden lg:block w-2/5">
        <FadeUp>
          <img src={perfil} alt="home cover" />
        </FadeUp>
      </div>
    </section>
  )
}

export default Landing
