import CardPortfolio from '../CardPortfolio'
import FadeUp from '../FadeUp'

import snakegame from '../../assets/snakegame.png'
import pokedex from '../../assets/pokedex.png'
import quizgame from '../../assets/quizgame.png'
import quiz from '../../assets/portugueseQuiz.png'

import html from '../../assets/coloredIcons/html5.svg'
import css from '../../assets/coloredIcons/css3.svg'
import js from '../../assets/coloredIcons/js.svg'
import react from '../../assets/coloredIcons/react.svg'
import tailwindcss from '../../assets/coloredIcons/tailwindcss.svg'
import reactRouterDom from '../../assets/coloredIcons/react-router.svg'

const Portfolio = () => {

  //criar integração com api do github posteriormente
  return (
    <section className='bg-slate-900 text-slate-100 pb-5' id='portfolio'>
      <div className='w-[min(1000px,100%)] flex flex-col m-auto'>
        <FadeUp>
          <h2 className='text-4xl text-violet-500 font-bold p-5'>Portfolio</h2>
        </FadeUp>
          <div className='grid grid-cols-main gap-10'>
            <FadeUp>
              <CardPortfolio
                title='Portuguese Quiz'
                srcImg={quiz}
                alt='portugues quiz cover'
                description='Portuguese conjunctions quiz game with react.js, react-router-dom and tailwindcss'
                hrefCode='https://github.com/wellingtonVieiraSantos/quiz-react'
                hrefPage='https://quiz-react-ton.vercel.app'
                tecnologies={
                  [
                    {'src':react, 'alt':'react icon'},
                    {'src':tailwindcss, 'alt':'tailwindCss icon'},
                    {'src':reactRouterDom, 'alt': 'react-router-dom icon'}
                  ]}
              />
            </FadeUp>
            <FadeUp>
              <CardPortfolio
                title='Snake Game'
                srcImg={snakegame}
                alt='snake game cover'
                description='Old cell phone snake game done with html, css and js'
                hrefCode='https://github.com/wellingtonVieiraSantos/snake-game'
                hrefPage='http://wellingtonvieirasantos.github.io/snake-game/'
                tecnologies={[
                  {'src':html, 'alt':'html icon'},
                  {'src':css, 'alt':'css icon'},
                  {'src':js, 'alt': 'javaScript icon'}
                ]}
              />
            </FadeUp>
            <FadeUp>
              <CardPortfolio
                title='Pokedex'
                srcImg={pokedex}
                alt='pokedex cover'
                description='Pokedex project using html, css, js and pokeapi.'
                hrefCode='https://github.com/wellingtonVieiraSantos/pokedex'
                hrefPage='https://pokedex-i4xtzv95l-wellingtonvieirasantos.vercel.app'
                tecnologies={[
                  {'src':html, 'alt':'html icon'},
                  {'src':css, 'alt':'css icon'},
                  {'src':js, 'alt': 'javaScript icon'}
                ]}
              />
            </FadeUp>
            <FadeUp>
              <CardPortfolio
                title='Quiz Game'
                srcImg={quizgame}
                alt='quiz game cover'
                description='Simple quiz using html, css, js without backend.'
                hrefCode='https://github.com/wellingtonVieiraSantos/Quiz_Javascript'
                hrefPage='https://wellingtonvieirasantos.github.io/Quiz_Javascript/'
                tecnologies={[
                  {'src':html, 'alt':'html icon'},
                  {'src':css, 'alt':'css icon'},
                  {'src':js, 'alt': 'javaScript icon'}
                ]}
              />
            </FadeUp>
          </div>
      </div>
    </section>
  )
}

export default Portfolio
