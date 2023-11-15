import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

import p from 'prop-types'

const CardPortfolio = (props) => {

  return (
    <div className='p-2 flex flex-col gap-5'>
      <div className='aspect-square overflow-hidden'>
        <img src={props.srcImg} alt={props.alt} className='m-auto'/>
      </div>
      <h3 className='text-3xl text-white'>{props.title}</h3>
      <p className='sm:text-xl'>{props.description}</p>
      <div className='flex gap-5 items-center my-5'>
        <span className='text-lg'>Tec. usadas:</span>
        {props.tecnologies.map(tec =>(
          <span datatype={tec.alt} key={tec.src}
          className='w-7 font-bold relative after:absolute hover:after:content-[attr(datatype)]
          hover:after:border after:border-secondary after:rounded-lg after:p-2 after:right-0 after:mt-3 hover:after:bg-slate-950 '>
            <img src={tec.src} alt={`${tec.alt} icon`} />
          </span>
        ))}
      </div>
      <div className='flex gap-4 mt-3 font-bold'>
          <a href={props.hrefCode} target='_blank' rel='author' className='hover:text-secondary hover:border-slate-200 shadow-main shadow-secondary hover:shadow-slate-200 transition-all flex items-center gap-2 border border-secondary rounded-lg py-2 px-4'>
            <FaGithub className='text-2xl'/>
            <span>Código</span>
          </a>
          <a href={props.hrefPage} target='_blank' rel='author' className='hover:text-secondary hover:border-slate-200 shadow-main shadow-secondary hover:shadow-slate-200 transition-all flex items-center gap-2 border border-secondary rounded-lg py-2 px-4'>
            <BiLinkExternal className='text-2xl'/>
            <span>Página</span>
          </a>
        </div>
    </div>
  )
}

export default CardPortfolio

CardPortfolio.propTypes = {
  props: p.shape({
    title: p.string.isRequired,
    srcImg: p.element.isRequired,
    alt: p.string,
    description: p.string.isRequired,
    hrefCode: p.element.isRequired,
    hrefPage: p.element.isRequired,
    tecnologies: p.arrayOf({
      src: p.element.isRequired,
      alt: p.string
    }
  )})
}

