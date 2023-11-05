import FadeUp from "../FadeUp"

import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Landing = () => {
  return (
    <section className="h-screen flex justify-center items-center" id="home">
      <FadeUp>
        <div className="text-slate-100 cursor-default">
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-loose sm:leading-relaxed md:leading-relaxed xl:leading-normal">
            <p>Olá,</p>
            <p>sou
              <span className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl text-secondary hover:drop-shadow-main transition-all"> Ton</span>,
            </p>
            <p>dev web!</p>
          </h1>
          <p className="my-4 text-xl font-bold text-secondary/90">React.js Programmer.</p>
          <div className="flex gap-5">
            <a href="https://linkedin.com/in/wellingtonsantos2022/" target='_blank' rel='external'
              className="w-28 border border-secondary px-4 py-2 shadow-main shadow-secondary flex justify-center rounded-lg hover:text-secondary hover:border-slate-200 hover:shadow-slate-200 transition-all">
              <FaLinkedin className='text-3xl'/>
            </a>
            <a href="https://github.com/wellingtonVieiraSantos" target='_blank' rel='external'
              className="w-28 border border-secondary px-4 py-2 shadow-main shadow-secondary flex justify-center rounded-lg hover:text-secondary hover:border-slate-200 hover:shadow-slate-200 transition-all">
              <FaGithub className='text-3xl'/>
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}

export default Landing
