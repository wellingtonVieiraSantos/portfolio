import CardPortfolio from '../CardPortfolio'
import FadeUp from '../FadeUp'

import snakegame from '../../assets/snakegame.png'
import pokedex from '../../assets/pokedex.png'
import quiz from '../../assets/portugueseQuiz.png'
import weather from '../../assets/weatherapp.png'

import html from '../../assets/coloredIcons/html5.svg'
import css from '../../assets/coloredIcons/css3.svg'
import js from '../../assets/coloredIcons/js.svg'
import react from '../../assets/coloredIcons/react.svg'
import tailwindcss from '../../assets/coloredIcons/tailwindcss.svg'
import reactRouterDom from '../../assets/coloredIcons/react-router.svg'
import api from '../../assets/coloredIcons/api.svg'

const Portfolio = () => {

  //criar integração com api do github posteriormente
  return (
    <section className='bg-slate-900 text-slate-100 py-20' id='portfolio'>
      <div className='w-[min(1024px,100%)] flex flex-col m-auto'>
        <FadeUp>
          <h2 className='text-4xl text-secondary font-bold p-5'>Portfolio</h2>
        </FadeUp>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <FadeUp>
              <CardPortfolio
                title='App Clima'
                srcImg={weather}
                alt='clima cover'
                description='App de previsão do tempo simples e responsivo para treino de api e json, usando a api do open-meteo.'
                hrefCode='https://github.com/wellingtonVieiraSantos/weather-app'
                hrefPage='https://weather-app-delta-amber.vercel.app'
                tecnologies={[
                  {'src':react, 'alt':'React'},
                  {'src':tailwindcss, 'alt':'TailwindCss'},
                  {'src':api, 'alt': 'Api'}
                ]}
              />
            </FadeUp>
            <FadeUp>
              <CardPortfolio
                title='Quiz'
                srcImg={quiz}
                alt='quiz cover'
                description='Quiz sobre conjunções da lingua portuguesa, criada para auxiliar candidatos a professor a estudarem para o concurso.'
                hrefCode='https://github.com/wellingtonVieiraSantos/quiz-react'
                hrefPage='https://quiz-react-ton.vercel.app'
                tecnologies={
                  [
                    {'src':react, 'alt':'React'},
                    {'src':tailwindcss, 'alt':'TailwindCss'},
                    {'src':reactRouterDom, 'alt':'React router'}
                  ]}
              />
            </FadeUp>
            <FadeUp>
              <CardPortfolio
                title='Snake Game'
                srcImg={snakegame}
                alt='snake game cover'
                description='Famoso jogo da cobrinha de celulares antigos, feito sem auxílio de libs, apenas js puro.'
                hrefCode='https://github.com/wellingtonVieiraSantos/snake-game'
                hrefPage='http://wellingtonvieirasantos.github.io/snake-game/'
                tecnologies={[
                  {'src':html, 'alt':'HTML'},
                  {'src':css, 'alt':'CSS'},
                  {'src':js, 'alt': 'JavaScript'}
                ]}
              />
            </FadeUp>
            <FadeUp>
              <CardPortfolio
                title='Pokedex'
                srcImg={pokedex}
                alt='pokedex cover'
                description='Pokedex simples criada para treinar integração com api e estudo de json, com o auxílio da famosa pokeapi.'
                hrefCode='https://github.com/wellingtonVieiraSantos/pokedex'
                hrefPage='https://pokedex-i4xtzv95l-wellingtonvieirasantos.vercel.app'
                tecnologies={[
                  {'src':html, 'alt':'HTML'},
                  {'src':css, 'alt':'CSS'},
                  {'src':js, 'alt': 'JavaScript'},
                  {'src':api, 'alt': 'Api'}
                ]}
              />
            </FadeUp>
          </div>
      </div>
    </section>
  )
}

export default Portfolio
