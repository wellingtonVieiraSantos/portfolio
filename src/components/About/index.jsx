import FadeUp from "../FadeUp"

const About = () => {

  const tecnologies = {
    'focus':['HTML', 'CSS', 'JavaScript', 'React.js', 'GitHub', 'API Restfull'],
    'seen':['PHP', 'Java', 'Python', 'Node.js', 'Express', 'Sql DB', 'NoSql DB']
  }

  return (
    <section className='bg-slate-950 flex text-slate-100 ' id='about'>
      <div className='flex flex-col p-5 w-[min(1000px,100%)] m-auto'>
        <FadeUp>
          <h2 className='text-3xl text-violet-500 font-semibold'>About</h2>
        </FadeUp>
        <div className='p-4 text-sm sm:text-xl'>
          <FadeUp>
            <p className='mb-4'>Hi, my name is Wellington.</p>
          </FadeUp>
          <FadeUp>
            <p className='mb-4'>I'm a front-end developer, primarily focused on React.js.
              I've been studying and working as a freelancer for about a year now.</p>
          </FadeUp>
          <FadeUp>
            <p className='mb-4'>I have a degree in mathematics, but when I discovered programming, I fell in love with it, which is why I'm transitioning to a career in this field.</p>
          </FadeUp>
          <FadeUp>
            <p className='mb-4'>I started by studying back-end technologies like Java, PHP, and SQL databases, and then I got into front-end development, learning HTML, CSS, and JavaScript.
              Eventually, I delved into React, and I've become very dedicated to learning everything about front-end development, including both well-established libraries and emerging technologies.</p>
          </FadeUp>
          <FadeUp>
            <p>Let's work together and exchange experiences.</p>
          </FadeUp>
        </div>
        <FadeUp>
          <h3 className='text-lg font-bold'>Technologies (focus):</h3>
        </FadeUp>
        <FadeUp>
          <div className='w-full flex p-3 flex-wrap text-violet-500 font-bold'>
            {tecnologies.focus && tecnologies.focus.map(tec => (
              <span className='border border-violet-500 rounded-2xl p-2 m-1' key={tec}>{tec}</span>
            ))}
          </div>
        </FadeUp>
        <FadeUp>
          <h3 className='text-lg font-bold'>Technologies (seen):</h3>
        </FadeUp>
        <FadeUp>
          <div className='w-full flex p-3 flex-wrap text-violet-500 font-bold'>
            {tecnologies.seen && tecnologies.seen.map(tec => (
              <span className='border border-violet-500 rounded-2xl p-2 m-1' key={tec}>{tec}</span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

export default About