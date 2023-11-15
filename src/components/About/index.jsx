import FadeUp from "../FadeUp"

const About = () => {

  const tecnologies = {
    'focus':['HTML', 'CSS', 'JavaScript', 'React.js', 'Git', 'GitHub', 'API Restfull'],
    'seen':['PHP', 'Java', 'Python', 'Node.js', 'Express', 'Sql DB', 'NoSql DB']
  }

  return (
    <section className=' bg-slate-950 flex text-slate-100 py-20' id='sobre'>
      <div className='flex flex-col p-5 w-[min(1024px,100%)] m-auto'>
        <FadeUp>
          <h2 className='text-4xl text-secondary font-bold'>Sobre mim</h2>
        </FadeUp>
        <div className='px-2 py-6 sm:text-xl text-justify'>
          <FadeUp>
            <p className='mb-4'>Meu nome é Wellington.</p>
          </FadeUp>
          <FadeUp>
            <p className='mb-4'>Sou um desenvolvedor front-end, meu foco de trabalho e estudo é React.js.</p>
          </FadeUp>
          <FadeUp>
            <p className='mb-4'>Trabalho como freelancer a quase seis meses.</p>
          </FadeUp>
          <FadeUp>
            <p className='mb-4'>Tenho formação superior em matemática e estou em transição de carreira para a área de programação.</p>
          </FadeUp>
          <FadeUp>
            <p>Vamos trabalhar juntos e trocar experiências.</p>
          </FadeUp>
        </div>
        <FadeUp>
          <h3 className='text-lg font-bold '>Tecnologias ( <span className="text-secondary">meu foco</span> ):</h3>
        </FadeUp>
        <FadeUp>
          <div className='w-full flex p-3 flex-wrap gap-4 text-slate-200 font-bold'>
            {tecnologies.focus && tecnologies.focus.map(tec => (
              <span className='border border-secondary py-2 px-4 shadow-main shadow-secondary rounded-lg cursor-default' key={tec}>{tec}</span>
            ))}
          </div>
        </FadeUp>
        <FadeUp>
          <h3 className='text-lg font-bold'>Tecnologias ( <span className="text-secondary">tenho noções</span> ):</h3>
        </FadeUp>
        <FadeUp>
          <div className='w-full flex p-3 flex-wrap gap-4 text-slate-200 font-bold'>
            {tecnologies.seen && tecnologies.seen.map(tec => (
              <span className='border border-secondary py-2 px-4 shadow-main shadow-secondary rounded-lg cursor-default' key={tec}>{tec}</span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

export default About

/* obs: fazer as tecnologias como botões saiba mais */
