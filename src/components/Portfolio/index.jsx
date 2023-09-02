import CardPortfolio from '../CardPortfolio'
import FadeUp from '../FadeUp'

const Portfolio = () => {

  //criar integração com api do github posteriormente
  return (
    <section className='bg-slate-900 flex flex-col text-slate-100 pb-5' id='portfolio'>
      <div className='w-[min(1000px,100%)] flex flex-col m-auto'>
        <FadeUp>
          <h2 className='text-3xl text-violet-500 font-semibold p-5'>Portfolio</h2>
        </FadeUp>
        <FadeUp>
          <div className=' grid grid-cols-main gap-10'>
              <CardPortfolio
                title='Snake Game'
                srcImg='./src/assets/snakegame.jpeg'
                alt='snake game cover'
                description='old cell phone snake game done with html, css and javascript'
                hrefCode='https://github.com/wellingtonVieiraSantos/snake-game'
                hrefPage='http://wellingtonvieirasantos.github.io/snake-game/'
              />
              <CardPortfolio
                title='Pokedex'
                srcImg='./src/assets/pokedex.png'
                alt='pokedex cover'
                description='Pokedex project using html, css, js and pokeapi.'
                hrefCode='https://github.com/wellingtonVieiraSantos/pokedex'
                hrefPage='https://pokedex-i4xtzv95l-wellingtonvieirasantos.vercel.app'
              />
              <CardPortfolio
                title='Quiz Game'
                srcImg='./src/assets/quizgame.png'
                alt='quiz game cover'
                description='old cell phone snake game done with html, css and javascript'
                hrefCode='https://github.com/wellingtonVieiraSantos/Quiz_Javascript'
                hrefPage='https://wellingtonvieirasantos.github.io/Quiz_Javascript/'
              />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

export default Portfolio
