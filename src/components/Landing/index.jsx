import FadeUp from "../FadeUp"

import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Landing = () => {
  return (
    <section className="h-screen w-[min(1024px,100%)] flex items-center p-6 m-auto" id="home">
      <FadeUp>
        <div className="text-slate-100 cursor-default">
          <h1 className="text-xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-loose sm:leading-relaxed md:leading-relaxed xl:leading-normal mb-20 flex flex-col gap-8">
          <p>Olá, eu sou</p>
          <span className="text-4xl sm:text-7xl md:text-8xl xl:text-9xl text-secondary"> Wellington</span>
          <p className="text-xl lg:text-3xl">Desenvolvedor front-end | JavaScript | ReactJS</p>
          </h1>
          <div className="flex gap-5 font-bold">
            <a href="https://linkedin.com/in/wellingtonsantos2022/" target='_blank' rel='external'
              className="w-24 sm:w-40 border border-blue-600 px-4 py-2 shadow-main shadow-blue-600 flex justify-center items-center text-lg gap-2 rounded-lg hover:text-blue-600 hover:border-slate-200 hover:shadow-slate-200 transition-all">
              <FaLinkedin className='text-2xl'/>
              <span className="hidden sm:block">LinkedIn</span>
            </a>
            <a href="https://github.com/wellingtonVieiraSantos" target='_blank' rel='external'
              className="w-24 sm:w-40 border border-secondary px-4 py-2 shadow-main shadow-secondary flex justify-center items-center text-lg gap-2 rounded-lg hover:text-secondary hover:border-slate-200 hover:shadow-slate-200 transition-all">
              <FaGithub className='text-2xl'/>
              <span className="hidden sm:block">GitHub</span>
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}

export default Landing
