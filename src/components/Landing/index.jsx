import FadeUp from "../FadeUp"

import perfil from '../../assets/perfil2.png'

const Landing = () => {
  return (
    <section className="h-screen flex justify-around items-center p-4">
      <FadeUp>
        <div className="text-slate-100 cursor-default">
          <h1 className="text-4xl md:text-7xl xl:text-8xl">
            <p>Hi,</p>
            <p>I am
              <span className="text-violet-500 hover:drop-shadow-main transition-all"> Ton</span>,
            </p>
            <p>web developer!</p>
          </h1>
          <p className="my-4 text-sm">React.js Programmer.</p>
          <a href='#contact' rel='tag'>
            <button className="w-40 text-center text-violet-500 p-3 rounded font-bold text-lg border
            border-violet-500 hover:bg-violet-500 hover:text-slate-100 hover:drop-shadow-main transition-all">
              Contact me!
            </button>
          </a>
        </div>
      </FadeUp>
      <div className="hidden lg:block">
        <FadeUp>
          <img src={perfil} alt="home cover" />
        </FadeUp>
      </div>
    </section>
  )
}

export default Landing
