import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

import p from 'prop-types'

const CardPortfolio = (props) => {

  return (
    <div className='p-2 flex flex-col gap-3'>
      <div className='aspect-square overflow-hidden'>
        <img src={props.srcImg} alt={props.alt} className=''/>
      </div>
      <div className='flex justify-between items-center text-2xl text-secondary/60'>
        <h3>{props.title}</h3>
        <div className='flex gap-2 '>
          <a href={props.hrefCode} target='_blank' rel='author' className='hover:text-secondary'>
            <FaGithub/>
          </a>
          <a href={props.hrefPage} target='_blank' rel='author' className='hover:text-secondary'>
            <BiLinkExternal/>
          </a>
        </div>
      </div>
      <p className='sm:text-xl'>{props.description}</p>
      <div className='flex gap-5 justify-end items-center'>
        {props.tecnologies.map(tec =>(
          <span datatype={tec.alt} key={tec.src}
          className='w-7 text-slate-200 font-bold relative after:absolute hover:after:content-[attr(datatype)]
          hover:after:border after:border-secondary after:rounded-lg after:p-2 after:right-0 after:mt-3 hover:after:bg-slate-950 '>
            <img src={tec.src} alt={`${tec.alt} icon`} />
          </span>
        ))}
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

